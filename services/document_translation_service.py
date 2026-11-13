
import os
import time
import httpx

from pathlib import Path
from tempfile import TemporaryDirectory
from PIL import Image
from sarvamai import SarvamAI


SUPPORTED_LANGUAGES = {
    "en-IN",
    "hi-IN",
    "kn-IN",
    "ta-IN",
    "te-IN",
    "ml-IN",
    "mr-IN",
    "bn-IN",
    "gu-IN",
    "pa-IN",
    "or-IN",
    "as-IN",
    "ur-IN",
    "ne-IN",
    "sd-IN",
    "ks-IN",
    "kok-IN",
    "doi-IN",
    "brx-IN",
    "mni-IN",
    "mai-IN",
    "sa-IN",
    "sat-IN"
}


def translate_agreement_file(
    source_path,
    source_filename,
    source_language,
    target_language,
    output_path
):
    """
    Translate an uploaded agreement using Sarvam Document Translation.

    The original document is never modified.
    The translated document is saved as a separate PDF.
    """

    api_key = os.getenv("SARVAM_API_KEY")

    if not api_key or api_key == "PASTE_YOUR_SARVAM_API_KEY_HERE":
        raise ValueError(
            "Sarvam API key is missing. Check your .env file."
        )

    if source_language not in SUPPORTED_LANGUAGES:
        raise ValueError("Unsupported original document language.")

    if target_language not in SUPPORTED_LANGUAGES:
        raise ValueError("Unsupported target language.")

    if source_language == target_language:
        raise ValueError(
            "Original and target languages cannot be the same."
        )

    original_path = Path(source_path)
    output_file = Path(output_path)

    if not original_path.is_file():
        raise FileNotFoundError("Original agreement file not found.")

    output_file.parent.mkdir(parents=True, exist_ok=True)

    extension = original_path.suffix.lower()

    if extension not in {".pdf", ".png", ".jpg", ".jpeg"}:
        raise ValueError("Only PDF, PNG and JPG files are supported.")

    client = SarvamAI(api_subscription_key=api_key)

    # Sarvam Document Translation accepts PDF documents.
    # Convert uploaded images into a temporary PDF.
    with TemporaryDirectory() as temporary_folder:

        if extension in {".png", ".jpg", ".jpeg"}:

            pdf_path = Path(temporary_folder) / "agreement.pdf"

            with Image.open(original_path) as image:
                converted_image = image.convert("RGB")
                converted_image.save(pdf_path, format="PDF")

            document_path = pdf_path

        else:
            document_path = original_path

        # 1. Create the translation job.
        job = client.document_translation.create(
            job_name="AgriLedger Agreement",
            source_language_code=source_language,
            target_language_codes=[target_language],
            original_filename="agreement.pdf",
            genre="LEGAL"
        )

        # 2. Upload the PDF to Sarvam's signed upload URL.
        with document_path.open("rb") as document:

            response = httpx.put(
                job.upload_url,
                content=document.read(),
                headers={
                    "Content-Type": "application/pdf",
                    "x-ms-blob-type": "BlockBlob"
                },
                timeout=120.0
            )

            response.raise_for_status()

        # 3. Start document translation.
        client.document_translation.start(
            job_id=job.job_id
        )

        # 4. Wait until the requested language is translated.
        translation_completed = False

        for _ in range(60):

            status = client.document_translation.get_live_status(
                job_id=job.job_id
            )

            for translation in status.translations:

                if (
                    translation.target_language_code == target_language
                    and translation.state == "Completed"
                ):
                    translation_completed = True
                    break

                if (
                    translation.target_language_code == target_language
                    and translation.state == "Failed"
                ):
                    raise RuntimeError(
                        "Sarvam could not translate the agreement."
                    )

            if translation_completed:
                break

            if status.job_state == "Failed":
                raise RuntimeError(
                    "Sarvam document translation job failed."
                )

            time.sleep(10)

        if not translation_completed:
            raise TimeoutError(
                "Translation is taking too long. Please try again."
            )

        # 5. Request export of the translated PDF.
        export = client.document_translation.trigger_export(
            job_id=job.job_id,
            lang=target_language
        )

        # 6. Wait for the translated PDF to become available.
        download_url = None

        for _ in range(60):

            export_status = (
                client.document_translation.get_export_status(
                    job_id=job.job_id,
                    export_id=export.export_id
                )
            )

            if export_status.export_state == "Completed":
                download_url = export_status.download_url
                break

            if export_status.export_state == "Failed":
                raise RuntimeError(
                    "Sarvam could not generate the translated PDF."
                )

            time.sleep(5)

        if not download_url:
            raise TimeoutError(
                "Translated PDF export took too long."
            )

        # 7. Download the translated PDF.
        download_response = httpx.get(
            download_url,
            timeout=120.0,
            follow_redirects=True
        )

        download_response.raise_for_status()

        if not download_response.content:
            raise RuntimeError(
                "The translated PDF is empty."
            )

        output_file.write_bytes(download_response.content)

    return {
        "success": True,
        "output_path": str(output_file),
        "target_language": target_language
    }
