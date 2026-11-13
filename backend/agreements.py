
from pathlib import Path

from flask import (
    Blueprint,
    request,
    session,
    redirect,
    url_for,
    current_app,
    render_template_string,
    send_from_directory
)
from werkzeug.utils import secure_filename

from database import get_db
from services.document_translation_service import (
    translate_agreement_file,
    SUPPORTED_LANGUAGES
)

agreements_bp = Blueprint("agreements", __name__)

ALLOWED_EXTENSIONS = {".pdf", ".png", ".jpg", ".jpeg"}

LANGUAGE_OPTIONS = [
    ("en-IN", "English"),
    ("kn-IN", "Kannada"),
    ("hi-IN", "Hindi"),
    ("ta-IN", "Tamil"),
    ("te-IN", "Telugu"),
    ("ml-IN", "Malayalam"),
    ("mr-IN", "Marathi"),
    ("bn-IN", "Bengali")
]


AGREEMENTS_PAGE = """
{% extends "base.html" %}

{% block title %}Agreements | AgriLedger{% endblock %}

{% block content %}

<style>
.agreements-wrapper {
    max-width: 1050px;
    margin: 35px auto;
    padding: 30px;
}

.agreement-section {
    background: #ffffff;
    border: 1px solid #dce8dc;
    border-radius: 16px;
    padding: 28px;
    margin-top: 25px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.agreement-section h2 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #173c29;
}

.agreement-description {
    color: #647568;
    margin-bottom: 22px;
    line-height: 1.6;
}

.agreement-field {
    margin-bottom: 20px;
}

.agreement-field label {
    display: block;
    font-weight: 600;
    margin-bottom: 9px;
}

.agreement-field select,
.agreement-field input[type="file"] {
    display: block;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding: 13px;
    border: 1px solid #d5e3d5;
    border-radius: 10px;
    background: #fff;
    font-size: 15px;
}

.agreement-submit {
    margin-top: 5px;
    min-width: 220px;
}

.agreement-message {
    padding: 14px 18px;
    border-radius: 9px;
    margin: 20px 0;
}

.agreement-error {
    background: #fff0f0;
    color: #a32727;
}

.agreement-success {
    background: #eaf8ed;
    color: #176b32;
}

.agreement-table-wrapper {
    width: 100%;
    overflow-x: auto;
}

.agreement-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 650px;
}

.agreement-table th,
.agreement-table td {
    text-align: left;
    padding: 16px 12px;
    border-bottom: 1px solid #e5eee5;
    vertical-align: middle;
}

.agreement-table th {
    background: #f5f9f5;
    color: #55705b;
    font-size: 13px;
    text-transform: uppercase;
}

.agreement-table a {
    color: #13763b;
    font-weight: 600;
    text-decoration: none;
}

.agreement-table a:hover {
    text-decoration: underline;
}

.agreement-downloads {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.agreement-back {
    display: inline-block;
    margin-top: 25px;
}

@media (max-width: 650px) {
    .agreements-wrapper {
        padding: 15px;
        margin: 15px auto;
    }

    .agreement-section {
        padding: 18px;
    }

    .agreement-submit {
        width: 100%;
    }
}
</style>


<main class="agreements-wrapper">

    <span class="eyebrow">DOCUMENT MANAGEMENT</span>

    <h1>My Agreements</h1>

    <p>
        Upload, manage and translate your agricultural agreements
        in your preferred language.
    </p>


    {% if error %}
    <div class="agreement-message agreement-error">
        {{ error }}
    </div>
    {% endif %}

    {% if success %}
    <div class="agreement-message agreement-success">
        {{ success }}
    </div>
    {% endif %}


    <!-- SECTION 1: UPLOAD AGREEMENT -->

    <section class="agreement-section">

        <h2>1. Upload Agreement</h2>

        <p class="agreement-description">
            Upload your agreement as a PDF or image and link it
            to an existing agricultural transaction.
        </p>

        <form method="POST" enctype="multipart/form-data">

            <div class="agreement-field">

                <label for="transaction_id">
                    Select Transaction
                </label>

                <select
                    id="transaction_id"
                    name="transaction_id"
                    required
                    {% if not transactions %}disabled{% endif %}
                >

                    <option value="">Choose a transaction</option>

                    {% for t in transactions %}
                    <option value="{{ t.id }}">
                        AGR-{{ t.id }} — {{ t.crop_name }}
                    </option>
                    {% endfor %}

                </select>

            </div>


            <div class="agreement-field">

                <label for="agreement_file">
                    Select Agreement Document
                </label>

                <input
                    type="file"
                    id="agreement_file"
                    name="agreement_file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    required
                >

            </div>


            <button
                class="btn btn-green agreement-submit"
                type="submit"
                {% if not transactions %}disabled{% endif %}
            >
                Upload Agreement
            </button>

        </form>

        {% if not transactions %}
        <div class="agreement-message agreement-error">
            You don't have any transactions yet.
            Create a transaction before uploading an agreement.
            <br><br>
            <a href="/transactions/new">
                Create Your First Transaction
            </a>
        </div>
        {% endif %}

    </section>



    <!-- SECTION 2: TRANSLATE AGREEMENT -->

    <section class="agreement-section">

        <h2>2. Translate Agreement</h2>

        <p class="agreement-description">
            Select an uploaded agreement, specify the language
            of the original document, and choose the language
            into which you want to translate it.
        </p>


        {% if agreements %}

        <form
            method="POST"
            id="agreementTranslationForm"
        >

            <div class="agreement-field">

                <label for="selected_agreement_id">
                    Select Uploaded Agreement
                </label>

                <select
                    id="selected_agreement_id"
                    name="selected_agreement_id"
                    required
                >

                    <option value="">
                        Choose an uploaded agreement
                    </option>

                    {% for a in agreements %}
                    <option value="{{ a.id }}">
                        {{ a.filename }} — AGR-{{ a.transaction_id }}
                    </option>
                    {% endfor %}

                </select>

            </div>


            <div class="agreement-field">

                <label for="source_language">
                    Original Document Language
                </label>

                <select
                    id="source_language"
                    name="source_language"
                    required
                >

                    {% for code, language in languages %}
                    <option value="{{ code }}">
                        {{ language }}
                    </option>
                    {% endfor %}

                </select>

            </div>


            <div class="agreement-field">

                <label for="target_language">
                    Translate Into
                </label>

                <select
                    id="target_language"
                    name="target_language"
                    required
                >

                    {% for code, language in languages %}
                    <option value="{{ code }}">
                        {{ language }}
                    </option>
                    {% endfor %}

                </select>

            </div>


            <button
                type="submit"
                class="btn btn-green agreement-submit"
            >
                Translate Agreement
            </button>

        </form>

        {% else %}

        <p>
            No agreements are available for translation.
            Upload an agreement in the section above first.
        </p>

        {% endif %}

    </section>



    <!-- SECTION 3: UPLOADED AGREEMENTS -->

    <section class="agreement-section">

        <h2>3. Uploaded Agreements</h2>

        <p class="agreement-description">
            View your uploaded documents and download original
            or translated copies separately.
        </p>


        <div class="agreement-table-wrapper">

            <table class="agreement-table">

                <thead>

                    <tr>
                        <th>Document</th>
                        <th>Transaction</th>
                        <th>Uploaded</th>
                        <th>Downloads</th>
                    </tr>

                </thead>


                <tbody>

                {% for a in agreements %}

                    <tr>

                        <td>{{ a.filename }}</td>

                        <td>
                            AGR-{{ a.transaction_id }}
                            — {{ a.crop_name }}
                        </td>

                        <td>{{ a.uploaded_at }}</td>

                        <td>

                            <div class="agreement-downloads">

                                <a href="{{ url_for(
                                    'agreements.get_agreement',
                                    agreement_id=a.id
                                ) }}">
                                    Download Original
                                </a>


                                {% for code, language in languages %}

                                    {% if code in a.translated_languages %}

                                    <a href="{{ url_for(
                                        'agreements.download_translated_agreement',
                                        agreement_id=a.id,
                                        target_language=code
                                    ) }}">
                                        Download {{ language }} Translation
                                    </a>

                                    {% endif %}

                                {% endfor %}

                            </div>

                        </td>

                    </tr>

                {% else %}

                    <tr>
                        <td colspan="4">
                            No agreements uploaded yet.
                        </td>
                    </tr>

                {% endfor %}

                </tbody>

            </table>

        </div>

    </section>


    <a
        href="{{ '/farmer' if session.get('role') == 'farmer' else '/buyer' }}"
        class="btn btn-outline agreement-back"
    >
        Back to Dashboard
    </a>

</main>


<script>

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById(
        "agreementTranslationForm"
    );

    if (!form) {
        return;
    }

    const agreementSelect = document.getElementById(
        "selected_agreement_id"
    );

    const sourceSelect = document.getElementById(
        "source_language"
    );

    const targetSelect = document.getElementById(
        "target_language"
    );


    form.addEventListener("submit", function (event) {

        if (!agreementSelect.value) {
            event.preventDefault();
            alert("Please select an agreement.");
            return;
        }

        if (sourceSelect.value === targetSelect.value) {
            event.preventDefault();

            alert(
                "Please select two different languages."
            );

            return;
        }

        form.action =
            "/agreements/" +
            agreementSelect.value +
            "/translate";

    });

});

</script>

{% endblock %}
"""


