"""
AgriLedger Government Schemes Backend

Features:
- Government Schemes HTML page
- Search across scheme name, description, benefits,
  eligibility, documents and keywords
- Category, state/UT and government-level filters
- JSON API with pagination
- Individual scheme details API
- Filter-options API
- Official source links

The catalogue is a curated starter set. Verify current eligibility,
benefits, application windows and state notifications on official portals.
"""

from datetime import datetime, timezone
from flask import Blueprint, jsonify, render_template, request
import re
import unicodedata


government_schemes_bp = Blueprint(
    "government_schemes",
    __name__
)


# ---------------------------------------------------------
# STATES AND UNION TERRITORIES
# ---------------------------------------------------------

STATES_AND_UTS = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
]


# ---------------------------------------------------------
# GOVERNMENT SCHEMES CATALOGUE
# ---------------------------------------------------------

SCHEMES = [

    {
        "id": "PM-KISAN",
        "name": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
        "short_name": "PM-KISAN",
        "category": "Income Support",
        "level": "central",
        "states": [],

        "description": (
            "A Central Sector income-support scheme for eligible "
            "landholding farmer families. State and Union Territory "
            "administrations identify eligible beneficiaries."
        ),

        "benefits": (
            "₹6,000 per eligible farmer family per year, paid in "
            "three instalments of ₹2,000 through Direct Benefit "
            "Transfer, subject to eligibility and verification."
        ),

        "eligibility": (
            "Eligible landholding farmer families with cultivable "
            "land in their names, subject to the scheme's exclusion "
            "criteria. Institutional landholders and specified "
            "higher-income or public-office categories are excluded."
        ),

        "documents": (
            "Aadhaar details, landholding records, bank account "
            "details and e-KYC. The state authority may require "
            "additional verification."
        ),

        "official_link": "https://www.pmkisan.gov.in/",
        "source_name": "Department of Agriculture and Farmers Welfare",
        "source_url": "https://www.pmkisan.gov.in/",
        "tags": [
            "income",
            "financial assistance",
            "DBT",
            "farmer family"
        ],
        "last_verified": "2026-11-13",

        "verification_note": (
            "Check the official portal for current beneficiary "
            "status, e-KYC requirements and exclusion rules."
        )
    },

    {
        "id": "PMFBY",
        "name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        "short_name": "PMFBY",
        "category": "Crop Insurance",
        "level": "central",
        "states": [],

        "description": (
            "A crop-insurance scheme intended to provide financial "
            "protection against notified crop losses caused by "
            "specified non-preventable risks."
        ),

        "benefits": (
            "Insurance cover for notified crops in notified areas. "
            "Coverage, sum insured, premium and enrolment dates "
            "depend on the relevant state and season notification."
        ),

        "eligibility": (
            "Farmers growing notified crops in notified areas who "
            "have an insurable interest in the crop. Sharecroppers "
            "and tenant farmers may be covered where state rules "
            "and required documents permit. Non-loanee farmer "
            "enrolment is voluntary."
        ),

        "documents": (
            "Farmer identity and bank details, crop and sown-area "
            "details, and land records or permitted cultivation "
            "or tenancy documents as required by the state."
        ),

        "official_link": "https://pmfby.gov.in/",
        "source_name": "Pradhan Mantri Fasal Bima Yojana Portal",
        "source_url": "https://pmfby.gov.in/",
        "tags": [
            "insurance",
            "crop loss",
            "weather",
            "drought",
            "flood"
        ],
        "last_verified": "2026-11-13",

        "verification_note": (
            "Check the portal for crops, districts, insurance "
            "companies and application deadlines for the current season."
        )
    },

    {
        "id": "e-NAM",
        "name": "National Agriculture Market (e-NAM)",
        "short_name": "e-NAM",
        "category": "Market Access",
        "level": "central",
        "states": [],

        "description": (
            "An electronic agricultural trading platform connecting "
            "participating APMC mandis and supporting transparent "
            "online trading and price discovery."
        ),

        "benefits": (
            "Access to participating markets and buyers, transparent "
            "bidding, price and arrival information, quality assaying "
            "where available, and electronic payment facilities."
        ),

        "eligibility": (
            "Farmers can register through a participating e-NAM "
            "mandi or APMC. Availability and onboarding depend "
            "on the participating mandi."
        ),

        "documents": (
            "Basic personal and contact details, bank details, "
            "government identity proof and passbook or cancelled "
            "cheque as specified by the registration process."
        ),

        "official_link": "https://www.enam.gov.in/",
        "source_name": "National Agriculture Market",
        "source_url": "https://www.enam.gov.in/web/stakeholders-Involved/farmers",
        "tags": [
            "market",
            "mandi",
            "trading",
            "price discovery",
            "buyers"
        ],
        "last_verified": "2026-11-13",

        "verification_note": (
            "Registration and services depend on the participating "
            "mandi and local APMC process."
        )
    },

    {
        "id": "AIF",
        "name": "Agriculture Infrastructure Fund (AIF)",
        "short_name": "AIF",
        "category": "Agricultural Infrastructure",
        "level": "central",
        "states": [],

        "description": (
            "A financing facility supporting eligible post-harvest "
            "management infrastructure and community farming assets."
        ),

        "benefits": (
            "Eligible loans can receive 3% per annum interest "
            "subvention up to a loan amount of ₹2 crore for a "
            "maximum of 7 years, subject to scheme guidelines. "
            "Eligible credit-guarantee support may also apply."
        ),

        "eligibility": (
            "Eligible beneficiaries and project types under the "
            "AIF guidelines, including specified farmer groups, "
            "FPOs, PACS, cooperatives, entrepreneurs and other "
            "permitted entities."
        ),

        "documents": (
            "Project proposal, applicant or entity registration "
            "documents, financial information, land or asset details "
            "where relevant, and documents required by the lender."
        ),

        "official_link": "https://agriinfra.dac.gov.in/",
        "source_name": "Agriculture Infrastructure Fund Portal",
        "source_url": "https://agriinfra.dac.gov.in/",
        "tags": [
            "infrastructure",
            "warehouse",
            "cold storage",
            "FPO",
            "loan"
        ],
        "last_verified": "2026-11-13",

        "verification_note": (
            "Project eligibility, loan sanction and credit guarantee "
            "are subject to current scheme guidelines and lender appraisal."
        )
    },

    {
        "id": "PMKSY-PDMC",
        "name": "Pradhan Mantri Krishi Sinchayee Yojana - Per Drop More Crop",
        "short_name": "PMKSY - PDMC",
        "category": "Irrigation and Water",
        "level": "central",
        "states": [],

        "description": (
            "A micro-irrigation support component intended to improve "
            "water-use efficiency through drip and sprinkler irrigation."
        ),

        "benefits": (
            "Financial assistance for eligible micro-irrigation systems. "
            "Assistance rates and ceilings depend on applicable "
            "government guidelines and state implementation."
        ),

        "eligibility": (
            "Farmers meeting applicable state and component requirements. "
            "Availability, beneficiary contribution and priority "
            "conditions must be checked with the state agriculture "
            "or horticulture office."
        ),

        "documents": (
            "Identity and bank details, land and irrigation details, "
            "farmer registration and quotations or technical documents "
            "required by the implementing department."
        ),

        "official_link": "https://pmksy.gov.in/",
        "source_name": "Pradhan Mantri Krishi Sinchayee Yojana",
        "source_url": "https://pmksy.gov.in/",
        "tags": [
            "irrigation",
            "drip",
            "sprinkler",
            "water conservation"
        ],
        "last_verified": "2026-11-13",

        "verification_note": (
            "Confirm the active component, subsidy rate and application "
            "window with the state implementing department."
        )
    },

    {
        "id": "SOIL-HEALTH-CARD",
        "name": "Soil Health Card Scheme",
        "short_name": "Soil Health Card",
        "category": "Soil and Crop Health",
        "level": "central",
        "states": [],

        "description": (
            "A soil-testing and advisory programme providing "
            "information about soil nutrient status and "
            "recommendations for nutrient use."
        ),

        "benefits": (
            "A soil health report with nutrient status and "
            "recommendations intended to help farmers make "
            "informed soil-fertility decisions."
        ),

        "eligibility": (
            "Farmers can approach the local agriculture department "
            "or designated soil-testing facility. Sampling and "
            "service processes are administered locally."
        ),

        "documents": (
            "Basic farmer and field or location details as requested "
            "by the local soil-testing facility or agriculture department."
        ),

        "official_link": "https://soilhealth.dac.gov.in/",
        "source_name": "Soil Health Card Portal",
        "source_url": "https://soilhealth.dac.gov.in/",
        "tags": [
            "soil",
            "nutrients",
            "fertilizer",
            "soil testing"
        ],
        "last_verified": "2026-11-13",

        "verification_note": (
            "Contact the local agriculture office for sampling "
            "availability and the current service process."
        )
    },

    {
        "id": "KCC",
        "name": "Kisan Credit Card (KCC)",
        "short_name": "KCC",
        "category": "Agricultural Credit",
        "level": "central",
        "states": [],

        "description": (
            "A bank-credit facility intended to provide eligible "
            "farmers timely access to credit for cultivation and "
            "specified allied agricultural activities."
        ),

        "benefits": (
            "Access to a revolving credit facility for eligible farm "
            "and allied needs. Interest rates, subvention and limits "
            "depend on applicable government rules and bank assessment."
        ),

        "eligibility": (
            "Eligible farmers, including owner cultivators and other "
            "permitted categories such as tenant farmers, oral lessees, "
            "sharecroppers and eligible joint-liability groups, "
            "subject to bank rules."
        ),

        "documents": (
            "KYC documents, photographs, land or cultivation details "
            "and other documents requested by the bank."
        ),

        "official_link": "https://www.myscheme.gov.in/",
        "source_name": "myScheme - Government of India",
        "source_url": "https://www.myscheme.gov.in/",
        "tags": [
            "credit",
            "loan",
            "working capital",
            "bank",
            "KCC"
        ],
        "last_verified": "2026-11-13",

        "verification_note": (
            "Apply through a participating bank and confirm current "
            "interest terms, credit limits and eligibility directly."
        )
    },

]

