
from flask import (
    Blueprint, request, session, redirect,
    url_for, render_template_string
)
from database import get_db

payments_bp = Blueprint("payments", __name__)

PAYMENTS_PAGE = """
{% extends "base.html" %}
{% block title %}Payments | AgriLedger{% endblock %}
{% block content %}
<main class="transaction-page">
    <section class="transaction-box">
        <span class="eyebrow">PAYMENT MANAGEMENT</span>
        <h1>Payment Tracking</h1>
        <p>Record payments and view payment history for your transactions.</p>

        {% if error %}
        <div class="error-message">{{ error }}</div>
        {% endif %}

        <h3 style="margin-top:25px;">Record a Payment</h3>

        <form method="POST">
            <label>Transaction</label>
            <select name="transaction_id" required {% if not transactions %}disabled{% endif %}>
                <option value="">Choose a transaction</option>

                {% for t in transactions %}
                <option value="{{ t.id }}">
                    AGR-{{ t.id }} — {{ t.crop_name }}
                    (Remaining: ₹{{ "%.2f"|format(t.balance) }})
                </option>
                {% endfor %}
            </select>

            {% if not transactions %}
            <div class="error-message">
                No transactions are available for payment.
                Create a transaction first.
                <br><br>
                <a href="/transactions/new">+ Create Your First Transaction</a>
            </div>
            {% endif %}

            <label>Payment Amount (₹)</label>
            <input type="number" name="amount"
                   min="0.01" step="0.01" required>

            <label>Payment Method</label>
            <select name="payment_mode">
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Other">Other</option>
            </select>

            <label>Payment Reference (optional)</label>
            <input type="text" name="reference"
                   placeholder="UPI ID or transaction reference">

            <button class="btn btn-green full" type="submit">
                Save Payment Record
            </button>
        </form>

        <h3 style="margin-top:30px;">Payment History</h3>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Transaction</th>
                        <th>Amount</th>
                        <th>Method</th>
                        <th>Reference</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                {% for p in payments %}
                    <tr>
                        <td>AGR-{{ p.transaction_id }} — {{ p.crop_name }}</td>
                        <td>₹{{ "%.2f"|format(p.amount) }}</td>
                        <td>{{ p.payment_mode or 'Not specified' }}</td>
                        <td>{{ p.reference or '-' }}</td>
                        <td>{{ p.paid_at }}</td>
                    </tr>
                {% else %}
                    <tr>
                        <td colspan="5">No payment records yet.</td>
                    </tr>
                {% endfor %}
                </tbody>
            </table>
        </div>

        <a href="{{ '/farmer' if session.get('role') == 'farmer' else '/buyer' }}"
           class="btn btn-outline" style="margin-top:20px;">
            Back to Dashboard
        </a>
    </section>
</main>
{% endblock %}
"""


@payments_bp.route("/payments", methods=["GET", "POST"])
def payments():
    if not session.get("user_id"):
        return redirect(url_for("auth.login"))

    db = get_db()
    user_id = session["user_id"]
    error = None

    if request.method == "POST":
        transaction_id = request.form.get("transaction_id", type=int)
        amount = request.form.get("amount", type=float)
        mode = request.form.get("payment_mode", "Cash")
        reference = request.form.get("reference", "").strip()

        transaction = None

        if transaction_id:
            transaction = db.execute("""
                SELECT * FROM transactions
                WHERE id = ?
                  AND (farmer_id = ? OR buyer_id = ?)
            """, (transaction_id, user_id, user_id)).fetchone()

        if not transaction or amount is None or amount <= 0:
            error = "Choose a valid transaction and enter a valid amount."
        else:
            paid = db.execute("""
                SELECT COALESCE(SUM(amount), 0) AS total
                FROM payments
                WHERE transaction_id = ?
            """, (transaction_id,)).fetchone()["total"]

            balance = transaction["final_amount"] - paid

            if amount > balance:
                error = f"Payment exceeds the remaining balance of ₹{balance:.2f}."
            else:
                db.execute("""
                    INSERT INTO payments
                    (transaction_id, amount, payment_mode, reference)
                    VALUES (?, ?, ?, ?)
                """, (transaction_id, amount, mode, reference))

                db.commit()

                return redirect(url_for("payments.payments"))

    transactions = db.execute("""
        SELECT t.id, t.crop_name, t.final_amount,
               COALESCE(SUM(p.amount), 0) AS paid,
               t.final_amount - COALESCE(SUM(p.amount), 0) AS balance
        FROM transactions t
        LEFT JOIN payments p ON p.transaction_id = t.id
        WHERE t.farmer_id = ? OR t.buyer_id = ?
        GROUP BY t.id
        ORDER BY t.id DESC
    """, (user_id, user_id)).fetchall()

    records = db.execute("""
        SELECT p.*, t.crop_name
        FROM payments p
        JOIN transactions t ON t.id = p.transaction_id
        WHERE t.farmer_id = ? OR t.buyer_id = ?
        ORDER BY p.id DESC
    """, (user_id, user_id)).fetchall()

    return render_template_string(
        PAYMENTS_PAGE,
        transactions=transactions,
        payments=records,
        error=error
    )
