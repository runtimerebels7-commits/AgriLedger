
import os
from sarvamai import SarvamAI


def get_sarvam_client():
    """Create and return the Sarvam AI client."""

    api_key = os.getenv("SARVAM_API_KEY")

    if not api_key or api_key == "PASTE_YOUR_SARVAM_API_KEY_HERE":
        raise ValueError(
            "Sarvam API key is missing. Check your .env file."
        )

    return SarvamAI(api_subscription_key=api_key)


def translate_text(
    text,
    source_language="en-IN",
    target_language="kn-IN"
):
    """
    Translate text using Sarvam AI.
    Long text is automatically divided into smaller chunks.
    """

    return translate_document_text(
        text,
        source_language,
        target_language
    )


def translate_document_text(
    text,
    source_language,
    target_language
):
    """
    Translate longer text in smaller chunks.
    Preserves paragraph boundaries wherever possible.
    """

    if not text or not text.strip():
        raise ValueError("Document contains no readable text.")

    if source_language == target_language:
        return text

    client = get_sarvam_client()
    max_chunk_size = 1800

    paragraphs = text.splitlines()
    chunks = []
    current_chunk = ""

    for paragraph in paragraphs:
        paragraph = paragraph.strip()

        if not paragraph:
            continue

        # Split exceptionally long paragraphs into smaller pieces.
        while len(paragraph) > max_chunk_size:
            if current_chunk:
                chunks.append(current_chunk)
                current_chunk = ""

            chunks.append(paragraph[:max_chunk_size])
            paragraph = paragraph[max_chunk_size:]

        if not paragraph:
            continue

        if len(current_chunk) + len(paragraph) + 1 > max_chunk_size:
            if current_chunk:
                chunks.append(current_chunk)

            current_chunk = paragraph
        else:
            current_chunk = (
                current_chunk + "\n" + paragraph
                if current_chunk else paragraph
            )

    if current_chunk:
        chunks.append(current_chunk)

    translated_chunks = []

    for chunk in chunks:
        response = client.text.translate(
            input=chunk,
            source_language_code=source_language,
            target_language_code=target_language,
            model="sarvam-translate:v1"
        )

        translated = getattr(response, "translated_text", None)

        if not translated:
            raise ValueError(
                "Sarvam could not translate one part of the text."
            )

        translated_chunks.append(translated)

    return "\n\n".join(translated_chunks)

