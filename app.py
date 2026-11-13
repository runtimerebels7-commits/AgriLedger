
from flask import (
    Flask,
    render_template,
    render_template_string,
    session,
    redirect,
    url_for,
    request
)

from config import Config
import database


# Existing blueprints
from backend.auth import auth_bp
from backend.farmer import farmer_bp
from backend.buyer import buyer_bp
from backend.transactions import transactions_bp
from backend.agreements import agreements_bp
from backend.payments import payments_bp
from backend.notifications import notifications_bp
from backend.admin import admin_bp
from backend.ai_routes import ai_bp

# Government Schemes blueprint
from backend.government_schemes import government_schemes_bp


# ---------------------------------------------------------
# FLASK APPLICATION INITIALIZATION
# ---------------------------------------------------------

app = Flask(__name__)
app.config.from_object(Config)

# Initialize existing database
database.init_app(app)


# ---------------------------------------------------------
# HOME PAGE
# ---------------------------------------------------------

@app.route("/")
def home():
    return render_template("index.html")


# ---------------------------------------------------------
# HEALTH CHECK
# ---------------------------------------------------------

@app.route("/health")
def health():
    return {
        "status": "success",
        "message": "AgriLedger backend is running"
    }


# ---------------------------------------------------------
# PRICE INSIGHTS
# ---------------------------------------------------------

@app.route("/price-insights")
def price_insights():

    if not session.get("user_id"):
        return redirect(url_for("auth.login"))

    # DEMONSTRATION DATA ONLY
    # These are not live mandi prices.

    sample_prices = {
        "tomato": {
            "min_price": 1200,
            "avg_price": 1800,
            "max_price": 2400
        },
        "onion": {
            "min_price": 1500,
            "avg_price": 2000,
            "max_price": 2600
        },
        "potato": {
            "min_price": 1000,
            "avg_price": 1400,
            "max_price": 1800
        },
        "rice": {
            "min_price": 2200,
            "avg_price": 2500,
            "max_price": 2800
        },
        "wheat": {
            "min_price": 2300,
            "avg_price": 2500,
            "max_price": 2700
        }
    }

    selected_crop = request.args.get("crop", "").strip()
    selected_market = request.args.get("market", "").strip()

    searched = bool(selected_crop)
    result = None

    if searched:

        crop_key = selected_crop.lower()

        if crop_key in sample_prices:

            result = {
                "crop": selected_crop.title(),
                "market": selected_market or "General Market",
                **sample_prices[crop_key]
            }

    return render_template(
        "price_insights.html",
        selected_crop=selected_crop,
        selected_market=selected_market,
        searched=searched,
        result=result
    )


# ---------------------------------------------------------
# TRANSACTION HISTORY
# ---------------------------------------------------------

@app.route("/history")
def history():

    if not session.get("user_id"):
        return redirect(url_for("auth.login"))

    from database import get_db

    records = get_db().execute("""
        SELECT t.*,
               f.username AS farmer_name,
               b.username AS buyer_name
        FROM transactions t
        JOIN users f ON t.farmer_id = f.id
        JOIN users b ON t.buyer_id = b.id
        WHERE t.farmer_id = ? OR t.buyer_id = ?
        ORDER BY t.id DESC
    """, (
        session["user_id"],
        session["user_id"]
    )).fetchall()

    return render_template_string("""
    {% extends "base.html" %}

    {% block title %}
    Transaction History | AgriLedger
    {% endblock %}

    {% block content %}

    <main class="transaction-page">
        <section class="transaction-box">

            <span class="eyebrow">YOUR RECORDS</span>

            <h1>Transaction History</h1>

            <p>
                Review your previous agricultural transactions.
            </p>

            <div class="table-container" style="margin-top:25px;">

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Crop</th>
                            <th>Farmer</th>
                            <th>Buyer</th>
                            <th>Quantity</th>
                            <th>Final Amount</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>

                    <tbody>

                    {% for t in records %}

                        <tr>
                            <td>AGR-{{ t.id }}</td>
                            <td>{{ t.crop_name }}</td>
                            <td>{{ t.farmer_name }}</td>
                            <td>{{ t.buyer_name }}</td>
                            <td>{{ t.quantity }} {{ t.unit }}</td>
                            <td>₹{{ t.final_amount }}</td>
                            <td>{{ t.status }}</td>

                            <td>
                                <a href="/transactions/{{ t.id }}">
                                    View
                                </a>
                            </td>
                        </tr>

                    {% else %}

                        <tr>
                            <td colspan="8">
                                No transactions found yet.
                            </td>
                        </tr>

                    {% endfor %}

                    </tbody>
                </table>

            </div>

            <a
                href="{{ '/farmer' if session.get('role') == 'farmer' else '/buyer' }}"
                class="btn btn-outline"
                style="margin-top:20px;"
            >
                Back to Dashboard
            </a>

        </section>
    </main>

    {% endblock %}
    """, records=records)


# ---------------------------------------------------------
# SUPPORT PAGE
# ---------------------------------------------------------

@app.route("/support")
def support():

    if not session.get("user_id"):
        return redirect(url_for("auth.login"))

    # Load the separate premium Help & Support page.
    return render_template("help_support.html")


# ---------------------------------------------------------
# REGISTER ALL EXISTING BLUEPRINTS
# ---------------------------------------------------------

app.register_blueprint(auth_bp)
app.register_blueprint(farmer_bp)
app.register_blueprint(buyer_bp)
app.register_blueprint(transactions_bp)
app.register_blueprint(agreements_bp)
app.register_blueprint(payments_bp)
app.register_blueprint(notifications_bp)
app.register_blueprint(admin_bp)
app.register_blueprint(ai_bp)


# ---------------------------------------------------------
# GOVERNMENT SCHEMES BLUEPRINT
# ---------------------------------------------------------

app.register_blueprint(government_schemes_bp)


# ---------------------------------------------------------
# RUN APPLICATION
# ---------------------------------------------------------

if __name__ == "__main__":

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=app.config["DEBUG"]
    )
