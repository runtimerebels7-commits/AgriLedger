
import os


def send_sms(phone_number, message):
    account_sid = os.getenv("TWILIO_ACCOUNT_SID")
    auth_token = os.getenv("TWILIO_AUTH_TOKEN")
    sender = os.getenv("TWILIO_FROM_NUMBER")

    # Demo mode when Twilio credentials are not configured
    if not account_sid or not auth_token or not sender:
        print("\n========== AGRILEDGER SMS ==========")
        print("Recipient:", phone_number)
        print("Message:", message)
        print("SMS not sent: Twilio credentials are missing.")
        print("====================================\n")
        return False

    try:
        from twilio.rest import Client

        client = Client(account_sid, auth_token)

        client.messages.create(
            body=message,
            from_=sender,
            to="+91" + phone_number if len(phone_number) == 10 else phone_number
        )

        print("SMS sent successfully to", phone_number)
        return True

    except Exception as error:
        print("SMS sending failed:", error)
        return False