def render_agreements_page(error=None, success=None):

    if not session.get("user_id"):
        return redirect(url_for("auth.login"))

    db = get_db()
    user_id = session["user_id"]

    transactions = db.execute("""
        SELECT id, crop_name
        FROM transactions
        WHERE farmer_id = ? OR buyer_id = ?
        ORDER BY id DESC
    """, (user_id, user_id)).fetchall()

    records = db.execute("""
        SELECT a.*, t.crop_name
        FROM agreements a
        JOIN transactions t ON t.id = a.transaction_id
        WHERE t.farmer_id = ? OR t.buyer_id = ?
        ORDER BY a.id DESC
    """, (user_id, user_id)).fetchall()

    folder = Path(current_app.config["UPLOAD_FOLDER"])

    agreements_list = []

    for record in records:

        item = dict(record)

        translated_languages = []

        for code, language in LANGUAGE_OPTIONS:

            translated_filename = (
                f"agreement_{item['id']}_{code}.pdf"
            )

            if (folder / translated_filename).is_file():
                translated_languages.append(code)

        item["translated_languages"] = translated_languages

        agreements_list.append(item)

    return render_template_string(
        AGREEMENTS_PAGE,
        agreements=agreements_list,
        transactions=transactions,
        languages=LANGUAGE_OPTIONS,
        error=error,
        success=success
    )