# ---------------------------------------------------------
# TEXT NORMALIZATION
# ---------------------------------------------------------

def _normalise(value):
    """Convert text to a consistent format for searching."""
    value = unicodedata.normalize("NFKD", str(value or ""))
    value = "".join(
        char for char in value
        if not unicodedata.combining(char)
    )
    return re.sub(r"\s+", " ", value).strip().casefold()


# ---------------------------------------------------------
# CATALOGUE INFORMATION
# ---------------------------------------------------------

def get_catalogue_status():
    return {
        "checked_at": datetime.now(timezone.utc).strftime(
            "%d %b %Y, %H:%M UTC"
        ),
        "total_schemes": len(SCHEMES),
        "catalogue_type": "Curated starter catalogue",
        "note": (
            "Scheme details and application windows can change. "
            "Verify current rules on the official source before applying."
        )
    }


def get_categories():
    return sorted(
        {
            scheme["category"]
            for scheme in SCHEMES
            if scheme.get("category")
        },
        key=str.casefold
    )


def get_sources():
    """Return unique official sources for the Government Schemes page."""
    seen = set()
    sources = []

    for scheme in SCHEMES:
        url = scheme.get("source_url") or scheme.get("official_link")

        if url and url not in seen:
            seen.add(url)

            sources.append({
                "name": scheme.get(
                    "source_name",
                    "Official government portal"
                ),
                "url": url
            })

    return sources


