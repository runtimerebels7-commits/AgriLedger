from services.sarvam_service import (
    transcribe_audio,
    synthesize_speech
)


def speech_to_text(audio_bytes, filename, language_code):
    return transcribe_audio(
        audio_bytes,
        filename,
        language_code
    )


def text_to_speech(text, language_code):
    return synthesize_speech(text, language_code)