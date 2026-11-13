from flask import Blueprint, render_template, request, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash
from database import get_db

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "GET":
        return render_template("register.html")

    username = request.form.get("username", "").strip()
    phone = request.form.get("phone", "").strip()
    password = request.form.get("password", "")
    role = request.form.get("role", "farmer")
    language = request.form.get("language", "kn-IN")
    location = request.form.get("location", "").strip()
    business_name = request.form.get("business_name", "").strip()

    if not username or not phone.isdigit() or len(phone) != 10:
        return render_template(
            "register.html",
            error="Enter a valid name and 10-digit mobile number."
        )

    if len(password) < 8:
        return render_template(
            "register.html",
            error="Password must contain at least 8 characters."
        )

    if role not in ("farmer", "buyer"):
        return render_template(
            "register.html",
            error="Choose a valid account type."
        )

    db = get_db()

    try:
        db.execute("""
            INSERT INTO users
            (username, phone, password_hash, role, language,
             location, business_name)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (
            username,
            phone,
            generate_password_hash(password),
            role,
            language,
            location,
            business_name
        ))
        db.commit()

    except Exception:
        db.rollback()
        return render_template(
            "register.html",
            error="This mobile number may already be registered."
        )

    return redirect(url_for("auth.login"))


@auth_bp.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")

    phone = request.form.get("phone", "").strip()
    password = request.form.get("password", "")
    selected_role = request.form.get("role", "")

    user = get_db().execute(
        "SELECT * FROM users WHERE phone = ?",
        (phone,)
    ).fetchone()

    if not user or not check_password_hash(user["password_hash"], password):
        return render_template(
            "login.html",
            error="Invalid mobile number or password."
        )

    if selected_role != user["role"]:
        return render_template(
            "login.html",
            error="Choose the correct portal for this account."
        )

    session.clear()
    session["user_id"] = user["id"]
    session["username"] = user["username"]
    session["role"] = user["role"]
    session["language"] = user["language"]

    if user["role"] == "farmer":
        return redirect(url_for("farmer.dashboard"))

    if user["role"] == "buyer":
        return redirect(url_for("buyer.dashboard"))

    return redirect(url_for("admin.dashboard"))


@auth_bp.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("home"))