# ---------------------------------------------------------
# SEARCH AND FILTER ENGINE
# ---------------------------------------------------------

def filter_schemes(
    search="",
    category="",
    state="",
    level=""
):
    """
    Search and filter schemes.

    Search checks:
    - Scheme name
    - Short name
    - Description
    - Benefits
    - Eligibility
    - Required documents
    - Category
    - Keywords
    - Applicable states

    Filters:
    - Category
    - State or Union Territory
    - Government level
    """

    search_terms = [
        _normalise(term)
        for term in str(search or "").split()
        if term.strip()
    ]

    category_norm = _normalise(category)
    state_norm = _normalise(state)
    level_norm = _normalise(level)

    # Accept different labels from frontend dropdowns.
    level_aliases = {
        "central government": "central",
        "central govt": "central",
        "state government": "state",
        "state govt": "state",
        "union territories": "union territory",
        "union territory": "union territory",
        "ut": "union territory"
    }

    level_norm = level_aliases.get(
        level_norm,
        level_norm
    )

    results = []

    for scheme in SCHEMES:

        # CATEGORY FILTER
        if category_norm:
            if _normalise(scheme.get("category")) != category_norm:
                continue

        scheme_level = _normalise(
            scheme.get("level", "central")
        )

        # GOVERNMENT LEVEL FILTER
        if level_norm and scheme_level != level_norm:
            continue

        # STATE FILTER
        if state_norm:
            scheme_states = [
                _normalise(item)
                for item in scheme.get("states", [])
            ]

            # A central scheme with no state restriction is treated
            # as nationally applicable for the state search filter.
            is_national = (
                scheme_level == "central"
                and not scheme_states
            )

            if not is_national and state_norm not in scheme_states:
                continue

        # SEARCH ACROSS ALL IMPORTANT FIELDS
        searchable_text = " ".join([
            scheme.get("name", ""),
            scheme.get("short_name", ""),
            scheme.get("description", ""),
            scheme.get("benefits", ""),
            scheme.get("eligibility", ""),
            scheme.get("documents", ""),
            scheme.get("category", ""),
            scheme.get("source_name", ""),
            " ".join(scheme.get("tags", [])),
            " ".join(scheme.get("states", []))
        ])

        searchable_text = _normalise(searchable_text)

        # Every search word must be present.
        if search_terms:
            if not all(
                term in searchable_text
                for term in search_terms
            ):
                continue

        results.append(scheme)

    return results


