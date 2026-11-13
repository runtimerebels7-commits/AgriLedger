from flask import Blueprint, jsonify, session
from database import get_db

notifications_bp = Blueprint("notifications", __name__)


def create_notification(user_id, message, language):
    db = get_db()

    db.execute("""
        INSERT INTO notifications (user_id, message, language)
        VALUES (?, ?, ?)
    """, (user_id, message, language))

    db.commit()


@notifications_bp.route("/api/notifications")
def get_notifications():
    if not session.get("user_id"):
        return jsonify({"error": "Login required"}), 401

    rows = get_db().execute("""
        SELECT *
        FROM notifications
        WHERE user_id = ?
        ORDER BY id DESC
        LIMIT 30
    """, (session["user_id"],)).fetchall()

    return jsonify([dict(row) for row in rows])