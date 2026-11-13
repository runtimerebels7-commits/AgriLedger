from flask import Blueprint, render_template, session, redirect, url_for
from database import get_db

farmer_bp = Blueprint("farmer", __name__)


@farmer_bp.route("/farmer")
def dashboard():
    if session.get("role") != "farmer":
        return redirect(url_for("auth.login"))

    db = get_db()
    user_id = session["user_id"]

    transactions = db.execute("""
        SELECT t.*, u.username AS buyer_name
        FROM transactions t
        JOIN users u ON t.buyer_id = u.id
        WHERE t.farmer_id = ?
        ORDER BY t.id DESC
    """, (user_id,)).fetchall()

    totals = db.execute("""
        SELECT
            COALESCE(SUM(gross_amount), 0) AS total_sales,
            COALESCE(SUM(final_amount), 0) AS total_payable,
            COUNT(*) AS transaction_count
        FROM transactions
        WHERE farmer_id = ?
    """, (user_id,)).fetchone()

    return render_template(
        "farmer_dashboard.html",
        transactions=transactions,
        totals=totals
    )