# ---------------------------------------------------------
# PAGINATION HELPER
# ---------------------------------------------------------

def _safe_int(
    value,
    default,
    minimum=1,
    maximum=100
):
    try:
        number = int(value)
    except (TypeError, ValueError):
        return default

    return max(
        minimum,
        min(number, maximum)
    )


# ---------------------------------------------------------
# GOVERNMENT SCHEMES WEB PAGE
# ---------------------------------------------------------

@government_schemes_bp.route(
    "/government-schemes",
    methods=["GET"]
)
def government_schemes_page():

    search = request.args.get(
        "search", ""
    ).strip()

    category = request.args.get(
        "category", ""
    ).strip()

    state = request.args.get(
        "state", ""
    ).strip()

    level = request.args.get(
        "level", ""
    ).strip()

    schemes = filter_schemes(
        search=search,
        category=category,
        state=state,
        level=level
    )

    return render_template(
        "government_schemes.html",

        schemes=schemes,

        categories=get_categories(),

        states=STATES_AND_UTS,

        selected_search=search,

        selected_category=category,

        selected_state=state,

        selected_level=level,

        catalogue_status=get_catalogue_status(),

        sources=get_sources()
    )


# ---------------------------------------------------------
# GOVERNMENT SCHEMES SEARCH API
#
# Example:
# /api/government-schemes?search=crop
#
# Example:
# /api/government-schemes?category=Crop%20Insurance
#
# Example:
# /api/government-schemes?state=Karnataka
#
# Example:
# /api/government-schemes?level=central
#
# Example:
# /api/government-schemes?search=insurance&state=Karnataka
# ---------------------------------------------------------

@government_schemes_bp.route(
    "/api/government-schemes",
    methods=["GET"]
)
def government_schemes_api():

    search = request.args.get(
        "search", ""
    ).strip()

    category = request.args.get(
        "category", ""
    ).strip()

    state = request.args.get(
        "state", ""
    ).strip()

    level = request.args.get(
        "level", ""
    ).strip()

    results = filter_schemes(
        search=search,
        category=category,
        state=state,
        level=level
    )

    page = _safe_int(
        request.args.get("page", 1),
        1
    )

    per_page = _safe_int(
        request.args.get("per_page", 20),
        20,
        1,
        100
    )

    total = len(results)

    start = (page - 1) * per_page

    paginated_results = results[
        start:start + per_page
    ]

    total_pages = (
        total + per_page - 1
    ) // per_page

    return jsonify({

        "success": True,

        "filters": {
            "search": search,
            "category": category,
            "state": state,
            "level": level
        },

        "pagination": {
            "page": page,
            "per_page": per_page,
            "total": total,
            "pages": total_pages
        },

        "total": total,

        "schemes": paginated_results,

        "categories": get_categories(),

        "states": STATES_AND_UTS,

        "catalogue_status": get_catalogue_status()

    })


# ---------------------------------------------------------
# SINGLE SCHEME DETAILS API
#
# Example:
# /api/government-schemes/PM-KISAN
# ---------------------------------------------------------

@government_schemes_bp.route(
    "/api/government-schemes/<scheme_id>",
    methods=["GET"]
)
def government_scheme_details(scheme_id):

    wanted_id = _normalise(scheme_id)

    scheme = next(
        (
            item
            for item in SCHEMES
            if _normalise(item.get("id")) == wanted_id
        ),
        None
    )

    if scheme is None:
        return jsonify({
            "success": False,
            "message": "Scheme not found"
        }), 404

    return jsonify({
        "success": True,
        "scheme": scheme
    })


# ---------------------------------------------------------
# FILTER DROPDOWN OPTIONS API
#
# Example:
# /api/government-schemes/filters
# ---------------------------------------------------------

@government_schemes_bp.route(
    "/api/government-schemes/filters",
    methods=["GET"]
)
def government_scheme_filter_options():

    return jsonify({

        "success": True,

        "categories": get_categories(),

        "states": STATES_AND_UTS,

        "levels": [
            {
                "value": "central",
                "label": "Central Government"
            },
            {
                "value": "state",
                "label": "State Government"
            },
            {
                "value": "union territory",
                "label": "Union Territory"
            }
        ]

    })