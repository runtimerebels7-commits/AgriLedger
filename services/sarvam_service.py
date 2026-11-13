
import os
import io
import base64

from sarvamai import SarvamAI


# ============================================================
# 1. SARVAM CLIENT
# ============================================================

def get_client():
    """
    Creates and returns the Sarvam AI client using the API key
    stored in the project's .env file.
    """

    api_key = os.getenv("SARVAM_API_KEY")

    if not api_key:
        raise ValueError(
            "SARVAM_API_KEY is missing. Check your .env file."
        )

    if api_key == "PASTE_YOUR_SARVAM_API_KEY_HERE":
        raise ValueError(
            "Please replace the placeholder with your actual API key."
        )

    return SarvamAI(
        api_subscription_key=api_key
    )


# ============================================================
# 2. SPEECH TO TEXT - SAARAS V4
# ============================================================

def transcribe_audio(
    audio_bytes,
    filename="recording.wav",
    language_code="kn-IN"
):
    """
    Converts recorded audio into text using Sarvam Saaras.

    Supported examples:
    Kannada: kn-IN
    Hindi: hi-IN
    Tamil: ta-IN
    Telugu: te-IN
    Malayalam: ml-IN
    English: en-IN

    Use language_code="unknown" for automatic language detection.
    """

    if not audio_bytes:
        raise ValueError("The audio file is empty.")

    client = get_client()

    audio_file = io.BytesIO(audio_bytes)
    audio_file.name = filename

    response = client.speech_to_text.transcribe(
        file=audio_file,
        model="saaras:v4",
        language_code=language_code,
        mode="transcribe"
    )

    transcript = getattr(response, "transcript", None)

    if not transcript:
        raise ValueError(
            "Sarvam could not generate a transcript."
        )

    return transcript


# ============================================================
# 3. TEXT TO SPEECH - BULBUL V3
# ============================================================

def synthesize_speech(
    text,
    language_code="kn-IN"
):
    """
    Converts text into spoken audio using Sarvam Bulbul.

    Returns audio as bytes.
    """

    if not text or not text.strip():
        raise ValueError("Text cannot be empty.")

    if len(text) > 2500:
        raise ValueError(
            "Text exceeds the 2500-character Bulbul v3 limit."
        )

    client = get_client()

    response = client.text_to_speech.convert(
        text=text,
        model="bulbul:v3",
        language_code=language_code,
        speaker="shubh"
    )

    if not response.audios:
        raise ValueError(
            "Sarvam did not return any audio."
        )

    audio_bytes = base64.b64decode(
        response.audios[0]
    )

    if not audio_bytes:
        raise ValueError(
            "The generated audio is empty."
        )

    return audio_bytes


# ============================================================
# 4. TEXT TRANSLATION - SARVAM TRANSLATE
# ============================================================

def translate_text(
    text,
    source_language="en-IN",
    target_language="kn-IN"
):
    """
    Translates text between supported Indian languages.

    Examples:
    English -> Kannada
    Kannada -> Hindi
    Hindi -> Tamil
    """

    if not text or not text.strip():
        raise ValueError("Text cannot be empty.")

    if len(text) > 2000:
        raise ValueError(
            "Translation text cannot exceed 2000 characters."
        )

    client = get_client()

    response = client.text.translate(
        input=text,
        source_language_code=source_language,
        target_language_code=target_language,
        model="sarvam-translate:v1"
    )

    translated_text = getattr(
        response,
        "translated_text",
        None
    )

    if not translated_text:
        raise ValueError(
            "Sarvam could not generate translated text."
        )

    return translated_text


# ============================================================
# 5. AGREEMENT EXPLANATION - SARVAM 105B
# ============================================================

def explain_text(
    text,
    language_code="kn-IN"
):
    """
    Explains agricultural agreements in simple language.

    Identifies important transaction details, financial
    deductions, payment conditions and unclear clauses.
    """

    if not text or not text.strip():
        raise ValueError(
            "Agreement text cannot be empty."
        )

    client = get_client()

    prompt = f"""
You are AgriLedger's agricultural agreement assistant.

Your job is to help Indian farmers understand agricultural
agreements in their preferred language.

Preferred language: {language_code}

Explain the agreement in simple, clear language.

Extract and explain:

1. Crop name
2. Quantity and measurement unit
3. Price per unit
4. Gross transaction amount
5. Deductions and their reasons
6. Final payable amount
7. Payment deadline
8. Buyer's responsibilities
9. Farmer's responsibilities
10. Unclear or missing conditions

IMPORTANT RULES:

- Use simple language that a farmer can understand.
- Explain all financial amounts clearly.
- Highlight deductions and payment conditions.
- Identify unclear, missing or potentially unfair terms.
- Never invent information that is absent from the agreement.
- If information is missing, explicitly say "Not specified".
- Do not claim that the agreement is legally valid.
- Recommend that both parties verify the terms before confirming.

Agreement text:

{text}
"""

    response = client.chat.completions(
        model="sarvam-105b",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        max_tokens=3000
    )

    if not response.choices:
        raise ValueError(
            "Sarvam did not return an agreement explanation."
        )

    explanation = response.choices[0].message.content

    if not explanation:
        raise ValueError(
            "The agreement explanation is empty."
        )

    return explanation
