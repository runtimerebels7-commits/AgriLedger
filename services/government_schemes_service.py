
"""
AgriLedger - Government Schemes Service

Provides a searchable starter catalogue of Indian government
agriculture schemes and official information links.

Note:
This is a curated starter catalogue, not a live government feed.
Always verify current eligibility, benefits and deadlines on
the official scheme website before displaying them as current.
"""

from datetime import datetime


# ---------------------------------------------------------
# OFFICIAL GOVERNMENT SCHEME CATALOGUE
# ---------------------------------------------------------

GOVERNMENT_SCHEMES = [

    {
        "id": "PM-KISAN",
        "name": "PM-KISAN Samman Nidhi",
        "category": "Financial Assistance",
        "description": (
            "Provides income support to eligible landholding "
            "farmer families through direct benefit transfers."
        ),
        "benefits": (
            "Eligible farmer families receive financial assistance "
            "subject to the scheme's current rules."
        ),
        "eligibility": (
            "Eligibility is determined under the official "
            "PM-KISAN guidelines and exclusion criteria."
        ),
        "documents": [
            "Aadhaar",
            "Bank account details",
            "Land records"
        ],
        "state": "All India",
        "level": "Central",
        "official_link": "https://pmkisan.gov.in/",
        "source_name": "PM-KISAN Official Portal",
        "last_verified": None
    },

    {
        "id": "PMFBY",
        "name": "Pradhan Mantri Fasal Bima Yojana",
        "category": "Crop Insurance",
        "description": (
            "Provides crop insurance protection against specified "
            "crop losses and risks, subject to scheme conditions."
        ),
        "benefits": (
            "Insurance coverage for eligible notified crops "
            "and farming risks."
        ),
        "eligibility": (
            "Farmers growing notified crops in notified areas, "
            "subject to current scheme guidelines."
        ),
        "documents": [
            "Aadhaar",
            "Bank account details",
            "Land records or cultivation documents",
            "Sowing details"
        ],
        "state": "All India",
        "level": "Central",
        "official_link": "https://pmfby.gov.in/",
        "source_name": "PMFBY Official Portal",
        "last_verified": None
    },

    {
        "id": "KCC",
        "name": "Kisan Credit Card Scheme",
        "category": "Agricultural Credit",
        "description": (
            "Provides eligible farmers access to institutional "
            "credit for agricultural and related activities."
        ),
        "benefits": (
            "Access to agricultural credit subject to bank "
            "assessment and applicable interest rules."
        ),
        "eligibility": (
            "Eligible farmers, cultivators and other qualifying "
            "agricultural applicants under current guidelines."
        ),
        "documents": [
            "Identity proof",
            "Address proof",
            "Land or cultivation documents",
            "Bank documents"
        ],
        "state": "All India",
        "level": "Central",
        "official_link": "https://www.myscheme.gov.in/",
        "source_name": "Government of India MyScheme Portal",
        "last_verified": None
    },

    {
        "id": "PMKSY",
        "name": "Pradhan Mantri Krishi Sinchayee Yojana",
        "category": "Irrigation",
        "description": (
            "Supports improved irrigation access and efficient "
            "water-use practices in agriculture."
        ),
        "benefits": (
            "Support for eligible irrigation and water-management "
            "activities under applicable components."
        ),
        "eligibility": (
            "Depends on the scheme component and the applicable "
            "state implementation guidelines."
        ),
        "documents": [
            "Identity proof",
            "Land documents",
            "Bank account details",
            "Application documents"
        ],
        "state": "All India",
        "level": "Central",
        "official_link": "https://pmksy.gov.in/",
        "source_name": "PMKSY Official Portal",
        "last_verified": None
    },

    {
        "id": "SOIL-HEALTH",
        "name": "Soil Health Card Scheme",
        "category": "Soil and Fertilizer",
        "description": (
            "Helps farmers understand soil nutrient status "
            "and recommended nutrient management."
        ),
        "benefits": (
            "Soil testing information and fertilizer "
            "recommendations for better soil management."
        ),
        "eligibility": (
            "Farmers can access soil testing services through "
            "the applicable government soil-testing system."
        ),
        "documents": [
            "Basic farmer details",
            "Land or field details"
        ],
        "state": "All India",
        "level": "Central",
        "official_link": "https://soilhealth.dac.gov.in/",
        "source_name": "Soil Health Card Official Portal",
        "last_verified": None
    },

    {
        "id": "ENAM",
        "name": "National Agriculture Market (e-NAM)",
        "category": "Market Access",
        "description": (
            "An electronic agricultural trading platform "
            "connecting participating agricultural markets."
        ),
        "benefits": (
            "Access to participating markets and online "
            "agricultural trading facilities."
        ),
        "eligibility": (
            "Participation depends on registration and the "
            "rules of the applicable mandi."
        ),
        "documents": [
            "Identity proof",
            "Bank details",
            "Applicable mandi registration documents"
        ],
        "state": "All India",
        "level": "Central",
        "official_link": "https://enam.gov.in/",
        "source_name": "e-NAM Official Portal",
        "last_verified": None
    },

    {
        "id": "PMKMY",
        "name": "PM Kisan Maandhan Yojana",
        "category": "Pension",
        "description": (
            "A contributory pension scheme intended for "
            "eligible small and marginal farmers."
        ),
        "benefits": (
            "Provides pension benefits according to the "
            "scheme's eligibility and contribution rules."
        ),
        "eligibility": (
            "Subject to prescribed age, landholding, "
            "income and exclusion conditions."
        ),
        "documents": [
            "Aadhaar",
            "Bank account details",
            "Landholding details"
        ],
        "state": "All India",
        "level": "Central",
        "official_link": "https://maandhan.in/",
        "source_name": "Maandhan Official Portal",
        "last_verified": None
    },

    {
        "id": "AIF",
        "name": "Agriculture Infrastructure Fund",
        "category": "Agricultural Infrastructure",
        "description": (
            "Supports financing for eligible agriculture "
            "infrastructure projects."
        ),
        "benefits": (
            "Financing support and applicable scheme benefits "
            "for eligible infrastructure projects."
        ),
        "eligibility": (
            "Eligible beneficiaries and projects under "
            "the current Agriculture Infrastructure Fund guidelines."
        ),
        "documents": [
            "Project proposal",
            "Identity and registration documents",
            "Financial documents",
            "Land or project documents"
        ],
        "state": "All India",
        "level": "Central",
        "official_link": "https://agriinfra.dac.gov.in/",
        "source_name": "Agriculture Infrastructure Fund Portal",
        "last_verified": None
    }
]


