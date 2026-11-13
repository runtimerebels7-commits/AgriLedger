from io import BytesIO
from flask import Blueprint, request, jsonify, send_file, session

from services.sarvam_service import (
    transcribe_audio,
    synthesize_speech,
    explain_text
)
from services.translation_service import translate_text

ai_bp = Blueprint("ai", __name__)


@ai_bp.route("/api/ai/transcribe", methods=["POST"])
def transcribe():
    if not session.get("user_id"):
        return jsonify({"error": "Login required"}), 401

    audio = request.files.get("audio")

    if not audio:
        return jsonify({"error": "Audio file required"}), 400

    language = request.form.get("language", "kn-IN")

    try:
        result = transcribe_audio(
            audio.read(),
            audio.filename or "recording.webm",
            language
        )
        return jsonify({"transcript": result})
    except Exception as error:
        return jsonify({"error": str(error)}), 500


@ai_bp.route("/api/ai/translate", methods=["POST"])
def translate():
    if not session.get("user_id"):
        return jsonify({"error": "Login required"}), 401

    data = request.get_json(silent=True) or {}

    try:
        result = translate_text(
            data.get("text", ""),
            data.get("source_language", "en-IN"),
            data.get("target_language", "kn-IN")
        )
        return jsonify({"translated_text": result})
    except Exception as error:
        return jsonify({"error": str(error)}), 500


@ai_bp.route("/api/ai/speak", methods=["POST"])
def speak():
    if not session.get("user_id"):
        return jsonify({"error": "Login required"}), 401

    data = request.get_json(silent=True) or {}

    try:
        audio = synthesize_speech(
            data.get("text", ""),
            data.get("language", "kn-IN")
        )

        return send_file(
            BytesIO(audio),
            mimetype="audio/wav",
            download_name="agriledger_voice.wav"
        )
    except Exception as error:
        return jsonify({"error": str(error)}), 500


@ai_bp.route("/api/ai/explain", methods=["POST"])
def explain():
    if not session.get("user_id"):
        return jsonify({"error": "Login required"}), 401

    data = request.get_json(silent=True) or {}

    try:
        result = explain_text(
            data.get("text", ""),
            data.get("language", "kn-IN")
        )
        return jsonify({"explanation": result})
    except Exception as error:
        return jsonify({"error": str(error)}), 500