@agreements_bp.route("/agreements", methods=["GET", "POST"])
def agreements():

    if not session.get("user_id"):
        return redirect(url_for("auth.login"))

    db = get_db()
    user_id = session["user_id"]

    if request.method == "POST":

        file = request.files.get("agreement_file")

        transaction_id = request.form.get(
            "transaction_id",
            type=int
        )

        if not file or not file.filename or not transaction_id:

            return render_agreements_page(
                error="Choose a transaction and a document."
            )

        filename = secure_filename(file.filename)

        if Path(filename).suffix.lower() not in ALLOWED_EXTENSIONS:

            return render_agreements_page(
                error="Only PDF, PNG and JPG files are accepted."
            )

        transaction = db.execute("""
            SELECT id
            FROM transactions
            WHERE id = ?
              AND (farmer_id = ? OR buyer_id = ?)
        """, (
            transaction_id,
            user_id,
            user_id
        )).fetchone()

        if not transaction:

            return render_agreements_page(
                error="That transaction was not found."
            )

        folder = Path(current_app.config["UPLOAD_FOLDER"])
        folder.mkdir(parents=True, exist_ok=True)

        saved_name = (
            f"transaction_{transaction_id}_{user_id}_{filename}"
        )

        file.save(folder / saved_name)

        db.execute("""
            INSERT INTO agreements
            (transaction_id, filename, uploaded_by)
            VALUES (?, ?, ?)
        """, (
            transaction_id,
            saved_name,
            user_id
        ))

        db.commit()

        return redirect(url_for("agreements.agreements"))

    return render_agreements_page()


