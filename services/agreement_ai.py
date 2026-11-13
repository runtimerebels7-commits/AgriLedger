from services.sarvam_service import explain_text


def explain_agreement(
    agreement_text,
    preferred_language="kn-IN"
):
    if not agreement_text.strip():
        raise ValueError("Agreement cannot be empty.")

    return explain_text(
        agreement_text,
        preferred_language
    )