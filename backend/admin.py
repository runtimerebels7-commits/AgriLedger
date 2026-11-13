from flask import Blueprint, render_template, session, redirect, url_for
from database import get_db

admin_bp = Blueprint("admin", __name__)


@admin_bp.route("/admin")
def dashboard():
    if session.get("role") != "admin":
        return redirect(url_for("auth.login"))

    db = get_db()

    stats = {
        "farmers": db.execute(
            "SELECT COUNT(*) AS n FROM users WHERE role='farmer'"
        ).fetchone()["n"],

        "buyers": db.execute(
            "SELECT COUNT(*) AS n FROM users WHERE role='buyer'"
        ).fetchone()["n"],

        "transactions": db.execute(
            "SELECT COUNT(*) AS n FROM transactions"
        ).fetchone()["n"],

        "sales": db.execute(
            "SELECT COALESCE(SUM(final_amount),0) AS n FROM transactions"
        ).fetchone()["n"]
    }

    recent = db.execute("""
        SELECT * FROM transactions
        ORDER BY id DESC LIMIT 10
    """).fetchall()

    return render_template(
        "admin_dashboard.html",
        stats=stats,
        recent=recent
    )