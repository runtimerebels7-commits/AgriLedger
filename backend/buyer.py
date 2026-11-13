from flask import Blueprint, render_template, session, redirect, url_for
from database import get_db

buyer_bp = Blueprint("buyer", __name__)


@buyer_bp.route("/buyer")
def dashboard():
    if session.get("role") != "buyer":
        return redirect(url_for("auth.login"))

    transactions = get_db().execute("""
        SELECT t.*, u.username AS farmer_name,
               u.location AS farmer_location
        FROM transactions t
        JOIN users u ON t.farmer_id = u.id
        WHERE t.buyer_id = ?
        ORDER BY t.id DESC
    """, (session["user_id"],)).fetchall()

    return render_template(
        "buyer_dashboard.html",
        transactions=transactions
    )