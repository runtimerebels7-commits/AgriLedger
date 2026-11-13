
import os
import time
import zipfile
import requests

from pathlib import Path
from io import BytesIO
from sarvamai import SarvamAI


ALLOWED_EXTENSIONS = {
    ".pdf",
    ".png",
    ".jpg",
    ".jpeg"
}


def validate_document(filename):
    extension = Path(filename).suffix.lower()

    if extension not in ALLOWED_EXTENSIONS:
        raise ValueError(
            "Only PDF, PNG and JPG documents are supported."
        )

    return True


def extract_document_text(
    file,
    source_language="en-IN"
):
    """
    Extract text from an uploaded PDF or image using
    Sarvam Document AI.

    The original uploaded file is not modified.
    """

    validate_document(file.filename)

    api_key = os.getenv("SARVAM_API_KEY")

    if (
        not api_key
        or api_key == "PASTE_YOUR_SARVAM_API_KEY_HERE"
    ):
        raise ValueError(
            "Sarvam API key is missing. Check your .env file."
        )

    client = SarvamAI(
        api_subscription_key=api_key
    )

    filename = Path(file.filename).name
    extension = Path(filename).suffix.lower()

    mime_types = {
        ".pdf": "application/pdf",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg"
    }

    file_bytes = file.read()

    if not file_bytes:
        raise ValueError(
            "The uploaded document is empty."
        )

    # Submit the document for text extraction.
    job = client.doc_ai.parse(
        file=[
            (
                filename,
                BytesIO(file_bytes),
                mime_types[extension]
            )
        ],
        language=source_language,
        output_format="md"
    )

    # Wait for document processing.
    terminal_states = {
        "completed",
        "partially_completed",
        "failed",
        "rejected"
    }

    status = job.status

    for _ in range(60):

        if status in terminal_states:
            break

        time.sleep(2)

        status_result = client.doc_ai.get_status(
            job_id=job.job_id
        )

        status = status_result.status

    else:
        raise TimeoutError(
            "Document processing took too long. "
            "Please try again."
        )

    if status not in {
        "completed",
        "partially_completed"
    }:
        raise RuntimeError(
            f"Document extraction failed. Status: {status}"
        )

    # Get the extracted document download URL.
    download_result = client.doc_ai.get_download_url(
        job_id=job.job_id
    )

    download_url = download_result.url

    if not download_url:
        raise RuntimeError(
            "Could not retrieve the extracted document."
        )

    # Download the extracted Markdown ZIP file.
    response = requests.get(
        download_url,
        timeout=60
    )

    response.raise_for_status()

    # Read Markdown files from the ZIP archive.
    try:
        with zipfile.ZipFile(
            BytesIO(response.content)
        ) as archive:

            markdown_files = [
                name
                for name in archive.namelist()
                if name.lower().endswith(".md")
                and not name.endswith("/")
            ]

            if not markdown_files:
                raise RuntimeError(
                    "No readable text was found in the document."
                )

            extracted_parts = []

            for name in sorted(markdown_files):
                extracted_parts.append(
                    archive.read(name).decode(
                        "utf-8",
                        errors="replace"
                    )
                )

    except zipfile.BadZipFile as exc:
        raise RuntimeError(
            "The extracted document could not be opened."
        ) from exc

    extracted_text = "\n\n".join(
        extracted_parts
    ).strip()

    if not extracted_text:
        raise ValueError(
            "No readable text was found in the uploaded document."
        )

    return extracted_text