# ---------------------------------------------------------
# GOVERNMENT INFORMATION SOURCES
# ---------------------------------------------------------

GOVERNMENT_SOURCES = [
    {
        "name": "MyScheme",
        "description": "Search government schemes by eligibility and category.",
        "url": "https://www.myscheme.gov.in/"
    },
    {
        "name": "Ministry of Agriculture and Farmers Welfare",
        "description": "Official agriculture ministry information and announcements.",
        "url": "https://agriwelfare.gov.in/"
    },
    {
        "name": "Press Information Bureau",
        "description": "Official government announcements and press releases.",
        "url": "https://pib.gov.in/"
    },
    {
        "name": "National Portal of India",
        "description": "Government services and information.",
        "url": "https://www.india.gov.in/"
    }
]


# ---------------------------------------------------------
# GET ALL SCHEMES
# ---------------------------------------------------------

def get_all_schemes():
    """Return all schemes in the starter catalogue."""
    return GOVERNMENT_SCHEMES.copy()


# ---------------------------------------------------------
# GET ONE SCHEME BY ID
# ---------------------------------------------------------

def get_scheme_by_id(scheme_id):
    """Find a scheme using its unique ID."""

    for scheme in GOVERNMENT_SCHEMES:
        if scheme["id"].lower() == str(scheme_id).lower():
            return scheme

    return None


# ---------------------------------------------------------
# SEARCH AND FILTER SCHEMES
# ---------------------------------------------------------

def filter_schemes(
    search="",
    category="",
    state="",
    level=""
):
    """
    Filter schemes by search text, category, state and level.

    The starter catalogue contains central schemes.
    State-specific schemes can be added as verified records.
    """

    results = GOVERNMENT_SCHEMES.copy()

    search = str(search).strip().lower()
    category = str(category).strip().lower()
    state = str(state).strip().lower()
    level = str(level).strip().lower()

    if search:
        results = [
            scheme for scheme in results
            if search in scheme["name"].lower()
            or search in scheme["description"].lower()
            or search in scheme["category"].lower()
            or search in scheme["id"].lower()
        ]

    if category:
        results = [
            scheme for scheme in results
            if scheme["category"].lower() == category
        ]

    if state:
        results = [
            scheme for scheme in results
            if scheme["state"].lower() in (state, "all india")
        ]

    if level:
        results = [
            scheme for scheme in results
            if scheme["level"].lower() == level
        ]

    return results


# ---------------------------------------------------------
# GET ALL SCHEME CATEGORIES
# ---------------------------------------------------------

def get_scheme_categories():
    """Return unique scheme categories."""

    return sorted({
        scheme["category"]
        for scheme in GOVERNMENT_SCHEMES
    })


# ---------------------------------------------------------
# GET GOVERNMENT INFORMATION SOURCES
# ---------------------------------------------------------

def get_government_sources():
    """Return official government information portals."""

    return GOVERNMENT_SOURCES.copy()


# ---------------------------------------------------------
# GET CATALOGUE INFORMATION
# ---------------------------------------------------------

def get_catalogue_status():
    """
    Return catalogue metadata.

    A missing verification date means the scheme record
    has not yet been independently verified for this release.
    """

    return {
        "total_schemes": len(GOVERNMENT_SCHEMES),
        "coverage": "All India",
        "scheme_level": "Central",
        "catalogue_type": "Curated starter catalogue",
        "live_updates": False,
        "checked_at": datetime.now().strftime("%Y-%m-%d"),
        "message": (
            "Check the official scheme website for the latest "
            "eligibility, benefits and application deadlines."
        )
    }