@agreements_bp.route(
    "/agreements/<int:agreement_id>/translate",
    methods=["POST"]
)
def translate_agreement(agreement_id):

    if not session.get("user_id"):
        return redirect(url_for("auth.login"))

    user_id = session["user_id"]

    source_language = request.form.get("source_language")
    target_language = request.form.get("target_language")

    if (
        source_language not in SUPPORTED_LANGUAGES
        or target_language not in SUPPORTED_LANGUAGES
    ):

        return render_agreements_page(
            error="Please select valid source and target languages."
        )

    if source_language == target_language:

        return render_agreements_page(
            error="Original and target languages cannot be the same."
        )

    row = get_db().execute("""
        SELECT a.id, a.filename
        FROM agreements a
        JOIN transactions t ON t.id = a.transaction_id
        WHERE a.id = ?
          AND (t.farmer_id = ? OR t.buyer_id = ?)
    """, (
        agreement_id,
        user_id,
        user_id
    )).fetchone()

    if not row:

        return render_agreements_page(
            error="Agreement not found or access denied."
        )

    folder = Path(current_app.config["UPLOAD_FOLDER"])
    source_path = folder / row["filename"]

    if not source_path.is_file():

        return render_agreements_page(
            error="The original agreement file could not be found."
        )

    output_filename = (
        f"agreement_{agreement_id}_{target_language}.pdf"
    )

    output_path = folder / output_filename

    try:

        result = translate_agreement_file(
            source_path=str(source_path),
            source_filename=row["filename"],
            source_language=source_language,
            target_language=target_language,
            output_path=str(output_path)
        )

        if not result or not result.get("success"):

            raise RuntimeError(
                "The translation service did not complete successfully."
            )

        return render_agreements_page(
            success=(
                "Agreement translated successfully. "
                "The original document remains unchanged."
            )
        )

    except Exception as exc:

        current_app.logger.exception(
            "Agreement translation failed for agreement %s",
            agreement_id
        )

        return render_agreements_page(
            error=f"Translation failed: {str(exc)}"
        )


@agreements_bp.route(
    "/agreements/<int:agreement_id>/translated/<target_language>"
)
def download_translated_agreement(agreement_id, target_language):

    if not session.get("user_id"):
        return redirect(url_for("auth.login"))

    if target_language not in SUPPORTED_LANGUAGES:
        return "Invalid language.", 400

    row = get_db().execute("""
        SELECT a.id
        FROM agreements a
        JOIN transactions t ON t.id = a.transaction_id
        WHERE a.id = ?
          AND (t.farmer_id = ? OR t.buyer_id = ?)
    """, (
        agreement_id,
        session["user_id"],
        session["user_id"]
    )).fetchone()

    if not row:
        return "Agreement not found or access denied.", 404

    filename = f"agreement_{agreement_id}_{target_language}.pdf"

    folder = Path(current_app.config["UPLOAD_FOLDER"])

    if not (folder / filename).is_file():
        return "Translated document not found.", 404

    return send_from_directory(
        folder,
        filename,
        as_attachment=True
    )


@agreements_bp.route("/agreements/<int:agreement_id>")
def get_agreement(agreement_id):

    if not session.get("user_id"):
        return redirect(url_for("auth.login"))

    row = get_db().execute("""
        SELECT a.filename
        FROM agreements a
        JOIN transactions t ON t.id = a.transaction_id
        WHERE a.id = ?
          AND (t.farmer_id = ? OR t.buyer_id = ?)
    """, (
        agreement_id,
        session["user_id"],
        session["user_id"]
    )).fetchone()

    if not row:
        return "Agreement not found or access denied.", 404

    return send_from_directory(
        current_app.config["UPLOAD_FOLDER"],
        row["filename"],
        as_attachment=True
    )
