from flask import Blueprint, render_template, request, session, redirect, url_for
from database import get_db
from backend.notifications import create_notification
from services.translation_service import translate_text
from services.sms_service import send_sms

transactions_bp = Blueprint("transactions", __name__)


@transactions_bp.route("/transactions/new", methods=["GET", "POST"])
def create():
    if not session.get("user_id"):
        return redirect(url_for("auth.login"))

    if request.method == "GET":
        return render_template("create_transaction.html")

    db = get_db()

    crop = request.form.get("crop_name", "").strip()
    quantity = request.form.get("quantity", type=float)
    unit = request.form.get("unit", "kg")
    price = request.form.get("price_per_unit", type=float)
    deductions = request.form.get("deductions", default=0, type=float)
    reason = request.form.get("deduction_reason", "").strip()
    deadline = request.form.get("payment_deadline", "")

    if not crop or quantity is None or price is None or deductions is None:
        return render_template(
            "create_transaction.html",
            error="Fill in all required fields."
        )

    if quantity <= 0 or price < 0 or deductions < 0:
        return render_template(
            "create_transaction.html",
            error="Enter valid amounts."
        )

    gross = round(quantity * price, 2)
    final_amount = round(gross - deductions, 2)

    if final_amount < 0:
        return render_template(
            "create_transaction.html",
            error="Deductions cannot exceed the gross amount."
        )

    current_user = db.execute(
        "SELECT * FROM users WHERE id = ?",
        (session["user_id"],)
    ).fetchone()

    if current_user["role"] == "buyer":
        farmer = db.execute("""
            SELECT * FROM users
            WHERE phone = ? AND role = 'farmer'
        """, (request.form.get("farmer_phone", "").strip(),)).fetchone()

        buyer_id = current_user["id"]
        farmer_id = farmer["id"] if farmer else None

    elif current_user["role"] == "farmer":
        buyer = db.execute("""
            SELECT * FROM users
            WHERE phone = ? AND role = 'buyer'
        """, (request.form.get("buyer_phone", "").strip(),)).fetchone()

        farmer_id = current_user["id"]
        buyer_id = buyer["id"] if buyer else None

    else:
        return "Admin accounts cannot create transactions.", 403

    if not farmer_id or not buyer_id:
        return render_template(
            "create_transaction.html",
            error="The other person's registered mobile number was not found."
        )

    cursor = db.execute("""
        INSERT INTO transactions (
            farmer_id, buyer_id, crop_name, quantity, unit,
            price_per_unit, gross_amount, deductions,
            deduction_reason, final_amount, payment_deadline
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        farmer_id, buyer_id, crop, quantity, unit, price,
        gross, deductions, reason, final_amount, deadline or None
    ))

    transaction_id = cursor.lastrowid
    db.commit()

    farmer = db.execute(
        "SELECT * FROM users WHERE id = ?", (farmer_id,)
    ).fetchone()

    buyer = db.execute(
        "SELECT * FROM users WHERE id = ?", (buyer_id,)
    ).fetchone()

    message = (
        f"AgriLedger transaction {transaction_id}. "
        f"Crop: {crop}. Quantity: {quantity} {unit}. "
        f"Price per unit: Rs {price}. Gross: Rs {gross}. "
        f"Deductions: Rs {deductions}. Final payable: Rs {final_amount}. "
        "Please review and confirm the terms."
    )

    for person in (farmer, buyer):
        create_notification(
            person["id"], message, person["language"]
        )

        try:
            translated = translate_text(
                message, "en-IN", person["language"]
            )
            send_sms(person["phone"], translated)
        except Exception as error:
            print("Notification translation/SMS error:", error)

    return redirect(url_for(
        "transactions.detail",
        transaction_id=transaction_id
    ))


@transactions_bp.route("/transactions/<int:transaction_id>")
def detail(transaction_id):
    if not session.get("user_id"):
        return redirect(url_for("auth.login"))

    transaction = get_db().execute("""
        SELECT t.*, f.username AS farmer_name,
               b.username AS buyer_name
        FROM transactions t
        JOIN users f ON t.farmer_id = f.id
        JOIN users b ON t.buyer_id = b.id
        WHERE t.id = ?
          AND (t.farmer_id = ? OR t.buyer_id = ?)
    """, (
        transaction_id,
        session["user_id"],
        session["user_id"]
    )).fetchone()

    if not transaction:
        return "Transaction not found or access denied.", 404

    return render_template(
        "create_transaction.html",
        transaction=transaction
    )


@transactions_bp.route(
    "/transactions/<int:transaction_id>/confirm",
    methods=["POST"]
)
def confirm(transaction_id):
    if not session.get("user_id"):
        return redirect(url_for("auth.login"))

    db = get_db()

    transaction = db.execute(
        "SELECT * FROM transactions WHERE id = ?",
        (transaction_id,)
    ).fetchone()

    if not transaction:
        return "Transaction not found.", 404

    user_id = session["user_id"]

    if user_id == transaction["farmer_id"]:
        db.execute(
            "UPDATE transactions SET farmer_confirmed = 1 WHERE id = ?",
            (transaction_id,)
        )
    elif user_id == transaction["buyer_id"]:
        db.execute(
            "UPDATE transactions SET buyer_confirmed = 1 WHERE id = ?",
            (transaction_id,)
        )
    else:
        return "Access denied.", 403

    updated = db.execute(
        "SELECT * FROM transactions WHERE id = ?",
        (transaction_id,)
    ).fetchone()

    if updated["farmer_confirmed"] and updated["buyer_confirmed"]:
        db.execute("""
            UPDATE transactions
            SET status = 'Agreement Confirmed'
            WHERE id = ?
        """, (transaction_id,))

    db.commit()

    return redirect(url_for(
        "transactions.detail",
        transaction_id=transaction_id
    ))