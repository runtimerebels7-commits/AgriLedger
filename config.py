import os
from pathlib import Path
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent

load_dotenv(BASE_DIR / ".env")


class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "change-this-secret")

    DATABASE_PATH = BASE_DIR / "database" / "agriledger.db"

    UPLOAD_FOLDER = BASE_DIR / "uploads" / "agreements"

    MAX_CONTENT_LENGTH = 12 * 1024 * 1024

    SARVAM_API_KEY = os.getenv("SARVAM_API_KEY")

    TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
    TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
    TWILIO_FROM_NUMBER = os.getenv("TWILIO_FROM_NUMBER")

    DEBUG = os.getenv("FLASK_DEBUG", "False").lower() == "true"