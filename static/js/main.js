
/* ============================================================
   AGRILEDGER - COMPLETE WEBSITE JAVASCRIPT
   Multilingual Website + Government Schemes + Sarvam AI
   Languages: English, Kannada, Hindi, Tamil, Telugu,
              Malayalam, Marathi and Bengali
   ============================================================ */

"use strict";

/* ============================================================
   1. LANGUAGE TRANSLATIONS
   ============================================================ */

const translations = {

    "en-IN": {
        home: "Home",
        farmerPortal: "Farmer Portal",
        buyerPortal: "Buyer Portal",
        dashboard: "Dashboard",
        login: "Login",
        register: "Register",
        logout: "Logout",
        welcome: "Welcome to AgriLedger",
        tagline: "A smarter and more transparent agricultural marketplace.",
        getStarted: "Get Started",
        farmer: "Farmer",
        buyer: "Buyer",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        password: "Password",
        confirmPassword: "Confirm Password",
        state: "State",
        district: "District",
        language: "Preferred Language",
        selectRole: "Select Your Role",
        createAccount: "Create Account",
        alreadyAccount: "Already have an account?",
        noAccount: "Don't have an account?",
        loginHere: "Login here",
        registerHere: "Register here",
        crop: "Crop Name",
        quantity: "Quantity",
        unit: "Unit",
        price: "Price per Unit",
        deductions: "Deductions",
        totalAmount: "Total Amount",
        finalAmount: "Final Payable Amount",
        deadline: "Payment Deadline",
        createTransaction: "Create Transaction",
        transactionHistory: "Transaction History",
        myTransactions: "My Transactions",
        agreements: "Agreements",
        payments: "Payments",
        support: "Help & Support",
        priceInsights: "Price Insights",
        pending: "Pending",
        confirmed: "Confirmed",
        completed: "Completed",
        rejected: "Rejected",
        actions: "Actions",
        view: "View",
        submit: "Submit",
        cancel: "Cancel",
        save: "Save",
        search: "Search",
        listen: "Listen",
        stopListening: "Stop Listening",
        recordVoice: "Record Voice",
        stopRecording: "Stop Recording",
        speakNow: "Speak now",
        transcript: "Transcript",
        useTranscript: "Use Transcript to Fill Form",

        schemes: "Government Schemes",
        schemesTitle: "Government Schemes & Farmer Benefits",
        schemesDescription: "Discover government schemes, subsidies, financial assistance and agricultural benefits available to farmers across India.",
        allIndia: "All India Coverage",
        officialLinks: "Official Government Links",
        regionalSupport: "Regional Language Support",
        importantInformation: "Important Information",
        schemeNotice: "Scheme eligibility, benefits and application deadlines may change. Always verify information through the official government portal.",
        discoverBenefits: "Discover Benefits",
        findScheme: "Find the Right Scheme",
        searchSchemes: "Search schemes, benefits or keywords...",
        allCategories: "All Categories",
        allStates: "All States & UTs",
        allLevels: "All Government Levels",
        centralGovernment: "Central Government",
        stateGovernment: "State Government",
        searchButton: "Search Schemes",
        reset: "Reset",
        schemeDirectory: "Scheme Directory",
        availableSchemes: "Available Schemes",
        benefits: "Benefits",
        eligibility: "Eligibility",
        requiredDocuments: "Required Documents",
        applyOfficial: "Apply on Official Website",
        officialSource: "Official Source",
        lastChecked: "Catalogue last checked",
        noSchemes: "No schemes found. Try changing your search or filters.",
        loadingSchemes: "Loading schemes...",
        schemeError: "Unable to load schemes. Please try again.",
        centralScheme: "Central Scheme",
        stateScheme: "State Scheme",
        applicationLink: "Application Link",
        viewDetails: "View Details",
        readMore: "Read More",
        close: "Close"
    },

    "kn-IN": {
        home: "ಮುಖಪುಟ",
        farmerPortal: "ರೈತರ ಪೋರ್ಟಲ್",
        buyerPortal: "ಖರೀದಿದಾರರ ಪೋರ್ಟಲ್",
        dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        login: "ಲಾಗಿನ್",
        register: "ನೋಂದಣಿ",
        logout: "ಲಾಗ್ ಔಟ್",
        welcome: "AgriLedger ಗೆ ಸ್ವಾಗತ",
        tagline: "ಹೆಚ್ಚು ಸ್ಮಾರ್ಟ್ ಮತ್ತು ಪಾರದರ್ಶಕ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ.",
        getStarted: "ಪ್ರಾರಂಭಿಸಿ",
        farmer: "ರೈತ",
        buyer: "ಖರೀದಿದಾರ",
        name: "ಪೂರ್ಣ ಹೆಸರು",
        email: "ಇಮೇಲ್ ವಿಳಾಸ",
        phone: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
        password: "ಪಾಸ್‌ವರ್ಡ್",
        confirmPassword: "ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ",
        state: "ರಾಜ್ಯ",
        district: "ಜಿಲ್ಲೆ",
        language: "ಆದ್ಯತೆಯ ಭಾಷೆ",
        selectRole: "ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        createAccount: "ಖಾತೆ ರಚಿಸಿ",
        alreadyAccount: "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?",
        noAccount: "ಖಾತೆ ಇಲ್ಲವೇ?",
        loginHere: "ಇಲ್ಲಿ ಲಾಗಿನ್ ಮಾಡಿ",
        registerHere: "ಇಲ್ಲಿ ನೋಂದಾಯಿಸಿ",
        crop: "ಬೆಳೆ ಹೆಸರು",
        quantity: "ಪ್ರಮಾಣ",
        unit: "ಘಟಕ",
        price: "ಪ್ರತಿ ಘಟಕದ ಬೆಲೆ",
        deductions: "ಕಡಿತಗಳು",
        totalAmount: "ಒಟ್ಟು ಮೊತ್ತ",
        finalAmount: "ಅಂತಿಮ ಪಾವತಿ ಮೊತ್ತ",
        deadline: "ಪಾವತಿ ಕೊನೆಯ ದಿನಾಂಕ",
        createTransaction: "ವಹಿವಾಟು ರಚಿಸಿ",
        transactionHistory: "ವಹಿವಾಟಿನ ಇತಿಹಾಸ",
        myTransactions: "ನನ್ನ ವಹಿವಾಟುಗಳು",
        agreements: "ಒಪ್ಪಂದಗಳು",
        payments: "ಪಾವತಿಗಳು",
        support: "ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ",
        priceInsights: "ಬೆಲೆ ಮಾಹಿತಿ",
        pending: "ಬಾಕಿ",
        confirmed: "ದೃಢೀಕರಿಸಲಾಗಿದೆ",
        completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
        rejected: "ತಿರಸ್ಕರಿಸಲಾಗಿದೆ",
        actions: "ಕ್ರಿಯೆಗಳು",
        view: "ವೀಕ್ಷಿಸಿ",
        submit: "ಸಲ್ಲಿಸಿ",
        cancel: "ರದ್ದುಮಾಡಿ",
        save: "ಉಳಿಸಿ",
        search: "ಹುಡುಕಿ",
        listen: "ಆಲಿಸಿ",
        stopListening: "ಆಲಿಸುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
        recordVoice: "ಧ್ವನಿ ದಾಖಲಿಸಿ",
        stopRecording: "ದಾಖಲಿಸುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
        speakNow: "ಈಗ ಮಾತನಾಡಿ",
        transcript: "ಧ್ವನಿ ಪಠ್ಯ",
        useTranscript: "ಪಠ್ಯವನ್ನು ಫಾರ್ಮ್‌ಗೆ ಬಳಸಿ",

        schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        schemesTitle: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ರೈತರ ಪ್ರಯೋಜನಗಳು",
        schemesDescription: "ಭಾರತದಾದ್ಯಂತ ರೈತರಿಗೆ ಲಭ್ಯವಿರುವ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು, ಸಬ್ಸಿಡಿಗಳು ಮತ್ತು ಆರ್ಥಿಕ ನೆರವಿನ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.",
        allIndia: "ಭಾರತದಾದ್ಯಂತ",
        officialLinks: "ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಲಿಂಕ್‌ಗಳು",
        regionalSupport: "ಪ್ರಾದೇಶಿಕ ಭಾಷಾ ಬೆಂಬಲ",
        importantInformation: "ಪ್ರಮುಖ ಮಾಹಿತಿ",
        schemeNotice: "ಯೋಜನೆಗಳ ಅರ್ಹತೆ, ಪ್ರಯೋಜನಗಳು ಮತ್ತು ಅರ್ಜಿ ದಿನಾಂಕಗಳು ಬದಲಾಗಬಹುದು. ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.",
        discoverBenefits: "ಪ್ರಯೋಜನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        findScheme: "ಸರಿಯಾದ ಯೋಜನೆಯನ್ನು ಹುಡುಕಿ",
        searchSchemes: "ಯೋಜನೆಗಳು ಅಥವಾ ಪ್ರಯೋಜನಗಳನ್ನು ಹುಡುಕಿ...",
        allCategories: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
        allStates: "ಎಲ್ಲಾ ರಾಜ್ಯಗಳು ಮತ್ತು ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು",
        allLevels: "ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಮಟ್ಟಗಳು",
        centralGovernment: "ಕೇಂದ್ರ ಸರ್ಕಾರ",
        stateGovernment: "ರಾಜ್ಯ ಸರ್ಕಾರ",
        searchButton: "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
        reset: "ಮರುಹೊಂದಿಸಿ",
        schemeDirectory: "ಯೋಜನೆಗಳ ಪಟ್ಟಿ",
        availableSchemes: "ಲಭ್ಯವಿರುವ ಯೋಜನೆಗಳು",
        benefits: "ಪ್ರಯೋಜನಗಳು",
        eligibility: "ಅರ್ಹತೆ",
        requiredDocuments: "ಅಗತ್ಯ ದಾಖಲೆಗಳು",
        applyOfficial: "ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
        officialSource: "ಅಧಿಕೃತ ಮೂಲ",
        lastChecked: "ಕೊನೆಯದಾಗಿ ಪರಿಶೀಲಿಸಿದ ದಿನಾಂಕ",
        noSchemes: "ಯಾವುದೇ ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ಹುಡುಕಾಟ ಬದಲಾಯಿಸಿ.",
        loadingSchemes: "ಯೋಜನೆಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
        schemeError: "ಯೋಜನೆಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
        centralScheme: "ಕೇಂದ್ರ ಯೋಜನೆ",
        stateScheme: "ರಾಜ್ಯ ಯೋಜನೆ",
        applicationLink: "ಅರ್ಜಿ ಲಿಂಕ್",
        viewDetails: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
        readMore: "ಇನ್ನಷ್ಟು ಓದಿ",
        close: "ಮುಚ್ಚಿ"
    },

    "hi-IN": {
        home: "होम",
        farmerPortal: "किसान पोर्टल",
        buyerPortal: "खरीदार पोर्टल",
        dashboard: "डैशबोर्ड",
        login: "लॉगिन",
        register: "रजिस्टर",
        logout: "लॉगआउट",
        welcome: "AgriLedger में आपका स्वागत है",
        tagline: "एक स्मार्ट और पारदर्शी कृषि बाज़ार।",
        getStarted: "शुरू करें",
        farmer: "किसान",
        buyer: "खरीदार",
        name: "पूरा नाम",
        email: "ईमेल पता",
        phone: "फ़ोन नंबर",
        password: "पासवर्ड",
        confirmPassword: "पासवर्ड की पुष्टि करें",
        state: "राज्य",
        district: "ज़िला",
        language: "पसंदीदा भाषा",
        selectRole: "अपनी भूमिका चुनें",
        createAccount: "खाता बनाएँ",
        alreadyAccount: "क्या आपका पहले से खाता है?",
        noAccount: "खाता नहीं है?",
        loginHere: "यहाँ लॉगिन करें",
        registerHere: "यहाँ रजिस्टर करें",
        crop: "फसल का नाम",
        quantity: "मात्रा",
        unit: "इकाई",
        price: "प्रति इकाई मूल्य",
        deductions: "कटौती",
        totalAmount: "कुल राशि",
        finalAmount: "अंतिम देय राशि",
        deadline: "भुगतान की अंतिम तिथि",
        createTransaction: "लेनदेन बनाएँ",
        transactionHistory: "लेनदेन इतिहास",
        myTransactions: "मेरे लेनदेन",
        agreements: "समझौते",
        payments: "भुगतान",
        support: "सहायता",
        priceInsights: "मूल्य जानकारी",
        pending: "लंबित",
        confirmed: "पुष्टि की गई",
        completed: "पूर्ण",
        rejected: "अस्वीकृत",
        actions: "कार्रवाई",
        view: "देखें",
        submit: "जमा करें",
        cancel: "रद्द करें",
        save: "सहेजें",
        search: "खोजें",
        listen: "सुनें",
        stopListening: "सुनना बंद करें",
        recordVoice: "आवाज़ रिकॉर्ड करें",
        stopRecording: "रिकॉर्डिंग रोकें",
        speakNow: "अब बोलें",
        transcript: "ट्रांसक्रिप्ट",
        useTranscript: "ट्रांसक्रिप्ट से फ़ॉर्म भरें",

        schemes: "सरकारी योजनाएँ",
        schemesTitle: "सरकारी योजनाएँ और किसान लाभ",
        schemesDescription: "भारत भर के किसानों के लिए सरकारी योजनाएँ, सब्सिडी और वित्तीय सहायता जानें।",
        allIndia: "पूरे भारत में",
        officialLinks: "आधिकारिक सरकारी लिंक",
        regionalSupport: "क्षेत्रीय भाषा सहायता",
        importantInformation: "महत्वपूर्ण जानकारी",
        schemeNotice: "योजनाओं की पात्रता, लाभ और आवेदन की अंतिम तिथियाँ बदल सकती हैं। आधिकारिक पोर्टल पर जानकारी जाँचें।",
        discoverBenefits: "लाभ खोजें",
        findScheme: "सही योजना खोजें",
        searchSchemes: "योजना या लाभ खोजें...",
        allCategories: "सभी श्रेणियाँ",
        allStates: "सभी राज्य और केंद्र शासित प्रदेश",
        allLevels: "सभी सरकारी स्तर",
        centralGovernment: "केंद्र सरकार",
        stateGovernment: "राज्य सरकार",
        searchButton: "योजनाएँ खोजें",
        reset: "रीसेट",
        schemeDirectory: "योजना सूची",
        availableSchemes: "उपलब्ध योजनाएँ",
        benefits: "लाभ",
        eligibility: "पात्रता",
        requiredDocuments: "आवश्यक दस्तावेज़",
        applyOfficial: "आधिकारिक वेबसाइट पर आवेदन करें",
        officialSource: "आधिकारिक स्रोत",
        lastChecked: "अंतिम जाँच",
        noSchemes: "कोई योजना नहीं मिली। खोज या फ़िल्टर बदलें।",
        loadingSchemes: "योजनाएँ लोड हो रही हैं...",
        schemeError: "योजनाएँ लोड नहीं हो सकीं।",
        centralScheme: "केंद्र सरकार की योजना",
        stateScheme: "राज्य सरकार की योजना",
        applicationLink: "आवेदन लिंक",
        viewDetails: "विवरण देखें",
        readMore: "और पढ़ें",
        close: "बंद करें"
    },

    "ta-IN": {
        home: "முகப்பு",
        farmerPortal: "விவசாயி தளம்",
        buyerPortal: "வாங்குபவர் தளம்",
        dashboard: "டாஷ்போர்டு",
        login: "உள்நுழைவு",
        register: "பதிவு",
        logout: "வெளியேறு",
        welcome: "AgriLedger-க்கு வரவேற்கிறோம்",
        tagline: "சிறந்த மற்றும் வெளிப்படையான விவசாய சந்தை.",
        getStarted: "தொடங்குங்கள்",
        farmer: "விவசாயி",
        buyer: "வாங்குபவர்",
        name: "முழுப் பெயர்",
        email: "மின்னஞ்சல்",
        phone: "தொலைபேசி எண்",
        password: "கடவுச்சொல்",
        confirmPassword: "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
        state: "மாநிலம்",
        district: "மாவட்டம்",
        language: "விருப்பமான மொழி",
        selectRole: "உங்கள் பங்கைத் தேர்ந்தெடுக்கவும்",
        createAccount: "கணக்கை உருவாக்கவும்",
        alreadyAccount: "ஏற்கனவே கணக்கு உள்ளதா?",
        noAccount: "கணக்கு இல்லையா?",
        loginHere: "இங்கே உள்நுழையவும்",
        registerHere: "இங்கே பதிவு செய்யவும்",
        crop: "பயிர் பெயர்",
        quantity: "அளவு",
        unit: "அலகு",
        price: "ஒரு அலகின் விலை",
        deductions: "கழிவுகள்",
        totalAmount: "மொத்தத் தொகை",
        finalAmount: "இறுதியாகச் செலுத்த வேண்டிய தொகை",
        deadline: "பணம் செலுத்தும் கடைசி நாள்",
        createTransaction: "பரிவர்த்தனையை உருவாக்கவும்",
        transactionHistory: "பரிவர்த்தனை வரலாறு",
        myTransactions: "எனது பரிவர்த்தனைகள்",
        agreements: "ஒப்பந்தங்கள்",
        payments: "பணம் செலுத்துதல்",
        support: "உதவி",
        priceInsights: "விலை விவரங்கள்",
        pending: "நிலுவையில்",
        confirmed: "உறுதிப்படுத்தப்பட்டது",
        completed: "முடிந்தது",
        rejected: "நிராகரிக்கப்பட்டது",
        actions: "செயல்கள்",
        view: "பார்க்க",
        submit: "சமர்ப்பிக்கவும்",
        cancel: "ரத்து செய்யவும்",
        save: "சேமிக்கவும்",
        search: "தேடுங்கள்",
        listen: "கேளுங்கள்",
        stopListening: "கேட்பதை நிறுத்துங்கள்",
        recordVoice: "குரலைப் பதிவு செய்யவும்",
        stopRecording: "பதிவை நிறுத்தவும்",
        speakNow: "இப்போது பேசுங்கள்",
        transcript: "உரை",
        useTranscript: "படிவத்தை நிரப்ப உரையைப் பயன்படுத்தவும்",

        schemes: "அரசுத் திட்டங்கள்",
        schemesTitle: "அரசுத் திட்டங்கள் மற்றும் விவசாயிகள் நலன்கள்",
        schemesDescription: "இந்தியா முழுவதும் விவசாயிகளுக்குக் கிடைக்கும் அரசுத் திட்டங்கள், மானியங்கள் மற்றும் நிதி உதவிகளை அறியுங்கள்.",
        allIndia: "இந்தியா முழுவதும்",
        officialLinks: "அரசின் அதிகாரப்பூர்வ இணைப்புகள்",
        regionalSupport: "பிராந்திய மொழி ஆதரவு",
        importantInformation: "முக்கிய தகவல்",
        schemeNotice: "திட்டங்களின் தகுதி, நன்மைகள் மற்றும் விண்ணப்பக் காலக்கெடுக்கள் மாறலாம். அதிகாரப்பூர்வ இணையதளத்தில் சரிபார்க்கவும்.",
        discoverBenefits: "நன்மைகளைக் கண்டறியுங்கள்",
        findScheme: "சரியான திட்டத்தைக் கண்டறியுங்கள்",
        searchSchemes: "திட்டங்கள் அல்லது நன்மைகளைத் தேடுங்கள்...",
        allCategories: "அனைத்து வகைகளும்",
        allStates: "அனைத்து மாநிலங்கள் மற்றும் யூனியன் பிரதேசங்கள்",
        allLevels: "அனைத்து அரசு நிலைகள்",
        centralGovernment: "மத்திய அரசு",
        stateGovernment: "மாநில அரசு",
        searchButton: "திட்டங்களைத் தேடுங்கள்",
        reset: "மீட்டமை",
        schemeDirectory: "திட்டப் பட்டியல்",
        availableSchemes: "கிடைக்கும் திட்டங்கள்",
        benefits: "நன்மைகள்",
        eligibility: "தகுதி",
        requiredDocuments: "தேவையான ஆவணங்கள்",
        applyOfficial: "அதிகாரப்பூர்வ இணையதளத்தில் விண்ணப்பிக்கவும்",
        officialSource: "அதிகாரப்பூர்வ மூலம்",
        lastChecked: "கடைசியாகச் சரிபார்க்கப்பட்டது",
        noSchemes: "திட்டங்கள் எதுவும் கிடைக்கவில்லை. தேடலை மாற்றவும்.",
        loadingSchemes: "திட்டங்கள் ஏற்றப்படுகின்றன...",
        schemeError: "திட்டங்களை ஏற்ற முடியவில்லை.",
        centralScheme: "மத்திய அரசுத் திட்டம்",
        stateScheme: "மாநில அரசுத் திட்டம்",
        applicationLink: "விண்ணப்ப இணைப்பு",
        viewDetails: "விவரங்களைப் பார்க்கவும்",
        readMore: "மேலும் படிக்கவும்",
        close: "மூடவும்"
    },

    "te-IN": {
        home: "హోమ్",
        farmerPortal: "రైతు పోర్టల్",
        buyerPortal: "కొనుగోలుదారు పోర్టల్",
        dashboard: "డాష్‌బోర్డ్",
        login: "లాగిన్",
        register: "నమోదు",
        logout: "లాగ్ అవుట్",
        welcome: "AgriLedger కు స్వాగతం",
        tagline: "మెరుగైన మరియు పారదర్శక వ్యవసాయ మార్కెట్.",
        getStarted: "ప్రారంభించండి",
        farmer: "రైతు",
        buyer: "కొనుగోలుదారు",
        name: "పూర్తి పేరు",
        email: "ఇమెయిల్ చిరునామా",
        phone: "ఫోన్ నంబర్",
        password: "పాస్‌వర్డ్",
        confirmPassword: "పాస్‌వర్డ్ నిర్ధారించండి",
        state: "రాష్ట్రం",
        district: "జిల్లా",
        language: "ప్రాధాన్య భాష",
        selectRole: "మీ పాత్రను ఎంచుకోండి",
        createAccount: "ఖాతా సృష్టించండి",
        alreadyAccount: "ఇప్పటికే ఖాతా ఉందా?",
        noAccount: "ఖాతా లేదా?",
        loginHere: "ఇక్కడ లాగిన్ అవ్వండి",
        registerHere: "ఇక్కడ నమోదు చేసుకోండి",
        crop: "పంట పేరు",
        quantity: "పరిమాణం",
        unit: "యూనిట్",
        price: "యూనిట్ ధర",
        deductions: "తగ్గింపులు",
        totalAmount: "మొత్తం",
        finalAmount: "చివరగా చెల్లించాల్సిన మొత్తం",
        deadline: "చెల్లింపు చివరి తేదీ",
        createTransaction: "లావాదేవీ సృష్టించండి",
        transactionHistory: "లావాదేవీల చరిత్ర",
        myTransactions: "నా లావాదేవీలు",
        agreements: "ఒప్పందాలు",
        payments: "చెల్లింపులు",
        support: "సహాయం",
        priceInsights: "ధరల సమాచారం",
        pending: "పెండింగ్",
        confirmed: "నిర్ధారించబడింది",
        completed: "పూర్తయింది",
        rejected: "తిరస్కరించబడింది",
        actions: "చర్యలు",
        view: "చూడండి",
        submit: "సమర్పించండి",
        cancel: "రద్దు చేయండి",
        save: "సేవ్ చేయండి",
        search: "వెతకండి",
        listen: "వినండి",
        stopListening: "వినడం ఆపండి",
        recordVoice: "వాయిస్ రికార్డ్ చేయండి",
        stopRecording: "రికార్డింగ్ ఆపండి",
        speakNow: "ఇప్పుడు మాట్లాడండి",
        transcript: "ట్రాన్స్‌క్రిప్ట్",
        useTranscript: "ఫారమ్ నింపడానికి ఉపయోగించండి",

        schemes: "ప్రభుత్వ పథకాలు",
        schemesTitle: "ప్రభుత్వ పథకాలు మరియు రైతుల ప్రయోజనాలు",
        schemesDescription: "భారతదేశంలోని రైతులకు అందుబాటులో ఉన్న ప్రభుత్వ పథకాలు, సబ్సిడీలు మరియు ఆర్థిక సహాయం గురించి తెలుసుకోండి.",
        allIndia: "భారతదేశమంతటా",
        officialLinks: "అధికారిక ప్రభుత్వ లింకులు",
        regionalSupport: "ప్రాంతీయ భాషా మద్దతు",
        importantInformation: "ముఖ్యమైన సమాచారం",
        schemeNotice: "పథకాల అర్హత, ప్రయోజనాలు మరియు దరఖాస్తు గడువులు మారవచ్చు. అధికారిక పోర్టల్‌లో తనిఖీ చేయండి.",
        discoverBenefits: "ప్రయోజనాలను తెలుసుకోండి",
        findScheme: "సరైన పథకాన్ని కనుగొనండి",
        searchSchemes: "పథకాలు లేదా ప్రయోజనాలను వెతకండి...",
        allCategories: "అన్ని వర్గాలు",
        allStates: "అన్ని రాష్ట్రాలు మరియు కేంద్రపాలిత ప్రాంతాలు",
        allLevels: "అన్ని ప్రభుత్వ స్థాయిలు",
        centralGovernment: "కేంద్ర ప్రభుత్వం",
        stateGovernment: "రాష్ట్ర ప్రభుత్వం",
        searchButton: "పథకాలను వెతకండి",
        reset: "రీసెట్",
        schemeDirectory: "పథకాల జాబితా",
        availableSchemes: "అందుబాటులో ఉన్న పథకాలు",
        benefits: "ప్రయోజనాలు",
        eligibility: "అర్హత",
        requiredDocuments: "అవసరమైన పత్రాలు",
        applyOfficial: "అధికారిక వెబ్‌సైట్‌లో దరఖాస్తు చేయండి",
        officialSource: "అధికారిక మూలం",
        lastChecked: "చివరిగా తనిఖీ చేసిన తేదీ",
        noSchemes: "పథకాలు కనబడలేదు. శోధనను మార్చండి.",
        loadingSchemes: "పథకాలు లోడ్ అవుతున్నాయి...",
        schemeError: "పథకాలను లోడ్ చేయలేకపోయాము.",
        centralScheme: "కేంద్ర ప్రభుత్వ పథకం",
        stateScheme: "రాష్ట్ర ప్రభుత్వ పథకం",
        applicationLink: "దరఖాస్తు లింక్",
        viewDetails: "వివరాలు చూడండి",
        readMore: "మరింత చదవండి",
        close: "మూసివేయండి"
    },

    "ml-IN": {
        home: "ഹോം",
        farmerPortal: "കർഷക പോർട്ടൽ",
        buyerPortal: "വാങ്ങുന്നവരുടെ പോർട്ടൽ",
        dashboard: "ഡാഷ്ബോർഡ്",
        login: "ലോഗിൻ",
        register: "രജിസ്റ്റർ",
        logout: "ലോഗ് ഔട്ട്",
        welcome: "AgriLedger-ലേക്ക് സ്വാഗതം",
        tagline: "കൂടുതൽ സുതാര്യമായ കാർഷിക വിപണി.",
        getStarted: "ആരംഭിക്കുക",
        farmer: "കർഷകൻ",
        buyer: "വാങ്ങുന്നയാൾ",
        name: "പൂർണ്ണ പേര്",
        email: "ഇമെയിൽ വിലാസം",
        phone: "ഫോൺ നമ്പർ",
        password: "പാസ്‌വേഡ്",
        confirmPassword: "പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക",
        state: "സംസ്ഥാനം",
        district: "ജില്ല",
        language: "ഇഷ്ടപ്പെട്ട ഭാഷ",
        selectRole: "നിങ്ങളുടെ പങ്ക് തിരഞ്ഞെടുക്കുക",
        createAccount: "അക്കൗണ്ട് സൃഷ്ടിക്കുക",
        alreadyAccount: "അക്കൗണ്ട് ഉണ്ടോ?",
        noAccount: "അക്കൗണ്ട് ഇല്ലേ?",
        loginHere: "ഇവിടെ ലോഗിൻ ചെയ്യുക",
        registerHere: "ഇവിടെ രജിസ്റ്റർ ചെയ്യുക",
        crop: "വിളയുടെ പേര്",
        quantity: "അളവ്",
        unit: "യൂണിറ്റ്",
        price: "യൂണിറ്റ് വില",
        deductions: "കിഴിവുകൾ",
        totalAmount: "ആകെ തുക",
        finalAmount: "അവസാനം നൽകേണ്ട തുക",
        deadline: "പണമടയ്ക്കേണ്ട അവസാന തീയതി",
        createTransaction: "ഇടപാട് സൃഷ്ടിക്കുക",
        transactionHistory: "ഇടപാട് ചരിത്രം",
        myTransactions: "എന്റെ ഇടപാടുകൾ",
        agreements: "കരാറുകൾ",
        payments: "പണമടയ്ക്കൽ",
        support: "സഹായം",
        priceInsights: "വില വിവരങ്ങൾ",
        pending: "തീർപ്പുകൽപ്പിക്കാത്തത്",
        confirmed: "സ്ഥിരീകരിച്ചു",
        completed: "പൂർത്തിയായി",
        rejected: "നിരസിച്ചു",
        actions: "പ്രവർത്തനങ്ങൾ",
        view: "കാണുക",
        submit: "സമർപ്പിക്കുക",
        cancel: "റദ്ദാക്കുക",
        save: "സേവ് ചെയ്യുക",
        search: "തിരയുക",
        listen: "കേൾക്കുക",
        stopListening: "കേൾക്കുന്നത് നിർത്തുക",
        recordVoice: "ശബ്ദം റെക്കോർഡ് ചെയ്യുക",
        stopRecording: "റെക്കോർഡിംഗ് നിർത്തുക",
        speakNow: "ഇപ്പോൾ സംസാരിക്കുക",
        transcript: "ശബ്ദത്തിന്റെ എഴുത്തുരൂപം",
        useTranscript: "ഫോം പൂരിപ്പിക്കാൻ ഉപയോഗിക്കുക",

        schemes: "സർക്കാർ പദ്ധതികൾ",
        schemesTitle: "സർക്കാർ പദ്ധതികളും കർഷക ആനുകൂല്യങ്ങളും",
        schemesDescription: "ഇന്ത്യയിലുടനീളമുള്ള കർഷകർക്ക് ലഭ്യമായ സർക്കാർ പദ്ധതികളും സബ്‌സിഡികളും സാമ്പത്തിക സഹായവും അറിയുക.",
        allIndia: "ഇന്ത്യയിലുടനീളം",
        officialLinks: "ഔദ്യോഗിക സർക്കാർ ലിങ്കുകൾ",
        regionalSupport: "പ്രാദേശിക ഭാഷാ പിന്തുണ",
        importantInformation: "പ്രധാന വിവരം",
        schemeNotice: "പദ്ധതികളുടെ യോഗ്യതയും ആനുകൂല്യങ്ങളും അപേക്ഷാ സമയപരിധിയും മാറാം. ഔദ്യോഗിക പോർട്ടലിൽ പരിശോധിക്കുക.",
        discoverBenefits: "ആനുകൂല്യങ്ങൾ കണ്ടെത്തുക",
        findScheme: "ശരിയായ പദ്ധതി കണ്ടെത്തുക",
        searchSchemes: "പദ്ധതികളോ ആനുകൂല്യങ്ങളോ തിരയുക...",
        allCategories: "എല്ലാ വിഭാഗങ്ങളും",
        allStates: "എല്ലാ സംസ്ഥാനങ്ങളും കേന്ദ്രഭരണ പ്രദേശങ്ങളും",
        allLevels: "എല്ലാ സർക്കാർ തലങ്ങളും",
        centralGovernment: "കേന്ദ്ര സർക്കാർ",
        stateGovernment: "സംസ്ഥാന സർക്കാർ",
        searchButton: "പദ്ധതികൾ തിരയുക",
        reset: "പുനഃസജ്ജമാക്കുക",
        schemeDirectory: "പദ്ധതികളുടെ പട്ടിക",
        availableSchemes: "ലഭ്യമായ പദ്ധതികൾ",
        benefits: "ആനുകൂല്യങ്ങൾ",
        eligibility: "യോഗ്യത",
        requiredDocuments: "ആവശ്യമായ രേഖകൾ",
        applyOfficial: "ഔദ്യോഗിക വെബ്സൈറ്റിൽ അപേക്ഷിക്കുക",
        officialSource: "ഔദ്യോഗിക ഉറവിടം",
        lastChecked: "അവസാനമായി പരിശോധിച്ചത്",
        noSchemes: "പദ്ധതികളൊന്നും കണ്ടെത്തിയില്ല. തിരച്ചിൽ മാറ്റുക.",
        loadingSchemes: "പദ്ധതികൾ ലോഡ് ചെയ്യുന്നു...",
        schemeError: "പദ്ധതികൾ ലോഡ് ചെയ്യാനായില്ല.",
        centralScheme: "കേന്ദ്ര സർക്കാർ പദ്ധതി",
        stateScheme: "സംസ്ഥാന സർക്കാർ പദ്ധതി",
        applicationLink: "അപേക്ഷാ ലിങ്ക്",
        viewDetails: "വിവരങ്ങൾ കാണുക",
        readMore: "കൂടുതൽ വായിക്കുക",
        close: "അടയ്ക്കുക"
    },

    "mr-IN": {
        home: "मुख्यपृष्ठ",
        farmerPortal: "शेतकरी पोर्टल",
        buyerPortal: "खरेदीदार पोर्टल",
        dashboard: "डॅशबोर्ड",
        login: "लॉगिन",
        register: "नोंदणी",
        logout: "लॉगआउट",
        welcome: "AgriLedger मध्ये आपले स्वागत आहे",
        tagline: "अधिक स्मार्ट आणि पारदर्शक कृषी बाजारपेठ.",
        getStarted: "सुरू करा",
        farmer: "शेतकरी",
        buyer: "खरेदीदार",
        name: "पूर्ण नाव",
        email: "ईमेल पत्ता",
        phone: "फोन नंबर",
        password: "पासवर्ड",
        confirmPassword: "पासवर्डची पुष्टी करा",
        state: "राज्य",
        district: "जिल्हा",
        language: "आवडती भाषा",
        selectRole: "तुमची भूमिका निवडा",
        createAccount: "खाते तयार करा",
        alreadyAccount: "आधीच खाते आहे का?",
        noAccount: "खाते नाही का?",
        loginHere: "येथे लॉगिन करा",
        registerHere: "येथे नोंदणी करा",
        crop: "पिकाचे नाव",
        quantity: "प्रमाण",
        unit: "एकक",
        price: "प्रति एकक किंमत",
        deductions: "कपात",
        totalAmount: "एकूण रक्कम",
        finalAmount: "अंतिम देय रक्कम",
        deadline: "पेमेंटची अंतिम तारीख",
        createTransaction: "व्यवहार तयार करा",
        transactionHistory: "व्यवहार इतिहास",
        myTransactions: "माझे व्यवहार",
        agreements: "करार",
        payments: "पेमेंट",
        support: "मदत",
        priceInsights: "किंमत माहिती",
        pending: "प्रलंबित",
        confirmed: "पुष्टी झाली",
        completed: "पूर्ण",
        rejected: "नाकारणे",
        actions: "कृती",
        view: "पहा",
        submit: "सबमिट करा",
        cancel: "रद्द करा",
        save: "जतन करा",
        search: "शोधा",
        listen: "ऐका",
        stopListening: "ऐकणे थांबवा",
        recordVoice: "आवाज रेकॉर्ड करा",
        stopRecording: "रेकॉर्डिंग थांबवा",
        speakNow: "आता बोला",
        transcript: "मजकूर",
        useTranscript: "फॉर्म भरण्यासाठी वापरा",

        schemes: "सरकारी योजना",
        schemesTitle: "सरकारी योजना आणि शेतकरी लाभ",
        schemesDescription: "भारतातील शेतकऱ्यांसाठी उपलब्ध सरकारी योजना, अनुदाने आणि आर्थिक मदतीची माहिती मिळवा.",
        allIndia: "संपूर्ण भारत",
        officialLinks: "अधिकृत सरकारी दुवे",
        regionalSupport: "प्रादेशिक भाषा समर्थन",
        importantInformation: "महत्त्वाची माहिती",
        schemeNotice: "योजनांची पात्रता, लाभ आणि अर्जाच्या अंतिम तारखा बदलू शकतात. अधिकृत पोर्टलवर तपासा.",
        discoverBenefits: "लाभ शोधा",
        findScheme: "योग्य योजना शोधा",
        searchSchemes: "योजना किंवा लाभ शोधा...",
        allCategories: "सर्व श्रेणी",
        allStates: "सर्व राज्ये आणि केंद्रशासित प्रदेश",
        allLevels: "सर्व सरकारी स्तर",
        centralGovernment: "केंद्र सरकार",
        stateGovernment: "राज्य सरकार",
        searchButton: "योजना शोधा",
        reset: "रीसेट",
        schemeDirectory: "योजनांची यादी",
        availableSchemes: "उपलब्ध योजना",
        benefits: "लाभ",
        eligibility: "पात्रता",
        requiredDocuments: "आवश्यक कागदपत्रे",
        applyOfficial: "अधिकृत वेबसाइटवर अर्ज करा",
        officialSource: "अधिकृत स्रोत",
        lastChecked: "शेवटची तपासणी",
        noSchemes: "कोणतीही योजना आढळली नाही. शोध बदला.",
        loadingSchemes: "योजना लोड होत आहेत...",
        schemeError: "योजना लोड करता आल्या नाहीत.",
        centralScheme: "केंद्र सरकारची योजना",
        stateScheme: "राज्य सरकारची योजना",
        applicationLink: "अर्ज लिंक",
        viewDetails: "तपशील पहा",
        readMore: "अधिक वाचा",
        close: "बंद करा"
    },

    "bn-IN": {
        home: "হোম",
        farmerPortal: "কৃষক পোর্টাল",
        buyerPortal: "ক্রেতা পোর্টাল",
        dashboard: "ড্যাশবোর্ড",
        login: "লগইন",
        register: "নিবন্ধন",
        logout: "লগআউট",
        welcome: "AgriLedger-এ স্বাগতম",
        tagline: "একটি স্মার্ট এবং স্বচ্ছ কৃষি বাজার।",
        getStarted: "শুরু করুন",
        farmer: "কৃষক",
        buyer: "ক্রেতা",
        name: "সম্পূর্ণ নাম",
        email: "ইমেল ঠিকানা",
        phone: "ফোন নম্বর",
        password: "পাসওয়ার্ড",
        confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
        state: "রাজ্য",
        district: "জেলা",
        language: "পছন্দের ভাষা",
        selectRole: "আপনার ভূমিকা নির্বাচন করুন",
        createAccount: "অ্যাকাউন্ট তৈরি করুন",
        alreadyAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
        noAccount: "অ্যাকাউন্ট নেই?",
        loginHere: "এখানে লগইন করুন",
        registerHere: "এখানে নিবন্ধন করুন",
        crop: "ফসলের নাম",
        quantity: "পরিমাণ",
        unit: "একক",
        price: "প্রতি এককের মূল্য",
        deductions: "কর্তন",
        totalAmount: "মোট পরিমাণ",
        finalAmount: "চূড়ান্ত প্রদেয় পরিমাণ",
        deadline: "পেমেন্টের শেষ তারিখ",
        createTransaction: "লেনদেন তৈরি করুন",
        transactionHistory: "লেনদেনের ইতিহাস",
        myTransactions: "আমার লেনদেন",
        agreements: "চুক্তি",
        payments: "পেমেন্ট",
        support: "সহায়তা",
        priceInsights: "মূল্যের তথ্য",
        pending: "অপেক্ষমাণ",
        confirmed: "নিশ্চিত",
        completed: "সম্পন্ন",
        rejected: "প্রত্যাখ্যাত",
        actions: "কাজ",
        view: "দেখুন",
        submit: "জমা দিন",
        cancel: "বাতিল করুন",
        save: "সংরক্ষণ করুন",
        search: "খুঁজুন",
        listen: "শুনুন",
        stopListening: "শোনা বন্ধ করুন",
        recordVoice: "ভয়েস রেকর্ড করুন",
        stopRecording: "রেকর্ডিং বন্ধ করুন",
        speakNow: "এখন বলুন",
        transcript: "ট্রান্সক্রিপ্ট",
        useTranscript: "ফর্ম পূরণ করতে ব্যবহার করুন",

        schemes: "সরকারি প্রকল্প",
        schemesTitle: "সরকারি প্রকল্প ও কৃষকদের সুবিধা",
        schemesDescription: "ভারতজুড়ে কৃষকদের জন্য উপলব্ধ সরকারি প্রকল্প, ভর্তুকি এবং আর্থিক সহায়তা সম্পর্কে জানুন।",
        allIndia: "সারা ভারত",
        officialLinks: "সরকারি ওয়েবসাইটের লিঙ্ক",
        regionalSupport: "আঞ্চলিক ভাষার সহায়তা",
        importantInformation: "গুরুত্বপূর্ণ তথ্য",
        schemeNotice: "প্রকল্পের যোগ্যতা, সুবিধা এবং আবেদনের শেষ তারিখ পরিবর্তিত হতে পারে। সরকারি পোর্টালে যাচাই করুন।",
        discoverBenefits: "সুবিধা খুঁজুন",
        findScheme: "সঠিক প্রকল্প খুঁজুন",
        searchSchemes: "প্রকল্প বা সুবিধা খুঁজুন...",
        allCategories: "সব বিভাগ",
        allStates: "সব রাজ্য ও কেন্দ্রশাসিত অঞ্চল",
        allLevels: "সব সরকারি স্তর",
        centralGovernment: "কেন্দ্রীয় সরকার",
        stateGovernment: "রাজ্য সরকার",
        searchButton: "প্রকল্প খুঁজুন",
        reset: "রিসেট",
        schemeDirectory: "প্রকল্পের তালিকা",
        availableSchemes: "উপলব্ধ প্রকল্প",
        benefits: "সুবিধা",
        eligibility: "যোগ্যতা",
        requiredDocuments: "প্রয়োজনীয় নথি",
        applyOfficial: "সরকারি ওয়েবসাইটে আবেদন করুন",
        officialSource: "সরকারি উৎস",
        lastChecked: "সর্বশেষ যাচাই",
        noSchemes: "কোনো প্রকল্প পাওয়া যায়নি। অনুসন্ধান পরিবর্তন করুন।",
        loadingSchemes: "প্রকল্প লোড হচ্ছে...",
        schemeError: "প্রকল্প লোড করা যায়নি।",
        centralScheme: "কেন্দ্রীয় সরকারি প্রকল্প",
        stateScheme: "রাজ্য সরকারি প্রকল্প",
        applicationLink: "আবেদনের লিঙ্ক",
        viewDetails: "বিস্তারিত দেখুন",
        readMore: "আরও পড়ুন",
        close: "বন্ধ করুন"
    }
};


/* ============================================================
   AGRILEDGER PORTAL TRANSLATIONS
   Farmer, Buyer and Admin dashboards - 8 languages
   ============================================================ */

const portalTranslations = {
    "en-IN": {
        newTransaction: "New Transaction",
        farmerDashboard: "Farmer Dashboard",
        buyerDashboard: "Buyer Dashboard",
        buyerPortalLabel: "BUYER PORTAL",
        adminPortal: "Admin Portal",
        overview: "Overview",
        users: "Users",
        transactions: "Transactions",
        reports: "Reports",
        administration: "ADMINISTRATION",
        platformOverview: "Platform Overview",
        monitorActivity: "Monitor AgriLedger activity.",
        adminPortalDescription: "Agricultural transaction management.",
        registeredFarmers: "Registered Farmers",
        registeredBuyers: "Registered Buyers",
        transactionValue: "Transaction Value",
        tableId: "ID",
        amount: "Amount",
        date: "Date",
        farmerPortalLabel: "FARMER PORTAL",
        farmerPortalTitle: "Farmer Portal",
        buyerDashboardDescription: "Manage your agricultural purchases, agreements and payments in one place.",
        totalTransactions: "Total Transactions",
        totalTransactionValue: "Total Transaction Value",
        reviewManageAgreements: "Review and manage your agreements",
        manageAgreements: "Manage Agreements",
        monitorPaymentRecords: "Monitor your payment records",
        viewPayments: "View Payments",
        quickActions: "Quick Actions",
        quickActionsDescription: "Access the services you need.",
        reviewAgreements: "Review Agreements",
        trackPayments: "Track Payments",
        viewTransactionHistory: "View Transaction History",
        explorePriceInsights: "Explore Price Insights",
        getHelpSupport: "Get Help & Support",
        exploreGovernmentSchemes: "Explore Government Schemes",
        recentTransactions: "Recent Transactions",
        recentPurchasesDescription: "Review your latest agricultural purchases.",
        viewAll: "View All",
        transactionId: "Transaction ID",
        noTransactions: "No transactions found.",
        noTransactionsFound: "No transactions found.",
        noBuyerTransactions: "No transactions found. Your purchases will appear here.",
        farmerBenefits: "Farmer Benefits",
        governmentSchemesBenefits: "Government Schemes & Farmer Benefits",
        governmentSchemesSubsidies: "Government Schemes & Subsidies",
        governmentSchemesDescription: "Discover government schemes, subsidies and agricultural benefits.",
        buyerGovernmentDescription: "Explore agricultural support schemes, subsidies and official government resources available across India.",
        agriculturalInformation: "AGRICULTURAL INFORMATION"
    },

    "kn-IN": {
        newTransaction: "ಹೊಸ ವಹಿವಾಟು",
        farmerDashboard: "ರೈತರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        buyerDashboard: "ಖರೀದಿದಾರರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        buyerPortalLabel: "ಖರೀದಿದಾರರ ಪೋರ್ಟಲ್",
        adminPortal: "ನಿರ್ವಾಹಕ ಪೋರ್ಟಲ್",
        overview: "ಅವಲೋಕನ",
        users: "ಬಳಕೆದಾರರು",
        transactions: "ವಹಿವಾಟುಗಳು",
        reports: "ವರದಿಗಳು",
        administration: "ನಿರ್ವಹಣೆ",
        platformOverview: "ವೇದಿಕೆಯ ಅವಲೋಕನ",
        monitorActivity: "AgriLedger ಚಟುವಟಿಕೆಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ.",
        adminPortalDescription: "ಕೃಷಿ ವಹಿವಾಟು ನಿರ್ವಹಣೆ.",
        registeredFarmers: "ನೋಂದಾಯಿತ ರೈತರು",
        registeredBuyers: "ನೋಂದಾಯಿತ ಖರೀದಿದಾರರು",
        transactionValue: "ವಹಿವಾಟಿನ ಮೌಲ್ಯ",
        tableId: "ಗುರುತು ಸಂಖ್ಯೆ",
        amount: "ಮೊತ್ತ",
        date: "ದಿನಾಂಕ",
        farmerPortalLabel: "ರೈತರ ಪೋರ್ಟಲ್",
        farmerPortalTitle: "ರೈತರ ಪೋರ್ಟಲ್",
        buyerDashboardDescription: "ನಿಮ್ಮ ಕೃಷಿ ಖರೀದಿಗಳು, ಒಪ್ಪಂದಗಳು ಮತ್ತು ಪಾವತಿಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ನಿರ್ವಹಿಸಿ.",
        totalTransactions: "ಒಟ್ಟು ವಹಿವಾಟುಗಳು",
        totalTransactionValue: "ಒಟ್ಟು ವಹಿವಾಟಿನ ಮೌಲ್ಯ",
        reviewManageAgreements: "ನಿಮ್ಮ ಒಪ್ಪಂದಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",
        manageAgreements: "ಒಪ್ಪಂದಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
        monitorPaymentRecords: "ನಿಮ್ಮ ಪಾವತಿ ದಾಖಲೆಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",
        viewPayments: "ಪಾವತಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
        quickActions: "ತ್ವರಿತ ಕ್ರಿಯೆಗಳು",
        quickActionsDescription: "ನಿಮಗೆ ಅಗತ್ಯವಿರುವ ಸೇವೆಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.",
        reviewAgreements: "ಒಪ್ಪಂದಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
        trackPayments: "ಪಾವತಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
        viewTransactionHistory: "ವಹಿವಾಟಿನ ಇತಿಹಾಸ ವೀಕ್ಷಿಸಿ",
        explorePriceInsights: "ಬೆಲೆ ಮಾಹಿತಿಯನ್ನು ಅನ್ವೇಷಿಸಿ",
        getHelpSupport: "ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ ಪಡೆಯಿರಿ",
        exploreGovernmentSchemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        recentTransactions: "ಇತ್ತೀಚಿನ ವಹಿವಾಟುಗಳು",
        recentPurchasesDescription: "ನಿಮ್ಮ ಇತ್ತೀಚಿನ ಕೃಷಿ ಖರೀದಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
        viewAll: "ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ",
        transactionId: "ವಹಿವಾಟು ಸಂಖ್ಯೆ",
        noTransactions: "ಯಾವುದೇ ವಹಿವಾಟುಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
        noTransactionsFound: "ಯಾವುದೇ ವಹಿವಾಟುಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
        noBuyerTransactions: "ಯಾವುದೇ ವಹಿವಾಟುಗಳಿಲ್ಲ. ನಿಮ್ಮ ಖರೀದಿಗಳು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.",
        farmerBenefits: "ರೈತರ ಪ್ರಯೋಜನಗಳು",
        governmentSchemesBenefits: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ರೈತರ ಪ್ರಯೋಜನಗಳು",
        governmentSchemesSubsidies: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಸಬ್ಸಿಡಿಗಳು",
        governmentSchemesDescription: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು, ಸಬ್ಸಿಡಿಗಳು ಮತ್ತು ಕೃಷಿ ಪ್ರಯೋಜನಗಳನ್ನು ತಿಳಿಯಿರಿ.",
        buyerGovernmentDescription: "ಭಾರತದಾದ್ಯಂತ ಲಭ್ಯವಿರುವ ಕೃಷಿ ನೆರವು ಯೋಜನೆಗಳು ಮತ್ತು ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
        agriculturalInformation: "ಕೃಷಿ ಮಾಹಿತಿ"
    },

    "hi-IN": {
        newTransaction: "नया लेनदेन",
        farmerDashboard: "किसान डैशबोर्ड",
        buyerDashboard: "खरीदार डैशबोर्ड",
        buyerPortalLabel: "खरीदार पोर्टल",
        adminPortal: "एडमिन पोर्टल",
        overview: "अवलोकन",
        users: "उपयोगकर्ता",
        transactions: "लेनदेन",
        reports: "रिपोर्ट",
        administration: "प्रशासन",
        platformOverview: "प्लेटफ़ॉर्म अवलोकन",
        monitorActivity: "AgriLedger गतिविधियों की निगरानी करें।",
        adminPortalDescription: "कृषि लेनदेन प्रबंधन।",
        registeredFarmers: "पंजीकृत किसान",
        registeredBuyers: "पंजीकृत खरीदार",
        transactionValue: "लेनदेन मूल्य",
        tableId: "आईडी",
        amount: "राशि",
        date: "तारीख",
        farmerPortalLabel: "किसान पोर्टल",
        farmerPortalTitle: "किसान पोर्टल",
        buyerDashboardDescription: "अपनी कृषि खरीद, समझौते और भुगतान एक ही स्थान पर प्रबंधित करें।",
        totalTransactions: "कुल लेनदेन",
        totalTransactionValue: "कुल लेनदेन मूल्य",
        reviewManageAgreements: "अपने समझौतों की समीक्षा और प्रबंधन करें",
        manageAgreements: "समझौते प्रबंधित करें",
        monitorPaymentRecords: "अपने भुगतान रिकॉर्ड देखें",
        viewPayments: "भुगतान देखें",
        quickActions: "त्वरित कार्य",
        quickActionsDescription: "अपनी आवश्यक सेवाओं तक पहुँचें।",
        reviewAgreements: "समझौतों की समीक्षा करें",
        trackPayments: "भुगतान ट्रैक करें",
        viewTransactionHistory: "लेनदेन इतिहास देखें",
        explorePriceInsights: "मूल्य जानकारी देखें",
        getHelpSupport: "सहायता प्राप्त करें",
        exploreGovernmentSchemes: "सरकारी योजनाएँ देखें",
        recentTransactions: "हाल के लेनदेन",
        recentPurchasesDescription: "अपनी हाल की कृषि खरीद की समीक्षा करें।",
        viewAll: "सभी देखें",
        transactionId: "लेनदेन आईडी",
        noTransactions: "कोई लेनदेन नहीं मिला।",
        noTransactionsFound: "कोई लेनदेन नहीं मिला।",
        noBuyerTransactions: "कोई लेनदेन नहीं मिला। आपकी खरीद यहाँ दिखाई देगी।",
        farmerBenefits: "किसान लाभ",
        governmentSchemesBenefits: "सरकारी योजनाएँ और किसान लाभ",
        governmentSchemesSubsidies: "सरकारी योजनाएँ और सब्सिडी",
        governmentSchemesDescription: "सरकारी योजनाओं, सब्सिडी और कृषि लाभों की जानकारी प्राप्त करें।",
        buyerGovernmentDescription: "भारत भर में उपलब्ध कृषि सहायता योजनाओं और आधिकारिक सरकारी संसाधनों को देखें।",
        agriculturalInformation: "कृषि जानकारी"
    },

    "ta-IN": {
        newTransaction: "புதிய பரிவர்த்தனை",
        farmerDashboard: "விவசாயி டாஷ்போர்டு",
        buyerDashboard: "வாங்குபவர் டாஷ்போர்டு",
        buyerPortalLabel: "வாங்குபவர் தளம்",
        adminPortal: "நிர்வாகி தளம்",
        overview: "கண்ணோட்டம்",
        users: "பயனர்கள்",
        transactions: "பரிவர்த்தனைகள்",
        reports: "அறிக்கைகள்",
        administration: "நிர்வாகம்",
        platformOverview: "தளத்தின் கண்ணோட்டம்",
        monitorActivity: "AgriLedger செயல்பாடுகளைக் கண்காணிக்கவும்.",
        adminPortalDescription: "விவசாய பரிவர்த்தனை மேலாண்மை.",
        registeredFarmers: "பதிவு செய்த விவசாயிகள்",
        registeredBuyers: "பதிவு செய்த வாங்குபவர்கள்",
        transactionValue: "பரிவர்த்தனை மதிப்பு",
        tableId: "அடையாள எண்",
        amount: "தொகை",
        date: "தேதி",
        farmerPortalLabel: "விவசாயி தளம்",
        farmerPortalTitle: "விவசாயி தளம்",
        buyerDashboardDescription: "உங்கள் விவசாய கொள்முதல், ஒப்பந்தங்கள் மற்றும் பணப்பரிவர்த்தனைகளை ஒரே இடத்தில் நிர்வகிக்கவும்.",
        totalTransactions: "மொத்த பரிவர்த்தனைகள்",
        totalTransactionValue: "மொத்த பரிவர்த்தனை மதிப்பு",
        reviewManageAgreements: "உங்கள் ஒப்பந்தங்களை மதிப்பாய்வு செய்து நிர்வகிக்கவும்",
        manageAgreements: "ஒப்பந்தங்களை நிர்வகிக்கவும்",
        monitorPaymentRecords: "உங்கள் கட்டணப் பதிவுகளைக் கண்காணிக்கவும்",
        viewPayments: "கட்டணங்களைக் காண்க",
        quickActions: "விரைவு செயல்கள்",
        quickActionsDescription: "உங்களுக்குத் தேவையான சேவைகளை அணுகவும்.",
        reviewAgreements: "ஒப்பந்தங்களை மதிப்பாய்வு செய்யவும்",
        trackPayments: "கட்டணங்களைக் கண்காணிக்கவும்",
        viewTransactionHistory: "பரிவர்த்தனை வரலாற்றைக் காண்க",
        explorePriceInsights: "விலைத் தகவல்களைப் பார்க்கவும்",
        getHelpSupport: "உதவி மற்றும் ஆதரவைப் பெறவும்",
        exploreGovernmentSchemes: "அரசுத் திட்டங்களைப் பார்க்கவும்",
        recentTransactions: "சமீபத்திய பரிவர்த்தனைகள்",
        recentPurchasesDescription: "உங்கள் சமீபத்திய விவசாய கொள்முதல்களை மதிப்பாய்வு செய்யவும்.",
        viewAll: "அனைத்தையும் காண்க",
        transactionId: "பரிவர்த்தனை எண்",
        noTransactions: "பரிவர்த்தனைகள் எதுவும் இல்லை.",
        noTransactionsFound: "பரிவர்த்தனைகள் எதுவும் இல்லை.",
        noBuyerTransactions: "பரிவர்த்தனைகள் இல்லை. உங்கள் கொள்முதல்கள் இங்கே தோன்றும்.",
        farmerBenefits: "விவசாயி நன்மைகள்",
        governmentSchemesBenefits: "அரசுத் திட்டங்கள் மற்றும் விவசாயி நன்மைகள்",
        governmentSchemesSubsidies: "அரசுத் திட்டங்கள் மற்றும் மானியங்கள்",
        governmentSchemesDescription: "அரசுத் திட்டங்கள், மானியங்கள் மற்றும் விவசாய நன்மைகளை அறியவும்.",
        buyerGovernmentDescription: "இந்தியா முழுவதும் கிடைக்கும் விவசாய ஆதரவுத் திட்டங்கள் மற்றும் அதிகாரப்பூர்வ அரசு வளங்களைப் பார்க்கவும்.",
        agriculturalInformation: "விவசாயத் தகவல்"
    },

    "te-IN": {
        newTransaction: "కొత్త లావాదేవీ",
        farmerDashboard: "రైతు డ్యాష్‌బోర్డ్",
        buyerDashboard: "కొనుగోలుదారు డ్యాష్‌బోర్డ్",
        buyerPortalLabel: "కొనుగోలుదారు పోర్టల్",
        adminPortal: "అడ్మిన్ పోర్టల్",
        overview: "అవలోకనం",
        users: "వినియోగదారులు",
        transactions: "లావాదేవీలు",
        reports: "నివేదికలు",
        administration: "నిర్వహణ",
        platformOverview: "ప్లాట్‌ఫారమ్ అవలోకనం",
        monitorActivity: "AgriLedger కార్యకలాపాలను పర్యవేక్షించండి.",
        adminPortalDescription: "వ్యవసాయ లావాదేవీల నిర్వహణ.",
        registeredFarmers: "నమోదైన రైతులు",
        registeredBuyers: "నమోదైన కొనుగోలుదారులు",
        transactionValue: "లావాదేవీ విలువ",
        tableId: "ఐడి",
        amount: "మొత్తం",
        date: "తేదీ",
        farmerPortalLabel: "రైతు పోర్టల్",
        farmerPortalTitle: "రైతు పోర్టల్",
        buyerDashboardDescription: "మీ వ్యవసాయ కొనుగోళ్లు, ఒప్పందాలు మరియు చెల్లింపులను ఒకే చోట నిర్వహించండి.",
        totalTransactions: "మొత్తం లావాదేవీలు",
        totalTransactionValue: "మొత్తం లావాదేవీ విలువ",
        reviewManageAgreements: "మీ ఒప్పందాలను సమీక్షించి నిర్వహించండి",
        manageAgreements: "ఒప్పందాలను నిర్వహించండి",
        monitorPaymentRecords: "మీ చెల్లింపు రికార్డులను పర్యవేక్షించండి",
        viewPayments: "చెల్లింపులను చూడండి",
        quickActions: "త్వరిత చర్యలు",
        quickActionsDescription: "మీకు అవసరమైన సేవలను పొందండి.",
        reviewAgreements: "ఒప్పందాలను సమీక్షించండి",
        trackPayments: "చెల్లింపులను ట్రాక్ చేయండి",
        viewTransactionHistory: "లావాదేవీ చరిత్రను చూడండి",
        explorePriceInsights: "ధరల సమాచారాన్ని చూడండి",
        getHelpSupport: "సహాయం పొందండి",
        exploreGovernmentSchemes: "ప్రభుత్వ పథకాలను చూడండి",
        recentTransactions: "ఇటీవలి లావాదేవీలు",
        recentPurchasesDescription: "మీ ఇటీవలి వ్యవసాయ కొనుగోళ్లను సమీక్షించండి.",
        viewAll: "అన్నీ చూడండి",
        transactionId: "లావాదేవీ ఐడి",
        noTransactions: "లావాదేవీలు కనబడలేదు.",
        noTransactionsFound: "లావాదేవీలు కనబడలేదు.",
        noBuyerTransactions: "లావాదేవీలు లేవు. మీ కొనుగోళ్లు ఇక్కడ కనిపిస్తాయి.",
        farmerBenefits: "రైతు ప్రయోజనాలు",
        governmentSchemesBenefits: "ప్రభుత్వ పథకాలు మరియు రైతు ప్రయోజనాలు",
        governmentSchemesSubsidies: "ప్రభుత్వ పథకాలు మరియు సబ్సిడీలు",
        governmentSchemesDescription: "ప్రభుత్వ పథకాలు, సబ్సిడీలు మరియు వ్యవసాయ ప్రయోజనాలను తెలుసుకోండి.",
        buyerGovernmentDescription: "భారతదేశం అంతటా అందుబాటులో ఉన్న వ్యవసాయ సహాయ పథకాలు మరియు అధికారిక ప్రభుత్వ వనరులను అన్వేషించండి.",
        agriculturalInformation: "వ్యవసాయ సమాచారం"
    },

    "ml-IN": {
        newTransaction: "പുതിയ ഇടപാട്",
        farmerDashboard: "കർഷക ഡാഷ്ബോർഡ്",
        buyerDashboard: "വാങ്ങുന്നയാളുടെ ഡാഷ്ബോർഡ്",
        buyerPortalLabel: "വാങ്ങുന്നയാളുടെ പോർട്ടൽ",
        adminPortal: "അഡ്മിൻ പോർട്ടൽ",
        overview: "അവലോകനം",
        users: "ഉപയോക്താക്കൾ",
        transactions: "ഇടപാടുകൾ",
        reports: "റിപ്പോർട്ടുകൾ",
        administration: "ഭരണനിർവഹണം",
        platformOverview: "പ്ലാറ്റ്ഫോം അവലോകനം",
        monitorActivity: "AgriLedger പ്രവർത്തനങ്ങൾ നിരീക്ഷിക്കുക.",
        adminPortalDescription: "കാർഷിക ഇടപാട് മാനേജ്മെന്റ്.",
        registeredFarmers: "രജിസ്റ്റർ ചെയ്ത കർഷകർ",
        registeredBuyers: "രജിസ്റ്റർ ചെയ്ത വാങ്ങുന്നവർ",
        transactionValue: "ഇടപാട് മൂല്യം",
        tableId: "ഐഡി",
        amount: "തുക",
        date: "തീയതി",
        farmerPortalLabel: "കർഷക പോർട്ടൽ",
        farmerPortalTitle: "കർഷക പോർട്ടൽ",
        buyerDashboardDescription: "നിങ്ങളുടെ കാർഷിക വാങ്ങലുകൾ, കരാറുകൾ, പേയ്‌മെന്റുകൾ എന്നിവ ഒരിടത്ത് നിയന്ത്രിക്കുക.",
        totalTransactions: "ആകെ ഇടപാടുകൾ",
        totalTransactionValue: "ആകെ ഇടപാട് മൂല്യം",
        reviewManageAgreements: "നിങ്ങളുടെ കരാറുകൾ പരിശോധിച്ച് നിയന്ത്രിക്കുക",
        manageAgreements: "കരാറുകൾ നിയന്ത്രിക്കുക",
        monitorPaymentRecords: "നിങ്ങളുടെ പേയ്‌മെന്റ് രേഖകൾ നിരീക്ഷിക്കുക",
        viewPayments: "പേയ്‌മെന്റുകൾ കാണുക",
        quickActions: "ദ്രുത പ്രവർത്തനങ്ങൾ",
        quickActionsDescription: "നിങ്ങൾക്ക് ആവശ്യമായ സേവനങ്ങൾ ഉപയോഗിക്കുക.",
        reviewAgreements: "കരാറുകൾ പരിശോധിക്കുക",
        trackPayments: "പേയ്‌മെന്റുകൾ പിന്തുടരുക",
        viewTransactionHistory: "ഇടപാട് ചരിത്രം കാണുക",
        explorePriceInsights: "വില വിവരങ്ങൾ കാണുക",
        getHelpSupport: "സഹായം നേടുക",
        exploreGovernmentSchemes: "സർക്കാർ പദ്ധതികൾ കാണുക",
        recentTransactions: "സമീപകാല ഇടപാടുകൾ",
        recentPurchasesDescription: "നിങ്ങളുടെ സമീപകാല കാർഷിക വാങ്ങലുകൾ പരിശോധിക്കുക.",
        viewAll: "എല്ലാം കാണുക",
        transactionId: "ഇടപാട് ഐഡി",
        noTransactions: "ഇടപാടുകളൊന്നും കണ്ടെത്തിയില്ല.",
        noTransactionsFound: "ഇടപാടുകളൊന്നും കണ്ടെത്തിയില്ല.",
        noBuyerTransactions: "ഇടപാടുകളൊന്നുമില്ല. നിങ്ങളുടെ വാങ്ങലുകൾ ഇവിടെ കാണിക്കും.",
        farmerBenefits: "കർഷക ആനുകൂല്യങ്ങൾ",
        governmentSchemesBenefits: "സർക്കാർ പദ്ധതികളും കർഷക ആനുകൂല്യങ്ങളും",
        governmentSchemesSubsidies: "സർക്കാർ പദ്ധതികളും സബ്സിഡികളും",
        governmentSchemesDescription: "സർക്കാർ പദ്ധതികൾ, സബ്സിഡികൾ, കാർഷിക ആനുകൂല്യങ്ങൾ എന്നിവ അറിയുക.",
        buyerGovernmentDescription: "ഇന്ത്യയിലുടനീളം ലഭ്യമായ കാർഷിക സഹായ പദ്ധതികളും ഔദ്യോഗിക സർക്കാർ വിഭവങ്ങളും പര്യവേക്ഷണം ചെയ്യുക.",
        agriculturalInformation: "കാർഷിക വിവരങ്ങൾ"
    },

    "mr-IN": {
        newTransaction: "नवीन व्यवहार",
        farmerDashboard: "शेतकरी डॅशबोर्ड",
        buyerDashboard: "खरेदीदार डॅशबोर्ड",
        buyerPortalLabel: "खरेदीदार पोर्टल",
        adminPortal: "प्रशासक पोर्टल",
        overview: "आढावा",
        users: "वापरकर्ते",
        transactions: "व्यवहार",
        reports: "अहवाल",
        administration: "प्रशासन",
        platformOverview: "प्लॅटफॉर्मचा आढावा",
        monitorActivity: "AgriLedger क्रियाकलापांवर लक्ष ठेवा.",
        adminPortalDescription: "कृषी व्यवहार व्यवस्थापन.",
        registeredFarmers: "नोंदणीकृत शेतकरी",
        registeredBuyers: "नोंदणीकृत खरेदीदार",
        transactionValue: "व्यवहाराचे मूल्य",
        tableId: "आयडी",
        amount: "रक्कम",
        date: "तारीख",
        farmerPortalLabel: "शेतकरी पोर्टल",
        farmerPortalTitle: "शेतकरी पोर्टल",
        buyerDashboardDescription: "तुमची कृषी खरेदी, करार आणि देयके एकाच ठिकाणी व्यवस्थापित करा.",
        totalTransactions: "एकूण व्यवहार",
        totalTransactionValue: "एकूण व्यवहार मूल्य",
        reviewManageAgreements: "तुमच्या करारांचे पुनरावलोकन आणि व्यवस्थापन करा",
        manageAgreements: "करार व्यवस्थापित करा",
        monitorPaymentRecords: "तुमच्या देयकांच्या नोंदी तपासा",
        viewPayments: "देयके पहा",
        quickActions: "जलद कृती",
        quickActionsDescription: "तुम्हाला आवश्यक असलेल्या सेवा वापरा.",
        reviewAgreements: "करार तपासा",
        trackPayments: "देयकांचा मागोवा घ्या",
        viewTransactionHistory: "व्यवहार इतिहास पहा",
        explorePriceInsights: "किंमत माहिती पहा",
        getHelpSupport: "मदत मिळवा",
        exploreGovernmentSchemes: "सरकारी योजना पहा",
        recentTransactions: "अलीकडील व्यवहार",
        recentPurchasesDescription: "तुमच्या अलीकडील कृषी खरेदी तपासा.",
        viewAll: "सर्व पहा",
        transactionId: "व्यवहार आयडी",
        noTransactions: "कोणतेही व्यवहार आढळले नाहीत.",
        noTransactionsFound: "कोणतेही व्यवहार आढळले नाहीत.",
        noBuyerTransactions: "व्यवहार आढळले नाहीत. तुमच्या खरेदी येथे दिसतील.",
        farmerBenefits: "शेतकरी लाभ",
        governmentSchemesBenefits: "सरकारी योजना आणि शेतकरी लाभ",
        governmentSchemesSubsidies: "सरकारी योजना आणि अनुदाने",
        governmentSchemesDescription: "सरकारी योजना, अनुदाने आणि कृषी लाभांची माहिती मिळवा.",
        buyerGovernmentDescription: "भारतभर उपलब्ध कृषी सहाय्य योजना आणि अधिकृत सरकारी संसाधने पाहा.",
        agriculturalInformation: "कृषी माहिती"
    },

    "bn-IN": {
        newTransaction: "নতুন লেনদেন",
        farmerDashboard: "কৃষক ড্যাশবোর্ড",
        buyerDashboard: "ক্রেতা ড্যাশবোর্ড",
        buyerPortalLabel: "ক্রেতা পোর্টাল",
        adminPortal: "অ্যাডমিন পোর্টাল",
        overview: "সংক্ষিপ্ত বিবরণ",
        users: "ব্যবহারকারী",
        transactions: "লেনদেন",
        reports: "রিপোর্ট",
        administration: "প্রশাসন",
        platformOverview: "প্ল্যাটফর্মের বিবরণ",
        monitorActivity: "AgriLedger কার্যকলাপ পর্যবেক্ষণ করুন।",
        adminPortalDescription: "কৃষি লেনদেন ব্যবস্থাপনা।",
        registeredFarmers: "নিবন্ধিত কৃষক",
        registeredBuyers: "নিবন্ধিত ক্রেতা",
        transactionValue: "লেনদেনের মূল্য",
        tableId: "আইডি",
        amount: "পরিমাণ",
        date: "তারিখ",
        farmerPortalLabel: "কৃষক পোর্টাল",
        farmerPortalTitle: "কৃষক পোর্টাল",
        buyerDashboardDescription: "আপনার কৃষি ক্রয়, চুক্তি এবং পেমেন্ট এক জায়গায় পরিচালনা করুন।",
        totalTransactions: "মোট লেনদেন",
        totalTransactionValue: "মোট লেনদেনের মূল্য",
        reviewManageAgreements: "আপনার চুক্তিগুলি পর্যালোচনা ও পরিচালনা করুন",
        manageAgreements: "চুক্তি পরিচালনা করুন",
        monitorPaymentRecords: "আপনার পেমেন্টের রেকর্ড দেখুন",
        viewPayments: "পেমেন্ট দেখুন",
        quickActions: "দ্রুত কাজ",
        quickActionsDescription: "আপনার প্রয়োজনীয় পরিষেবাগুলি ব্যবহার করুন।",
        reviewAgreements: "চুক্তি পর্যালোচনা করুন",
        trackPayments: "পেমেন্ট ট্র্যাক করুন",
        viewTransactionHistory: "লেনদেনের ইতিহাস দেখুন",
        explorePriceInsights: "দামের তথ্য দেখুন",
        getHelpSupport: "সহায়তা নিন",
        exploreGovernmentSchemes: "সরকারি প্রকল্প দেখুন",
        recentTransactions: "সাম্প্রতিক লেনদেন",
        recentPurchasesDescription: "আপনার সাম্প্রতিক কৃষি ক্রয় পর্যালোচনা করুন।",
        viewAll: "সব দেখুন",
        transactionId: "লেনদেন আইডি",
        noTransactions: "কোনো লেনদেন পাওয়া যায়নি।",
        noTransactionsFound: "কোনো লেনদেন পাওয়া যায়নি।",
        noBuyerTransactions: "কোনো লেনদেন নেই। আপনার ক্রয় এখানে দেখা যাবে।",
        farmerBenefits: "কৃষকের সুবিধা",
        governmentSchemesBenefits: "সরকারি প্রকল্প ও কৃষকের সুবিধা",
        governmentSchemesSubsidies: "সরকারি প্রকল্প ও ভর্তুকি",
        governmentSchemesDescription: "সরকারি প্রকল্প, ভর্তুকি এবং কৃষি সুবিধা সম্পর্কে জানুন।",
        buyerGovernmentDescription: "ভারতজুড়ে উপলব্ধ কৃষি সহায়তা প্রকল্প এবং সরকারি সংস্থানগুলি দেখুন।",
        agriculturalInformation: "কৃষি তথ্য"
    }
};

const pageTranslations = {
    "en-IN": {
        hero_eyebrow: "MULTILINGUAL • VOICE-FIRST • TRANSPARENT",
        hero_title: "Agricultural Transactions",
        hero_subtitle: "Without Barriers.",
        hero_description: "Understand every agreement. Know every deduction. Track every payment. All in your preferred language.",
        farmer_portal: "Farmer Portal →",
        buyer_portal: "Buyer Portal →",
        voice_first: "Voice First",
        speak_naturally: "Speak naturally",
        transparent: "Transparent",
        clear_pricing: "Clear pricing",
        digital: "Digital",
        verifiable_records: "Verifiable records",
        voice_transactions: "🎙 Voice Transactions",
        agreement_review: "📄 Agreement Review",
        price_transparency: "📊 Price Transparency",
        payment_tracking: "💰 Payment Tracking",
        our_features: "OUR FEATURES",
        everything_farmers_need: "Everything Farmers Need",
        features_description: "Simple technology for transparent agricultural trade.",
        feature_voice_title: "Voice Transactions",
        feature_voice_description: "Create transaction details using your voice.",
        feature_language_title: "Regional Languages",
        feature_language_description: "Communicate in your preferred Indian language.",
        feature_agreement_title: "Agreement Explanation",
        feature_agreement_description: "Understand complicated terms in simple language.",
        feature_sms_title: "SMS Notifications",
        feature_sms_description: "Receive transaction updates on your phone.",
        feature_payment_title: "Payment Tracking",
        feature_payment_description: "See paid and pending transaction amounts.",
        feature_audio_title: "Audio Assistance",
        feature_audio_description: "Listen to important transaction details.",
        about_eyebrow: "ABOUT AGRILEDGER",
        about_title: "Every Farmer Deserves Transparency",
        about_description: "AgriLedger combines regional-language AI and digital transaction records to make agricultural trade easier to understand and verify.",
        get_started: "Get Started →"
    },

    "kn-IN": {
        hero_eyebrow: "ಬಹುಭಾಷಾ • ಧ್ವನಿ ಆಧಾರಿತ • ಪಾರದರ್ಶಕ",
        hero_title: "ಕೃಷಿ ವಹಿವಾಟುಗಳು",
        hero_subtitle: "ಯಾವುದೇ ಅಡೆತಡೆಗಳಿಲ್ಲದೆ.",
        hero_description: "ಪ್ರತಿ ಒಪ್ಪಂದವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ಪ್ರತಿ ಕಡಿತವನ್ನು ತಿಳಿಯಿರಿ. ಪ್ರತಿ ಪಾವತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ. ನಿಮ್ಮ ಆಯ್ಕೆಯ ಭಾಷೆಯಲ್ಲಿ.",
        farmer_portal: "ರೈತರ ಪೋರ್ಟಲ್ →",
        buyer_portal: "ಖರೀದಿದಾರರ ಪೋರ್ಟಲ್ →",
        voice_first: "ಧ್ವನಿಗೆ ಆದ್ಯತೆ",
        speak_naturally: "ಸಹಜವಾಗಿ ಮಾತನಾಡಿ",
        transparent: "ಪಾರದರ್ಶಕ",
        clear_pricing: "ಸ್ಪಷ್ಟ ಬೆಲೆ",
        digital: "ಡಿಜಿಟಲ್",
        verifiable_records: "ಪರಿಶೀಲಿಸಬಹುದಾದ ದಾಖಲೆಗಳು",
        voice_transactions: "🎙 ಧ್ವನಿ ವಹಿವಾಟುಗಳು",
        agreement_review: "📄 ಒಪ್ಪಂದ ಪರಿಶೀಲನೆ",
        price_transparency: "📊 ಬೆಲೆ ಪಾರದರ್ಶಕತೆ",
        payment_tracking: "💰 ಪಾವತಿ ಟ್ರ್ಯಾಕಿಂಗ್",
        our_features: "ನಮ್ಮ ವೈಶಿಷ್ಟ್ಯಗಳು",
        everything_farmers_need: "ರೈತರಿಗೆ ಬೇಕಾದ ಎಲ್ಲವೂ",
        features_description: "ಪಾರದರ್ಶಕ ಕೃಷಿ ವ್ಯಾಪಾರಕ್ಕಾಗಿ ಸರಳ ತಂತ್ರಜ್ಞಾನ.",
        feature_voice_title: "ಧ್ವನಿ ವಹಿವಾಟುಗಳು",
        feature_voice_description: "ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ಬಳಸಿ ವಹಿವಾಟಿನ ವಿವರಗಳನ್ನು ರಚಿಸಿ.",
        feature_language_title: "ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳು",
        feature_language_description: "ನಿಮ್ಮ ಆಯ್ಕೆಯ ಭಾರತೀಯ ಭಾಷೆಯಲ್ಲಿ ಸಂವಹನ ನಡೆಸಿ.",
        feature_agreement_title: "ಒಪ್ಪಂದದ ವಿವರಣೆ",
        feature_agreement_description: "ಸಂಕೀರ್ಣ ನಿಯಮಗಳನ್ನು ಸರಳ ಭಾಷೆಯಲ್ಲಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
        feature_sms_title: "SMS ಅಧಿಸೂಚನೆಗಳು",
        feature_sms_description: "ನಿಮ್ಮ ಫೋನ್‌ನಲ್ಲಿ ವಹಿವಾಟಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ.",
        feature_payment_title: "ಪಾವತಿ ಟ್ರ್ಯಾಕಿಂಗ್",
        feature_payment_description: "ಪಾವತಿಸಿದ ಮತ್ತು ಬಾಕಿ ಇರುವ ಮೊತ್ತಗಳನ್ನು ನೋಡಿ.",
        feature_audio_title: "ಧ್ವನಿ ಸಹಾಯ",
        feature_audio_description: "ಪ್ರಮುಖ ವಹಿವಾಟಿನ ವಿವರಗಳನ್ನು ಆಲಿಸಿ.",
        about_eyebrow: "AGRILEDGER ಬಗ್ಗೆ",
        about_title: "ಪ್ರತಿಯೊಬ್ಬ ರೈತನಿಗೂ ಪಾರದರ್ಶಕತೆ ಅಗತ್ಯ",
        about_description: "ಪ್ರಾದೇಶಿಕ ಭಾಷೆಯ AI ಮತ್ತು ಡಿಜಿಟಲ್ ವಹಿವಾಟಿನ ದಾಖಲೆಗಳ ಮೂಲಕ ಕೃಷಿ ವ್ಯಾಪಾರವನ್ನು ಸುಲಭವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಪರಿಶೀಲಿಸಲು AgriLedger ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
        get_started: "ಪ್ರಾರಂಭಿಸಿ →"
    },

    "hi-IN": {
        hero_eyebrow: "बहुभाषी • आवाज़ आधारित • पारदर्शी",
        hero_title: "कृषि लेनदेन",
        hero_subtitle: "बिना किसी बाधा के।",
        hero_description: "हर समझौते को समझें। हर कटौती जानें। हर भुगतान ट्रैक करें। अपनी पसंदीदा भाषा में।",
        farmer_portal: "किसान पोर्टल →",
        buyer_portal: "खरीदार पोर्टल →",
        voice_first: "आवाज़ को प्राथमिकता",
        speak_naturally: "स्वाभाविक रूप से बोलें",
        transparent: "पारदर्शी",
        clear_pricing: "स्पष्ट मूल्य",
        digital: "डिजिटल",
        verifiable_records: "सत्यापन योग्य रिकॉर्ड",
        voice_transactions: "🎙 आवाज़ से लेनदेन",
        agreement_review: "📄 समझौते की समीक्षा",
        price_transparency: "📊 मूल्य पारदर्शिता",
        payment_tracking: "💰 भुगतान ट्रैकिंग",
        our_features: "हमारी विशेषताएँ",
        everything_farmers_need: "किसानों के लिए आवश्यक सभी सुविधाएँ",
        features_description: "पारदर्शी कृषि व्यापार के लिए सरल तकनीक।",
        feature_voice_title: "आवाज़ से लेनदेन",
        feature_voice_description: "अपनी आवाज़ से लेनदेन का विवरण बनाएँ।",
        feature_language_title: "क्षेत्रीय भाषाएँ",
        feature_language_description: "अपनी पसंदीदा भारतीय भाषा में संवाद करें।",
        feature_agreement_title: "समझौते की व्याख्या",
        feature_agreement_description: "जटिल शर्तों को सरल भाषा में समझें।",
        feature_sms_title: "SMS सूचनाएँ",
        feature_sms_description: "अपने फ़ोन पर लेनदेन अपडेट प्राप्त करें।",
        feature_payment_title: "भुगतान ट्रैकिंग",
        feature_payment_description: "भुगतान की गई और लंबित राशि देखें।",
        feature_audio_title: "ऑडियो सहायता",
        feature_audio_description: "लेनदेन की महत्वपूर्ण जानकारी सुनें।",
        about_eyebrow: "AGRILEDGER के बारे में",
        about_title: "हर किसान पारदर्शिता का हकदार है",
        about_description: "AgriLedger क्षेत्रीय भाषा AI और डिजिटल लेनदेन रिकॉर्ड के माध्यम से कृषि व्यापार को समझना और सत्यापित करना आसान बनाता है।",
        get_started: "शुरू करें →"
    },

    "ta-IN": {
        hero_eyebrow: "பலமொழி • குரல் முதன்மை • வெளிப்படைத்தன்மை",
        hero_title: "விவசாய பரிவர்த்தனைகள்",
        hero_subtitle: "தடைகள் இல்லாமல்.",
        hero_description: "ஒவ்வொரு ஒப்பந்தத்தையும் புரிந்துகொள்ளுங்கள். ஒவ்வொரு கழிவையும் அறியுங்கள். ஒவ்வொரு கட்டணத்தையும் கண்காணியுங்கள். உங்கள் விருப்ப மொழியில்.",
        farmer_portal: "விவசாயி தளம் →",
        buyer_portal: "வாங்குபவர் தளம் →",
        voice_first: "குரலுக்கு முன்னுரிமை",
        speak_naturally: "இயல்பாகப் பேசுங்கள்",
        transparent: "வெளிப்படையானது",
        clear_pricing: "தெளிவான விலை",
        digital: "டிஜிட்டல்",
        verifiable_records: "சரிபார்க்கக்கூடிய பதிவுகள்",
        voice_transactions: "🎙 குரல் பரிவர்த்தனைகள்",
        agreement_review: "📄 ஒப்பந்த மதிப்பாய்வு",
        price_transparency: "📊 விலை வெளிப்படைத்தன்மை",
        payment_tracking: "💰 கட்டணக் கண்காணிப்பு",
        our_features: "எங்கள் அம்சங்கள்",
        everything_farmers_need: "விவசாயிகளுக்குத் தேவையான அனைத்தும்",
        features_description: "வெளிப்படையான விவசாய வர்த்தகத்திற்கான எளிய தொழில்நுட்பம்.",
        feature_voice_title: "குரல் பரிவர்த்தனைகள்",
        feature_voice_description: "உங்கள் குரலைப் பயன்படுத்தி பரிவர்த்தனை விவரங்களை உருவாக்குங்கள்.",
        feature_language_title: "பிராந்திய மொழிகள்",
        feature_language_description: "உங்கள் விருப்பமான இந்திய மொழியில் தொடர்புகொள்ளுங்கள்.",
        feature_agreement_title: "ஒப்பந்த விளக்கம்",
        feature_agreement_description: "சிக்கலான விதிமுறைகளை எளிய மொழியில் புரிந்துகொள்ளுங்கள்.",
        feature_sms_title: "SMS அறிவிப்புகள்",
        feature_sms_description: "உங்கள் தொலைபேசியில் பரிவர்த்தனை புதுப்பிப்புகளைப் பெறுங்கள்.",
        feature_payment_title: "கட்டணக் கண்காணிப்பு",
        feature_payment_description: "செலுத்தப்பட்ட மற்றும் நிலுவையிலுள்ள தொகைகளைக் காணுங்கள்.",
        feature_audio_title: "ஒலி உதவி",
        feature_audio_description: "முக்கியமான பரிவர்த்தனை விவரங்களைக் கேளுங்கள்.",
        about_eyebrow: "AGRILEDGER பற்றி",
        about_title: "ஒவ்வொரு விவசாயியும் வெளிப்படைத்தன்மைக்குத் தகுதியானவர்",
        about_description: "பிராந்திய மொழி AI மற்றும் டிஜிட்டல் பரிவர்த்தனை பதிவுகள் மூலம் விவசாய வர்த்தகத்தைப் புரிந்துகொள்வதையும் சரிபார்ப்பதையும் AgriLedger எளிதாக்குகிறது.",
        get_started: "தொடங்குங்கள் →"
    },

    "te-IN": {
        hero_eyebrow: "బహుభాషా • వాయిస్-ఫస్ట్ • పారదర్శకత",
        hero_title: "వ్యవసాయ లావాదేవీలు",
        hero_subtitle: "ఎలాంటి అడ్డంకులు లేకుండా.",
        hero_description: "ప్రతి ఒప్పందాన్ని అర్థం చేసుకోండి. ప్రతి కోతను తెలుసుకోండి. ప్రతి చెల్లింపును ట్రాక్ చేయండి. మీకు ఇష్టమైన భాషలో.",
        farmer_portal: "రైతు పోర్టల్ →",
        buyer_portal: "కొనుగోలుదారు పోర్టల్ →",
        voice_first: "వాయిస్‌కు ప్రాధాన్యత",
        speak_naturally: "సహజంగా మాట్లాడండి",
        transparent: "పారదర్శకత",
        clear_pricing: "స్పష్టమైన ధరలు",
        digital: "డిజిటల్",
        verifiable_records: "ధృవీకరించగల రికార్డులు",
        voice_transactions: "🎙 వాయిస్ లావాదేవీలు",
        agreement_review: "📄 ఒప్పంద సమీక్ష",
        price_transparency: "📊 ధరల పారదర్శకత",
        payment_tracking: "💰 చెల్లింపు ట్రాకింగ్",
        our_features: "మా ఫీచర్లు",
        everything_farmers_need: "రైతులకు అవసరమైన అన్ని సౌకర్యాలు",
        features_description: "పారదర్శక వ్యవసాయ వ్యాపారం కోసం సరళమైన సాంకేతికత.",
        feature_voice_title: "వాయిస్ లావాదేవీలు",
        feature_voice_description: "మీ స్వరంతో లావాదేవీ వివరాలను సృష్టించండి.",
        feature_language_title: "ప్రాంతీయ భాషలు",
        feature_language_description: "మీకు ఇష్టమైన భారతీయ భాషలో సంభాషించండి.",
        feature_agreement_title: "ఒప్పంద వివరణ",
        feature_agreement_description: "క్లిష్టమైన నిబంధనలను సరళమైన భాషలో అర్థం చేసుకోండి.",
        feature_sms_title: "SMS నోటిఫికేషన్లు",
        feature_sms_description: "మీ ఫోన్‌లో లావాదేవీ నవీకరణలను పొందండి.",
        feature_payment_title: "చెల్లింపు ట్రాకింగ్",
        feature_payment_description: "చెల్లించిన మరియు పెండింగ్ మొత్తాలను చూడండి.",
        feature_audio_title: "ఆడియో సహాయం",
        feature_audio_description: "ముఖ్యమైన లావాదేవీ వివరాలను వినండి.",
        about_eyebrow: "AGRILEDGER గురించి",
        about_title: "ప్రతి రైతు పారదర్శకతకు అర్హుడు",
        about_description: "ప్రాంతీయ భాషా AI మరియు డిజిటల్ లావాదేవీ రికార్డుల ద్వారా వ్యవసాయ వ్యాపారాన్ని అర్థం చేసుకోవడం, ధృవీకరించడం AgriLedger సులభతరం చేస్తుంది.",
        get_started: "ప్రారంభించండి →"
    },

    "ml-IN": {
        hero_eyebrow: "ബഹുഭാഷ • ശബ്ദത്തിന് മുൻഗണന • സുതാര്യത",
        hero_title: "കാർഷിക ഇടപാടുകൾ",
        hero_subtitle: "തടസ്സങ്ങളില്ലാതെ.",
        hero_description: "ഓരോ കരാറും മനസ്സിലാക്കുക. ഓരോ കുറവും അറിയുക. ഓരോ പേയ്‌മെന്റും പിന്തുടരുക. നിങ്ങളുടെ ഇഷ്ടഭാഷയിൽ.",
        farmer_portal: "കർഷക പോർട്ടൽ →",
        buyer_portal: "വാങ്ങുന്നയാളുടെ പോർട്ടൽ →",
        voice_first: "ശബ്ദത്തിന് മുൻഗണന",
        speak_naturally: "സ്വാഭാവികമായി സംസാരിക്കുക",
        transparent: "സുതാര്യത",
        clear_pricing: "വ്യക്തമായ വില",
        digital: "ഡിജിറ്റൽ",
        verifiable_records: "പരിശോധിക്കാവുന്ന രേഖകൾ",
        voice_transactions: "🎙 ശബ്ദ ഇടപാടുകൾ",
        agreement_review: "📄 കരാർ അവലോകനം",
        price_transparency: "📊 വില സുതാര്യത",
        payment_tracking: "💰 പേയ്‌മെന്റ് ട്രാക്കിംഗ്",
        our_features: "ഞങ്ങളുടെ സവിശേഷതകൾ",
        everything_farmers_need: "കർഷകർക്ക് ആവശ്യമായ എല്ലാം",
        features_description: "സുതാര്യമായ കാർഷിക വ്യാപാരത്തിനുള്ള ലളിതമായ സാങ്കേതികവിദ്യ.",
        feature_voice_title: "ശബ്ദ ഇടപാടുകൾ",
        feature_voice_description: "നിങ്ങളുടെ ശബ്ദം ഉപയോഗിച്ച് ഇടപാട് വിവരങ്ങൾ സൃഷ്ടിക്കുക.",
        feature_language_title: "പ്രാദേശിക ഭാഷകൾ",
        feature_language_description: "നിങ്ങളുടെ ഇഷ്ടപ്പെട്ട ഇന്ത്യൻ ഭാഷയിൽ ആശയവിനിമയം നടത്തുക.",
        feature_agreement_title: "കരാർ വിശദീകരണം",
        feature_agreement_description: "സങ്കീർണ്ണമായ നിബന്ധനകൾ ലളിതമായ ഭാഷയിൽ മനസ്സിലാക്കുക.",
        feature_sms_title: "SMS അറിയിപ്പുകൾ",
        feature_sms_description: "നിങ്ങളുടെ ഫോണിൽ ഇടപാട് അപ്‌ഡേറ്റുകൾ സ്വീകരിക്കുക.",
        feature_payment_title: "പേയ്‌മെന്റ് ട്രാക്കിംഗ്",
        feature_payment_description: "അടച്ചതും കുടിശ്ശികയുള്ളതുമായ തുകകൾ കാണുക.",
        feature_audio_title: "ഓഡിയോ സഹായം",
        feature_audio_description: "പ്രധാനപ്പെട്ട ഇടപാട് വിവരങ്ങൾ കേൾക്കുക.",
        about_eyebrow: "AGRILEDGER-നെ കുറിച്ച്",
        about_title: "ഓരോ കർഷകനും സുതാര്യത അർഹിക്കുന്നു",
        about_description: "പ്രാദേശിക ഭാഷാ AI-യും ഡിജിറ്റൽ ഇടപാട് രേഖകളും ഉപയോഗിച്ച് കാർഷിക വ്യാപാരം മനസ്സിലാക്കാനും പരിശോധിക്കാനും AgriLedger സഹായിക്കുന്നു.",
        get_started: "ആരംഭിക്കുക →"
    },

    "mr-IN": {
        hero_eyebrow: "बहुभाषिक • आवाज प्रथम • पारदर्शक",
        hero_title: "कृषी व्यवहार",
        hero_subtitle: "कोणत्याही अडथळ्यांशिवाय.",
        hero_description: "प्रत्येक करार समजून घ्या. प्रत्येक कपात जाणून घ्या. प्रत्येक देयकाचा मागोवा घ्या. आपल्या पसंतीच्या भाषेत.",
        farmer_portal: "शेतकरी पोर्टल →",
        buyer_portal: "खरेदीदार पोर्टल →",
        voice_first: "आवाजाला प्राधान्य",
        speak_naturally: "नैसर्गिकपणे बोला",
        transparent: "पारदर्शक",
        clear_pricing: "स्पष्ट किंमत",
        digital: "डिजिटल",
        verifiable_records: "पडताळता येणाऱ्या नोंदी",
        voice_transactions: "🎙 आवाजाद्वारे व्यवहार",
        agreement_review: "📄 कराराचे पुनरावलोकन",
        price_transparency: "📊 किंमत पारदर्शकता",
        payment_tracking: "💰 देयकांचा मागोवा",
        our_features: "आमची वैशिष्ट्ये",
        everything_farmers_need: "शेतकऱ्यांना आवश्यक असलेल्या सर्व सुविधा",
        features_description: "पारदर्शक कृषी व्यापारासाठी सोपे तंत्रज्ञान.",
        feature_voice_title: "आवाजाद्वारे व्यवहार",
        feature_voice_description: "आपल्या आवाजाचा वापर करून व्यवहाराचे तपशील तयार करा.",
        feature_language_title: "प्रादेशिक भाषा",
        feature_language_description: "आपल्या पसंतीच्या भारतीय भाषेत संवाद साधा.",
        feature_agreement_title: "कराराचे स्पष्टीकरण",
        feature_agreement_description: "कठीण अटी सोप्या भाषेत समजून घ्या.",
        feature_sms_title: "SMS सूचना",
        feature_sms_description: "आपल्या फोनवर व्यवहाराच्या अद्ययावत सूचना मिळवा.",
        feature_payment_title: "देयकांचा मागोवा",
        feature_payment_description: "भरलेली आणि बाकी असलेली रक्कम पहा.",
        feature_audio_title: "ऑडिओ सहाय्य",
        feature_audio_description: "महत्त्वाचे व्यवहार तपशील ऐका.",
        about_eyebrow: "AGRILEDGER बद्दल",
        about_title: "प्रत्येक शेतकरी पारदर्शकतेस पात्र आहे",
        about_description: "प्रादेशिक भाषा AI आणि डिजिटल व्यवहार नोंदींमुळे कृषी व्यापार समजून घेणे आणि पडताळणे AgriLedger सोपे करते.",
        get_started: "सुरू करा →"
    },

    "bn-IN": {
        hero_eyebrow: "বহুভাষিক • ভয়েস-প্রথম • স্বচ্ছ",
        hero_title: "কৃষি লেনদেন",
        hero_subtitle: "কোনো বাধা ছাড়াই।",
        hero_description: "প্রতিটি চুক্তি বুঝুন। প্রতিটি কর্তন জানুন। প্রতিটি পেমেন্ট ট্র্যাক করুন। আপনার পছন্দের ভাষায়।",
        farmer_portal: "কৃষক পোর্টাল →",
        buyer_portal: "ক্রেতা পোর্টাল →",
        voice_first: "ভয়েস-প্রথম",
        speak_naturally: "স্বাভাবিকভাবে কথা বলুন",
        transparent: "স্বচ্ছ",
        clear_pricing: "স্পষ্ট মূল্য",
        digital: "ডিজিটাল",
        verifiable_records: "যাচাইযোগ্য রেকর্ড",
        voice_transactions: "🎙 ভয়েস লেনদেন",
        agreement_review: "📄 চুক্তি পর্যালোচনা",
        price_transparency: "📊 মূল্যের স্বচ্ছতা",
        payment_tracking: "💰 পেমেন্ট ট্র্যাকিং",
        our_features: "আমাদের বৈশিষ্ট্য",
        everything_farmers_need: "কৃষকদের প্রয়োজনীয় সবকিছু",
        features_description: "স্বচ্ছ কৃষি বাণিজ্যের জন্য সহজ প্রযুক্তি।",
        feature_voice_title: "ভয়েস লেনদেন",
        feature_voice_description: "আপনার কণ্ঠ ব্যবহার করে লেনদেনের বিবরণ তৈরি করুন।",
        feature_language_title: "আঞ্চলিক ভাষা",
        feature_language_description: "আপনার পছন্দের ভারতীয় ভাষায় যোগাযোগ করুন।",
        feature_agreement_title: "চুক্তির ব্যাখ্যা",
        feature_agreement_description: "জটিল শর্তগুলি সহজ ভাষায় বুঝুন।",
        feature_sms_title: "SMS বিজ্ঞপ্তি",
        feature_sms_description: "আপনার ফোনে লেনদেনের আপডেট পান।",
        feature_payment_title: "পেমেন্ট ট্র্যাকিং",
        feature_payment_description: "পরিশোধিত এবং বকেয়া পরিমাণ দেখুন।",
        feature_audio_title: "অডিও সহায়তা",
        feature_audio_description: "গুরুত্বপূর্ণ লেনদেনের বিবরণ শুনুন।",
        about_eyebrow: "AGRILEDGER সম্পর্কে",
        about_title: "প্রত্যেক কৃষক স্বচ্ছতার অধিকারী",
        about_description: "আঞ্চলিক ভাষার AI এবং ডিজিটাল লেনদেনের রেকর্ডের মাধ্যমে AgriLedger কৃষি বাণিজ্য বোঝা ও যাচাই করা সহজ করে।",
        get_started: "শুরু করুন →"
    }
};


/* LOGIN PAGE TRANSLATIONS - ALL 8 LANGUAGES */

const loginTranslations = {
    "en-IN": {
        login_welcome: "WELCOME BACK",
        login_heading: "Login to AgriLedger",
        login_description: "Access your agricultural transactions.",
        mobile_number: "Mobile Number",
        phone_placeholder: "Enter 10-digit mobile number",
        password_placeholder: "Enter password",
        select_portal: "Select Portal",
        farmer_portal_option: "Farmer Portal",
        buyer_portal_option: "Buyer Portal",
        admin_portal_option: "Admin Portal",
        login_button: "Login →",
        no_account: "Don't have an account?",
        register_here: "Register here"
    },

    "kn-IN": {
        login_welcome: "ಮತ್ತೆ ಸ್ವಾಗತ",
        login_heading: "AgriLedger ಗೆ ಲಾಗಿನ್ ಮಾಡಿ",
        login_description: "ನಿಮ್ಮ ಕೃಷಿ ವಹಿವಾಟುಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.",
        mobile_number: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        phone_placeholder: "10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
        password_placeholder: "ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
        select_portal: "ಪೋರ್ಟಲ್ ಆಯ್ಕೆಮಾಡಿ",
        farmer_portal_option: "ರೈತರ ಪೋರ್ಟಲ್",
        buyer_portal_option: "ಖರೀದಿದಾರರ ಪೋರ್ಟಲ್",
        admin_portal_option: "ನಿರ್ವಾಹಕ ಪೋರ್ಟಲ್",
        login_button: "ಲಾಗಿನ್ ಮಾಡಿ →",
        no_account: "ಖಾತೆ ಇಲ್ಲವೇ?",
        register_here: "ಇಲ್ಲಿ ನೋಂದಾಯಿಸಿ"
    },

    "hi-IN": {
        login_welcome: "वापस स्वागत है",
        login_heading: "AgriLedger में लॉगिन करें",
        login_description: "अपने कृषि लेनदेन तक पहुँचें।",
        mobile_number: "मोबाइल नंबर",
        phone_placeholder: "10 अंकों का मोबाइल नंबर दर्ज करें",
        password_placeholder: "पासवर्ड दर्ज करें",
        select_portal: "पोर्टल चुनें",
        farmer_portal_option: "किसान पोर्टल",
        buyer_portal_option: "खरीदार पोर्टल",
        admin_portal_option: "एडमिन पोर्टल",
        login_button: "लॉगिन करें →",
        no_account: "खाता नहीं है?",
        register_here: "यहाँ रजिस्टर करें"
    },

    "ta-IN": {
        login_welcome: "மீண்டும் வரவேற்கிறோம்",
        login_heading: "AgriLedger-இல் உள்நுழையவும்",
        login_description: "உங்கள் விவசாய பரிவர்த்தனைகளை அணுகவும்.",
        mobile_number: "கைபேசி எண்",
        phone_placeholder: "10 இலக்க கைபேசி எண்ணை உள்ளிடவும்",
        password_placeholder: "கடவுச்சொல்லை உள்ளிடவும்",
        select_portal: "தளத்தைத் தேர்ந்தெடுக்கவும்",
        farmer_portal_option: "விவசாயி தளம்",
        buyer_portal_option: "வாங்குபவர் தளம்",
        admin_portal_option: "நிர்வாகி தளம்",
        login_button: "உள்நுழையவும் →",
        no_account: "கணக்கு இல்லையா?",
        register_here: "இங்கே பதிவு செய்யவும்"
    },

    "te-IN": {
        login_welcome: "తిరిగి స్వాగతం",
        login_heading: "AgriLedger లో లాగిన్ అవ్వండి",
        login_description: "మీ వ్యవసాయ లావాదేవీలను యాక్సెస్ చేయండి.",
        mobile_number: "మొబైల్ నంబర్",
        phone_placeholder: "10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి",
        password_placeholder: "పాస్‌వర్డ్ నమోదు చేయండి",
        select_portal: "పోర్టల్ ఎంచుకోండి",
        farmer_portal_option: "రైతు పోర్టల్",
        buyer_portal_option: "కొనుగోలుదారు పోర్టల్",
        admin_portal_option: "అడ్మిన్ పోర్టల్",
        login_button: "లాగిన్ అవ్వండి →",
        no_account: "ఖాతా లేదా?",
        register_here: "ఇక్కడ నమోదు చేసుకోండి"
    },

    "ml-IN": {
        login_welcome: "വീണ്ടും സ്വാഗതം",
        login_heading: "AgriLedger-ൽ ലോഗിൻ ചെയ്യുക",
        login_description: "നിങ്ങളുടെ കാർഷിക ഇടപാടുകൾ പരിശോധിക്കുക.",
        mobile_number: "മൊബൈൽ നമ്പർ",
        phone_placeholder: "10 അക്ക മൊബൈൽ നമ്പർ നൽകുക",
        password_placeholder: "പാസ്‌വേഡ് നൽകുക",
        select_portal: "പോർട്ടൽ തിരഞ്ഞെടുക്കുക",
        farmer_portal_option: "കർഷക പോർട്ടൽ",
        buyer_portal_option: "വാങ്ങുന്നയാളുടെ പോർട്ടൽ",
        admin_portal_option: "അഡ്മിൻ പോർട്ടൽ",
        login_button: "ലോഗിൻ ചെയ്യുക →",
        no_account: "അക്കൗണ്ട് ഇല്ലേ?",
        register_here: "ഇവിടെ രജിസ്റ്റർ ചെയ്യുക"
    },

    "mr-IN": {
        login_welcome: "पुन्हा स्वागत आहे",
        login_heading: "AgriLedger मध्ये लॉगिन करा",
        login_description: "तुमचे कृषी व्यवहार पाहा.",
        mobile_number: "मोबाईल क्रमांक",
        phone_placeholder: "10 अंकी मोबाईल क्रमांक टाका",
        password_placeholder: "पासवर्ड टाका",
        select_portal: "पोर्टल निवडा",
        farmer_portal_option: "शेतकरी पोर्टल",
        buyer_portal_option: "खरेदीदार पोर्टल",
        admin_portal_option: "प्रशासक पोर्टल",
        login_button: "लॉगिन करा →",
        no_account: "खाते नाही?",
        register_here: "येथे नोंदणी करा"
    },

    "bn-IN": {
        login_welcome: "আবার স্বাগতম",
        login_heading: "AgriLedger-এ লগইন করুন",
        login_description: "আপনার কৃষি লেনদেন দেখুন।",
        mobile_number: "মোবাইল নম্বর",
        phone_placeholder: "10 সংখ্যার মোবাইল নম্বর লিখুন",
        password_placeholder: "পাসওয়ার্ড লিখুন",
        select_portal: "পোর্টাল নির্বাচন করুন",
        farmer_portal_option: "কৃষক পোর্টাল",
        buyer_portal_option: "ক্রেতা পোর্টাল",
        admin_portal_option: "অ্যাডমিন পোর্টাল",
        login_button: "লগইন করুন →",
        no_account: "অ্যাকাউন্ট নেই?",
        register_here: "এখানে নিবন্ধন করুন"
    }
};


/* ============================================================
   GOVERNMENT SCHEMES PAGE LABELS - ALL 8 LANGUAGES
   These keys complement the existing website translations.
   ============================================================ */

const governmentSchemeExtraTranslations = {
    "en-IN": {
        gov_hero_label: "GOVERNMENT SUPPORT FOR FARMERS",
        searchSchemeDescription: "Search government schemes by keyword, category, state or government level.",
        schemesFound: "schemes found",
        schemeLabel: "SCHEME",
        officialWebsite: "Official Website",
        sourceLabel: "Source:",
        noSchemesDescription: "Try changing your search words or filters to find available schemes.",
        viewAllSchemes: "View All Schemes",
        trustedInformation: "TRUSTED INFORMATION",
        officialGovernmentPortals: "Official Government Portals",
        officialPortalsDescription: "Use these official portals to verify scheme details and application information.",
        visitOfficialPortal: "Visit Official Portal",
        disclaimer: "Important Disclaimer",
        disclaimerDescription: "Scheme information is provided for awareness. Eligibility, benefits and application dates can change. Confirm the latest details on the relevant official government website before applying.",
        catalogueChecked: "Catalogue last checked:",
        listedSchemes: "Schemes listed:"
    },
    "kn-IN": {
        gov_hero_label: "ರೈತರಿಗಾಗಿ ಸರ್ಕಾರಿ ನೆರವು",
        searchSchemeDescription: "ಕೀವರ್ಡ್, ವರ್ಗ, ರಾಜ್ಯ ಅಥವಾ ಸರ್ಕಾರಿ ಮಟ್ಟದ ಆಧಾರದ ಮೇಲೆ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ.",
        schemesFound: "ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿವೆ",
        schemeLabel: "ಯೋಜನೆ",
        officialWebsite: "ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್",
        sourceLabel: "ಮೂಲ:",
        noSchemesDescription: "ಲಭ್ಯವಿರುವ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಲು ಹುಡುಕಾಟ ಪದಗಳು ಅಥವಾ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಬದಲಾಯಿಸಿ.",
        viewAllSchemes: "ಎಲ್ಲಾ ಯೋಜನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
        trustedInformation: "ವಿಶ್ವಾಸಾರ್ಹ ಮಾಹಿತಿ",
        officialGovernmentPortals: "ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳು",
        officialPortalsDescription: "ಯೋಜನೆಗಳ ವಿವರಗಳು ಮತ್ತು ಅರ್ಜಿ ಮಾಹಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲು ಈ ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗಳನ್ನು ಬಳಸಿ.",
        visitOfficialPortal: "ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ",
        disclaimer: "ಪ್ರಮುಖ ಸೂಚನೆ",
        disclaimerDescription: "ಯೋಜನೆಗಳ ಮಾಹಿತಿಯನ್ನು ಅರಿವು ಮೂಡಿಸಲು ನೀಡಲಾಗಿದೆ. ಅರ್ಹತೆ, ಪ್ರಯೋಜನಗಳು ಮತ್ತು ಅರ್ಜಿ ದಿನಾಂಕಗಳು ಬದಲಾಗಬಹುದು. ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಮೊದಲು ಸಂಬಂಧಿತ ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಇತ್ತೀಚಿನ ವಿವರಗಳನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
        catalogueChecked: "ಪಟ್ಟಿಯನ್ನು ಕೊನೆಯದಾಗಿ ಪರಿಶೀಲಿಸಿದ ದಿನಾಂಕ:",
        listedSchemes: "ಪಟ್ಟಿಯಲ್ಲಿರುವ ಯೋಜನೆಗಳು:"
    },
    "hi-IN": {
        gov_hero_label: "किसानों के लिए सरकारी सहायता",
        searchSchemeDescription: "कीवर्ड, श्रेणी, राज्य या सरकारी स्तर के आधार पर योजनाएँ खोजें।",
        schemesFound: "योजनाएँ मिलीं",
        schemeLabel: "योजना",
        officialWebsite: "आधिकारिक वेबसाइट",
        sourceLabel: "स्रोत:",
        noSchemesDescription: "उपलब्ध योजनाएँ खोजने के लिए खोज शब्द या फ़िल्टर बदलें।",
        viewAllSchemes: "सभी योजनाएँ देखें",
        trustedInformation: "विश्वसनीय जानकारी",
        officialGovernmentPortals: "आधिकारिक सरकारी पोर्टल",
        officialPortalsDescription: "योजना का विवरण और आवेदन की जानकारी सत्यापित करने के लिए इन आधिकारिक पोर्टलों का उपयोग करें।",
        visitOfficialPortal: "आधिकारिक पोर्टल पर जाएँ",
        disclaimer: "महत्वपूर्ण सूचना",
        disclaimerDescription: "योजना की जानकारी जागरूकता के लिए दी गई है। पात्रता, लाभ और आवेदन की तारीखें बदल सकती हैं। आवेदन करने से पहले संबंधित आधिकारिक सरकारी वेबसाइट पर नवीनतम जानकारी की पुष्टि करें।",
        catalogueChecked: "सूची की अंतिम जाँच:",
        listedSchemes: "सूचीबद्ध योजनाएँ:"
    },
    "ta-IN": {
        gov_hero_label: "விவசாயிகளுக்கான அரசு உதவி",
        searchSchemeDescription: "முக்கிய சொல், வகை, மாநிலம் அல்லது அரசு நிலை அடிப்படையில் திட்டங்களைத் தேடுங்கள்.",
        schemesFound: "திட்டங்கள் கிடைத்தன",
        schemeLabel: "திட்டம்",
        officialWebsite: "அதிகாரப்பூர்வ இணையதளம்",
        sourceLabel: "ஆதாரம்:",
        noSchemesDescription: "கிடைக்கும் திட்டங்களைக் கண்டறிய தேடல் சொற்கள் அல்லது வடிகட்டிகளை மாற்றவும்.",
        viewAllSchemes: "அனைத்து திட்டங்களையும் காண்க",
        trustedInformation: "நம்பகமான தகவல்",
        officialGovernmentPortals: "அரசின் அதிகாரப்பூர்வ இணையதளங்கள்",
        officialPortalsDescription: "திட்ட விவரங்கள் மற்றும் விண்ணப்பத் தகவல்களைச் சரிபார்க்க இந்த அதிகாரப்பூர்வ இணையதளங்களைப் பயன்படுத்தவும்.",
        visitOfficialPortal: "அதிகாரப்பூர்வ இணையதளத்தைப் பார்வையிடவும்",
        disclaimer: "முக்கிய அறிவிப்பு",
        disclaimerDescription: "திட்டத் தகவல்கள் விழிப்புணர்வுக்காக வழங்கப்படுகின்றன. தகுதி, நன்மைகள் மற்றும் விண்ணப்பத் தேதிகள் மாறலாம். விண்ணப்பிப்பதற்கு முன் தொடர்புடைய அதிகாரப்பூர்வ அரசு இணையதளத்தில் சமீபத்திய விவரங்களை உறுதிப்படுத்தவும்.",
        catalogueChecked: "பட்டியல் கடைசியாகச் சரிபார்க்கப்பட்டது:",
        listedSchemes: "பட்டியலிடப்பட்ட திட்டங்கள்:"
    },
    "te-IN": {
        gov_hero_label: "రైతుల కోసం ప్రభుత్వ సహాయం",
        searchSchemeDescription: "కీవర్డ్, వర్గం, రాష్ట్రం లేదా ప్రభుత్వ స్థాయి ఆధారంగా పథకాలను వెతకండి.",
        schemesFound: "పథకాలు కనుగొనబడ్డాయి",
        schemeLabel: "పథకం",
        officialWebsite: "అధికారిక వెబ్‌సైట్",
        sourceLabel: "మూలం:",
        noSchemesDescription: "అందుబాటులో ఉన్న పథకాలను కనుగొనడానికి శోధన పదాలు లేదా ఫిల్టర్‌లను మార్చండి.",
        viewAllSchemes: "అన్ని పథకాలను చూడండి",
        trustedInformation: "నమ్మకమైన సమాచారం",
        officialGovernmentPortals: "అధికారిక ప్రభుత్వ పోర్టల్‌లు",
        officialPortalsDescription: "పథకాల వివరాలు మరియు దరఖాస్తు సమాచారాన్ని నిర్ధారించడానికి ఈ అధికారిక పోర్టల్‌లను ఉపయోగించండి.",
        visitOfficialPortal: "అధికారిక పోర్టల్‌ను సందర్శించండి",
        disclaimer: "ముఖ్యమైన గమనిక",
        disclaimerDescription: "పథకాల సమాచారం అవగాహన కోసం అందించబడింది. అర్హత, ప్రయోజనాలు మరియు దరఖాస్తు తేదీలు మారవచ్చు. దరఖాస్తు చేసే ముందు సంబంధిత అధికారిక ప్రభుత్వ వెబ్‌సైట్‌లో తాజా వివరాలను నిర్ధారించుకోండి.",
        catalogueChecked: "కేటలాగ్ చివరిసారిగా తనిఖీ చేసిన తేదీ:",
        listedSchemes: "జాబితాలోని పథకాలు:"
    },
    "ml-IN": {
        gov_hero_label: "കർഷകർക്കുള്ള സർക്കാർ സഹായം",
        searchSchemeDescription: "കീവേഡ്, വിഭാഗം, സംസ്ഥാനം അല്ലെങ്കിൽ സർക്കാർ തലമനുസരിച്ച് പദ്ധതികൾ തിരയുക.",
        schemesFound: "പദ്ധതികൾ കണ്ടെത്തി",
        schemeLabel: "പദ്ധതി",
        officialWebsite: "ഔദ്യോഗിക വെബ്സൈറ്റ്",
        sourceLabel: "ഉറവിടം:",
        noSchemesDescription: "ലഭ്യമായ പദ്ധതികൾ കണ്ടെത്താൻ തിരച്ചിൽ വാക്കുകളോ ഫിൽട്ടറുകളോ മാറ്റുക.",
        viewAllSchemes: "എല്ലാ പദ്ധതികളും കാണുക",
        trustedInformation: "വിശ്വസനീയമായ വിവരം",
        officialGovernmentPortals: "ഔദ്യോഗിക സർക്കാർ പോർട്ടലുകൾ",
        officialPortalsDescription: "പദ്ധതി വിവരങ്ങളും അപേക്ഷാ വിവരങ്ങളും പരിശോധിക്കാൻ ഈ ഔദ്യോഗിക പോർട്ടലുകൾ ഉപയോഗിക്കുക.",
        visitOfficialPortal: "ഔദ്യോഗിക പോർട്ടൽ സന്ദർശിക്കുക",
        disclaimer: "പ്രധാന അറിയിപ്പ്",
        disclaimerDescription: "പദ്ധതികളെക്കുറിച്ചുള്ള വിവരങ്ങൾ ബോധവൽക്കരണത്തിനായി നൽകുന്നതാണ്. യോഗ്യത, ആനുകൂല്യങ്ങൾ, അപേക്ഷാ തീയതികൾ എന്നിവ മാറാം. അപേക്ഷിക്കുന്നതിന് മുമ്പ് ബന്ധപ്പെട്ട ഔദ്യോഗിക സർക്കാർ വെബ്സൈറ്റിൽ ഏറ്റവും പുതിയ വിവരങ്ങൾ ഉറപ്പാക്കുക.",
        catalogueChecked: "കാറ്റലോഗ് അവസാനമായി പരിശോധിച്ചത്:",
        listedSchemes: "പട്ടികപ്പെടുത്തിയ പദ്ധതികൾ:"
    },
    "mr-IN": {
        gov_hero_label: "शेतकऱ्यांसाठी सरकारी मदत",
        searchSchemeDescription: "कीवर्ड, श्रेणी, राज्य किंवा सरकारी स्तरानुसार योजना शोधा.",
        schemesFound: "योजना सापडल्या",
        schemeLabel: "योजना",
        officialWebsite: "अधिकृत वेबसाइट",
        sourceLabel: "स्रोत:",
        noSchemesDescription: "उपलब्ध योजना शोधण्यासाठी शोध शब्द किंवा फिल्टर बदला.",
        viewAllSchemes: "सर्व योजना पहा",
        trustedInformation: "विश्वसनीय माहिती",
        officialGovernmentPortals: "अधिकृत सरकारी पोर्टल्स",
        officialPortalsDescription: "योजनांचे तपशील आणि अर्जाची माहिती तपासण्यासाठी ही अधिकृत पोर्टल्स वापरा.",
        visitOfficialPortal: "अधिकृत पोर्टलला भेट द्या",
        disclaimer: "महत्त्वाची सूचना",
        disclaimerDescription: "योजनांची माहिती जनजागृतीसाठी दिली आहे. पात्रता, लाभ आणि अर्जाच्या तारखा बदलू शकतात. अर्ज करण्यापूर्वी संबंधित अधिकृत सरकारी वेबसाइटवर नवीनतम माहिती तपासा.",
        catalogueChecked: "यादी शेवटची तपासली:",
        listedSchemes: "यादीतील योजना:"
    },
    "bn-IN": {
        gov_hero_label: "কৃষকদের জন্য সরকারি সহায়তা",
        searchSchemeDescription: "কীওয়ার্ড, বিভাগ, রাজ্য বা সরকারি স্তর অনুযায়ী প্রকল্প খুঁজুন।",
        schemesFound: "টি প্রকল্প পাওয়া গেছে",
        schemeLabel: "প্রকল্প",
        officialWebsite: "সরকারি ওয়েবসাইট",
        sourceLabel: "উৎস:",
        noSchemesDescription: "উপলব্ধ প্রকল্প খুঁজতে অনুসন্ধানের শব্দ বা ফিল্টার পরিবর্তন করুন।",
        viewAllSchemes: "সব প্রকল্প দেখুন",
        trustedInformation: "বিশ্বস্ত তথ্য",
        officialGovernmentPortals: "সরকারি পোর্টালসমূহ",
        officialPortalsDescription: "প্রকল্পের বিবরণ এবং আবেদনের তথ্য যাচাই করতে এই সরকারি পোর্টালগুলি ব্যবহার করুন।",
        visitOfficialPortal: "সরকারি পোর্টালে যান",
        disclaimer: "গুরুত্বপূর্ণ বিজ্ঞপ্তি",
        disclaimerDescription: "প্রকল্পের তথ্য সচেতনতার জন্য দেওয়া হয়েছে। যোগ্যতা, সুবিধা এবং আবেদনের তারিখ পরিবর্তিত হতে পারে। আবেদন করার আগে সংশ্লিষ্ট সরকারি ওয়েবসাইটে সর্বশেষ তথ্য নিশ্চিত করুন।",
        catalogueChecked: "তালিকা সর্বশেষ যাচাই করা হয়েছে:",
        listedSchemes: "তালিকাভুক্ত প্রকল্প:"
    }
};

/* ============================================================
   FARMER DASHBOARD LABELS - ALL 8 LANGUAGES
   Added separately so existing translations remain untouched.
   ============================================================ */
const farmerDashboardTranslations = {
  "en-IN": {
    farmerPortalTitle:"Farmer Portal", newTransaction:"New Transaction", helpSupport:"Help & Support",
    transparentTransactions:"Transparent Transactions", farmerPortalLabel:"FARMER PORTAL",
    farmerDashboard:"Farmer Dashboard", farmerDashboardDescription:"Manage your transactions, agreements and payments in one place.",
    createNewTransaction:"Create New Transaction", totalTransactions:"Total Transactions", totalTransactionValue:"Total Transaction Value",
    reviewManageAgreements:"Review and manage your agreements", manageAgreements:"Manage Agreements",
    monitorPaymentRecords:"Monitor your payment records", viewPayments:"View Payments", quickActions:"Quick Actions",
    quickActionsDescription:"Access the features you use most often.", reviewAgreements:"Review Agreements", trackPayments:"Track Payments",
    viewTransactionHistory:"View Transaction History", explorePriceInsights:"Explore Price Insights", getHelpSupport:"Get Help & Support",
    exploreGovernmentSchemes:"Explore Government Schemes", recentTransactions:"Recent Transactions",
    recentTransactionsDescription:"A quick overview of your latest transactions.", viewAll:"View All", transactionId:"Transaction ID",
    noTransactions:"No transactions yet.", farmerBenefits:"Farmer Benefits", governmentSchemesSubsidies:"Government Schemes & Subsidies",
    governmentSchemesDescription:"Explore schemes and benefits that may be available to farmers."
  },
  "kn-IN": {
    farmerPortalTitle:"ರೈತರ ಪೋರ್ಟಲ್", newTransaction:"ಹೊಸ ವಹಿವಾಟು", helpSupport:"ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ",
    transparentTransactions:"ಪಾರದರ್ಶಕ ವಹಿವಾಟುಗಳು", farmerPortalLabel:"ರೈತರ ಪೋರ್ಟಲ್",
    farmerDashboard:"ರೈತರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", farmerDashboardDescription:"ನಿಮ್ಮ ವಹಿವಾಟುಗಳು, ಒಪ್ಪಂದಗಳು ಮತ್ತು ಪಾವತಿಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ನಿರ್ವಹಿಸಿ.",
    createNewTransaction:"ಹೊಸ ವಹಿವಾಟು ರಚಿಸಿ", totalTransactions:"ಒಟ್ಟು ವಹಿವಾಟುಗಳು", totalTransactionValue:"ಒಟ್ಟು ವಹಿವಾಟಿನ ಮೌಲ್ಯ",
    reviewManageAgreements:"ನಿಮ್ಮ ಒಪ್ಪಂದಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ", manageAgreements:"ಒಪ್ಪಂದಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    monitorPaymentRecords:"ನಿಮ್ಮ ಪಾವತಿ ದಾಖಲೆಗಳನ್ನು ಗಮನಿಸಿ", viewPayments:"ಪಾವತಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ", quickActions:"ತ್ವರಿತ ಕ್ರಿಯೆಗಳು",
    quickActionsDescription:"ನೀವು ಹೆಚ್ಚಾಗಿ ಬಳಸುವ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ತೆರೆಯಿರಿ.", reviewAgreements:"ಒಪ್ಪಂದಗಳನ್ನು ಪರಿಶೀಲಿಸಿ", trackPayments:"ಪಾವತಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    viewTransactionHistory:"ವಹಿವಾಟಿನ ಇತಿಹಾಸ ವೀಕ್ಷಿಸಿ", explorePriceInsights:"ಬೆಲೆ ಮಾಹಿತಿಯನ್ನು ಅನ್ವೇಷಿಸಿ", getHelpSupport:"ಸಹಾಯ ಪಡೆಯಿರಿ",
    exploreGovernmentSchemes:"ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ", recentTransactions:"ಇತ್ತೀಚಿನ ವಹಿವಾಟುಗಳು",
    recentTransactionsDescription:"ನಿಮ್ಮ ಇತ್ತೀಚಿನ ವಹಿವಾಟುಗಳ ಸಂಕ್ಷಿಪ್ತ ವಿವರ.", viewAll:"ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ", transactionId:"ವಹಿವಾಟು ID",
    noTransactions:"ಇನ್ನೂ ಯಾವುದೇ ವಹಿವಾಟುಗಳಿಲ್ಲ.", farmerBenefits:"ರೈತರ ಪ್ರಯೋಜನಗಳು", governmentSchemesSubsidies:"ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಸಬ್ಸಿಡಿಗಳು",
    governmentSchemesDescription:"ರೈತರಿಗೆ ಲಭ್ಯವಿರಬಹುದಾದ ಯೋಜನೆಗಳು ಮತ್ತು ಪ್ರಯೋಜನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ."
  },
  "hi-IN": {
    farmerPortalTitle:"किसान पोर्टल", newTransaction:"नया लेनदेन", helpSupport:"सहायता और समर्थन",
    transparentTransactions:"पारदर्शी लेनदेन", farmerPortalLabel:"किसान पोर्टल",
    farmerDashboard:"किसान डैशबोर्ड", farmerDashboardDescription:"अपने लेनदेन, समझौतों और भुगतानों को एक ही जगह प्रबंधित करें।",
    createNewTransaction:"नया लेनदेन बनाएँ", totalTransactions:"कुल लेनदेन", totalTransactionValue:"कुल लेनदेन मूल्य",
    reviewManageAgreements:"अपने समझौतों की समीक्षा करें और उन्हें प्रबंधित करें", manageAgreements:"समझौते प्रबंधित करें",
    monitorPaymentRecords:"अपने भुगतान रिकॉर्ड देखें", viewPayments:"भुगतान देखें", quickActions:"त्वरित कार्रवाइयाँ",
    quickActionsDescription:"अक्सर उपयोग की जाने वाली सुविधाएँ खोलें।", reviewAgreements:"समझौतों की समीक्षा करें", trackPayments:"भुगतान ट्रैक करें",
    viewTransactionHistory:"लेनदेन इतिहास देखें", explorePriceInsights:"मूल्य जानकारी देखें", getHelpSupport:"सहायता प्राप्त करें",
    exploreGovernmentSchemes:"सरकारी योजनाएँ देखें", recentTransactions:"हाल के लेनदेन",
    recentTransactionsDescription:"आपके हाल के लेनदेन का संक्षिप्त विवरण।", viewAll:"सभी देखें", transactionId:"लेनदेन आईडी",
    noTransactions:"अभी तक कोई लेनदेन नहीं है।", farmerBenefits:"किसान लाभ", governmentSchemesSubsidies:"सरकारी योजनाएँ और सब्सिडी",
    governmentSchemesDescription:"किसानों के लिए उपलब्ध योजनाओं और लाभों को देखें।"
  },
  "ta-IN": {
    farmerPortalTitle:"விவசாயி தளம்", newTransaction:"புதிய பரிவர்த்தனை", helpSupport:"உதவி மற்றும் ஆதரவு",
    transparentTransactions:"வெளிப்படையான பரிவர்த்தனைகள்", farmerPortalLabel:"விவசாயி தளம்",
    farmerDashboard:"விவசாயி டாஷ்போர்டு", farmerDashboardDescription:"உங்கள் பரிவர்த்தனைகள், ஒப்பந்தங்கள் மற்றும் பணப்பரிவர்த்தனைகளை ஒரே இடத்தில் நிர்வகிக்கவும்.",
    createNewTransaction:"புதிய பரிவர்த்தனையை உருவாக்கவும்", totalTransactions:"மொத்த பரிவர்த்தனைகள்", totalTransactionValue:"மொத்த பரிவர்த்தனை மதிப்பு",
    reviewManageAgreements:"உங்கள் ஒப்பந்தங்களை மதிப்பாய்வு செய்து நிர்வகிக்கவும்", manageAgreements:"ஒப்பந்தங்களை நிர்வகிக்கவும்",
    monitorPaymentRecords:"உங்கள் கட்டணப் பதிவுகளைக் கண்காணிக்கவும்", viewPayments:"கட்டணங்களைக் காண்க", quickActions:"விரைவு செயல்கள்",
    quickActionsDescription:"நீங்கள் அடிக்கடி பயன்படுத்தும் அம்சங்களை அணுகவும்.", reviewAgreements:"ஒப்பந்தங்களை மதிப்பாய்வு செய்யவும்", trackPayments:"கட்டணங்களைக் கண்காணிக்கவும்",
    viewTransactionHistory:"பரிவர்த்தனை வரலாற்றைக் காண்க", explorePriceInsights:"விலைத் தகவல்களைப் பார்க்கவும்", getHelpSupport:"உதவி பெறவும்",
    exploreGovernmentSchemes:"அரசுத் திட்டங்களைப் பார்க்கவும்", recentTransactions:"சமீபத்திய பரிவர்த்தனைகள்",
    recentTransactionsDescription:"உங்கள் சமீபத்திய பரிவர்த்தனைகளின் சுருக்கம்.", viewAll:"அனைத்தையும் காண்க", transactionId:"பரிவர்த்தனை ID",
    noTransactions:"இதுவரை பரிவர்த்தனைகள் இல்லை.", farmerBenefits:"விவசாயி நன்மைகள்", governmentSchemesSubsidies:"அரசுத் திட்டங்கள் மற்றும் மானியங்கள்",
    governmentSchemesDescription:"விவசாயிகளுக்குக் கிடைக்கக்கூடிய திட்டங்கள் மற்றும் நன்மைகளைப் பாருங்கள்."
  },
  "te-IN": {
    farmerPortalTitle:"రైతు పోర్టల్", newTransaction:"కొత్త లావాదేవీ", helpSupport:"సహాయం మరియు మద్దతు",
    transparentTransactions:"పారదర్శక లావాదేవీలు", farmerPortalLabel:"రైతు పోర్టల్",
    farmerDashboard:"రైతు డ్యాష్‌బోర్డ్", farmerDashboardDescription:"మీ లావాదేవీలు, ఒప్పందాలు మరియు చెల్లింపులను ఒకే చోట నిర్వహించండి.",
    createNewTransaction:"కొత్త లావాదేవీని సృష్టించండి", totalTransactions:"మొత్తం లావాదేవీలు", totalTransactionValue:"మొత్తం లావాదేవీ విలువ",
    reviewManageAgreements:"మీ ఒప్పందాలను సమీక్షించి నిర్వహించండి", manageAgreements:"ఒప్పందాలను నిర్వహించండి",
    monitorPaymentRecords:"మీ చెల్లింపు రికార్డులను పర్యవేక్షించండి", viewPayments:"చెల్లింపులను చూడండి", quickActions:"త్వరిత చర్యలు",
    quickActionsDescription:"మీరు తరచుగా ఉపయోగించే లక్షణాలను తెరవండి.", reviewAgreements:"ఒప్పందాలను సమీక్షించండి", trackPayments:"చెల్లింపులను ట్రాక్ చేయండి",
    viewTransactionHistory:"లావాదేవీ చరిత్రను చూడండి", explorePriceInsights:"ధరల సమాచారాన్ని చూడండి", getHelpSupport:"సహాయం పొందండి",
    exploreGovernmentSchemes:"ప్రభుత్వ పథకాలను అన్వేషించండి", recentTransactions:"ఇటీవలి లావాదేవీలు",
    recentTransactionsDescription:"మీ ఇటీవలి లావాదేవీల సంక్షిప్త వివరాలు.", viewAll:"అన్నీ చూడండి", transactionId:"లావాదేవీ ID",
    noTransactions:"ఇంకా లావాదేవీలు లేవు.", farmerBenefits:"రైతుల ప్రయోజనాలు", governmentSchemesSubsidies:"ప్రభుత్వ పథకాలు మరియు సబ్సిడీలు",
    governmentSchemesDescription:"రైతులకు అందుబాటులో ఉండే పథకాలు మరియు ప్రయోజనాలను చూడండి."
  },
  "ml-IN": {
    farmerPortalTitle:"കർഷക പോർട്ടൽ", newTransaction:"പുതിയ ഇടപാട്", helpSupport:"സഹായവും പിന്തുണയും",
    transparentTransactions:"സുതാര്യമായ ഇടപാടുകൾ", farmerPortalLabel:"കർഷക പോർട്ടൽ",
    farmerDashboard:"കർഷക ഡാഷ്ബോർഡ്", farmerDashboardDescription:"നിങ്ങളുടെ ഇടപാടുകളും കരാറുകളും പേയ്‌മെന്റുകളും ഒരിടത്ത് നിയന്ത്രിക്കുക.",
    createNewTransaction:"പുതിയ ഇടപാട് സൃഷ്ടിക്കുക", totalTransactions:"ആകെ ഇടപാടുകൾ", totalTransactionValue:"ആകെ ഇടപാട് മൂല്യം",
    reviewManageAgreements:"നിങ്ങളുടെ കരാറുകൾ പരിശോധിച്ച് നിയന്ത്രിക്കുക", manageAgreements:"കരാറുകൾ നിയന്ത്രിക്കുക",
    monitorPaymentRecords:"നിങ്ങളുടെ പേയ്‌മെന്റ് രേഖകൾ നിരീക്ഷിക്കുക", viewPayments:"പേയ്‌മെന്റുകൾ കാണുക", quickActions:"ദ്രുത പ്രവർത്തനങ്ങൾ",
    quickActionsDescription:"നിങ്ങൾ പതിവായി ഉപയോഗിക്കുന്ന സവിശേഷതകൾ തുറക്കുക.", reviewAgreements:"കരാറുകൾ പരിശോധിക്കുക", trackPayments:"പേയ്‌മെന്റുകൾ ട്രാക്ക് ചെയ്യുക",
    viewTransactionHistory:"ഇടപാട് ചരിത്രം കാണുക", explorePriceInsights:"വില വിവരങ്ങൾ പരിശോധിക്കുക", getHelpSupport:"സഹായം നേടുക",
    exploreGovernmentSchemes:"സർക്കാർ പദ്ധതികൾ പരിശോധിക്കുക", recentTransactions:"സമീപകാല ഇടപാടുകൾ",
    recentTransactionsDescription:"നിങ്ങളുടെ ഏറ്റവും പുതിയ ഇടപാടുകളുടെ ചുരുക്കം.", viewAll:"എല്ലാം കാണുക", transactionId:"ഇടപാട് ID",
    noTransactions:"ഇതുവരെ ഇടപാടുകളൊന്നുമില്ല.", farmerBenefits:"കർഷക ആനുകൂല്യങ്ങൾ", governmentSchemesSubsidies:"സർക്കാർ പദ്ധതികളും സബ്സിഡികളും",
    governmentSchemesDescription:"കർഷകർക്ക് ലഭ്യമായേക്കാവുന്ന പദ്ധതികളും ആനുകൂല്യങ്ങളും പരിശോധിക്കുക."
  },
  "mr-IN": {
    farmerPortalTitle:"शेतकरी पोर्टल", newTransaction:"नवीन व्यवहार", helpSupport:"मदत आणि सहाय्य",
    transparentTransactions:"पारदर्शक व्यवहार", farmerPortalLabel:"शेतकरी पोर्टल",
    farmerDashboard:"शेतकरी डॅशबोर्ड", farmerDashboardDescription:"तुमचे व्यवहार, करार आणि देयके एकाच ठिकाणी व्यवस्थापित करा.",
    createNewTransaction:"नवीन व्यवहार तयार करा", totalTransactions:"एकूण व्यवहार", totalTransactionValue:"एकूण व्यवहार मूल्य",
    reviewManageAgreements:"तुमच्या करारांचे पुनरावलोकन करा आणि व्यवस्थापन करा", manageAgreements:"करार व्यवस्थापित करा",
    monitorPaymentRecords:"तुमच्या देयकांच्या नोंदी तपासा", viewPayments:"देयके पहा", quickActions:"जलद कृती",
    quickActionsDescription:"तुम्ही वारंवार वापरत असलेल्या सुविधा उघडा.", reviewAgreements:"करार तपासा", trackPayments:"देयकांचा मागोवा घ्या",
    viewTransactionHistory:"व्यवहार इतिहास पहा", explorePriceInsights:"किंमत माहिती पहा", getHelpSupport:"मदत मिळवा",
    exploreGovernmentSchemes:"सरकारी योजना पहा", recentTransactions:"अलीकडील व्यवहार",
    recentTransactionsDescription:"तुमच्या अलीकडील व्यवहारांचा थोडक्यात आढावा.", viewAll:"सर्व पहा", transactionId:"व्यवहार ID",
    noTransactions:"अद्याप कोणतेही व्यवहार नाहीत.", farmerBenefits:"शेतकरी लाभ", governmentSchemesSubsidies:"सरकारी योजना आणि अनुदाने",
    governmentSchemesDescription:"शेतकऱ्यांसाठी उपलब्ध असू शकणाऱ्या योजना आणि लाभ पहा."
  },
  "bn-IN": {
    farmerPortalTitle:"কৃষক পোর্টাল", newTransaction:"নতুন লেনদেন", helpSupport:"সহায়তা ও সমর্থন",
    transparentTransactions:"স্বচ্ছ লেনদেন", farmerPortalLabel:"কৃষক পোর্টাল",
    farmerDashboard:"কৃষক ড্যাশবোর্ড", farmerDashboardDescription:"আপনার লেনদেন, চুক্তি এবং পেমেন্ট এক জায়গায় পরিচালনা করুন।",
    createNewTransaction:"নতুন লেনদেন তৈরি করুন", totalTransactions:"মোট লেনদেন", totalTransactionValue:"মোট লেনদেনের মূল্য",
    reviewManageAgreements:"আপনার চুক্তিগুলি পর্যালোচনা ও পরিচালনা করুন", manageAgreements:"চুক্তি পরিচালনা করুন",
    monitorPaymentRecords:"আপনার পেমেন্টের রেকর্ড দেখুন", viewPayments:"পেমেন্ট দেখুন", quickActions:"দ্রুত কাজ",
    quickActionsDescription:"আপনি প্রায়ই ব্যবহার করেন এমন বৈশিষ্ট্যগুলি খুলুন।", reviewAgreements:"চুক্তি পর্যালোচনা করুন", trackPayments:"পেমেন্ট ট্র্যাক করুন",
    viewTransactionHistory:"লেনদেনের ইতিহাস দেখুন", explorePriceInsights:"দামের তথ্য দেখুন", getHelpSupport:"সহায়তা নিন",
    exploreGovernmentSchemes:"সরকারি প্রকল্প দেখুন", recentTransactions:"সাম্প্রতিক লেনদেন",
    recentTransactionsDescription:"আপনার সাম্প্রতিক লেনদেনের সংক্ষিপ্ত বিবরণ।", viewAll:"সব দেখুন", transactionId:"লেনদেন ID",
    noTransactions:"এখনও কোনো লেনদেন নেই।", farmerBenefits:"কৃষকের সুবিধা", governmentSchemesSubsidies:"সরকারি প্রকল্প ও ভর্তুকি",
    governmentSchemesDescription:"কৃষকদের জন্য উপলব্ধ প্রকল্প ও সুবিধাগুলি দেখুন।"
  }
};

Object.keys(farmerDashboardTranslations).forEach(language => {
    Object.assign(translations[language], farmerDashboardTranslations[language]);
});

/* ============================================================
   2. LANGUAGE MANAGEMENT
   ============================================================ */

const LANGUAGE_STORAGE_KEY = "agriledger_language";

const languageNames = {
    "en-IN": "English",
    "kn-IN": "Kannada",
    "hi-IN": "Hindi",
    "ta-IN": "Tamil",
    "te-IN": "Telugu",
    "ml-IN": "Malayalam",
    "mr-IN": "Marathi",
    "bn-IN": "Bengali"
};

function getCurrentLanguage() {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en-IN";
}



function getTranslation(key, language) {
    const selectedLanguage = language || getCurrentLanguage();

    return (
        loginTranslations[selectedLanguage]?.[key] ||
        pageTranslations[selectedLanguage]?.[key] ||
        portalTranslations[selectedLanguage]?.[key] ||
        translations[selectedLanguage]?.[key] ||
        governmentSchemeExtraTranslations[selectedLanguage]?.[key] ||
        loginTranslations["en-IN"]?.[key] ||
        pageTranslations["en-IN"]?.[key] ||
        portalTranslations["en-IN"]?.[key] ||
        translations["en-IN"]?.[key] ||
        governmentSchemeExtraTranslations["en-IN"]?.[key] ||
        key
    );
}



function setAgriLedgerTranslatedText(element, translated) {
    const textTarget = element.querySelector("[data-i18n-text]");
    if (textTarget) {
        textTarget.textContent = translated;
        return;
    }

    const directTextNode = Array.from(element.childNodes).find(
        node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
    );

    if (directTextNode) {
        directTextNode.textContent = translated;
        return;
    }

    if (element.children.length === 0) {
        element.textContent = translated;
        return;
    }

    let generated = element.querySelector(":scope > [data-i18n-generated-text]");
    if (!generated) {
        generated = document.createElement("span");
        generated.setAttribute("data-i18n-generated-text", "true");
        element.appendChild(generated);
    }
    generated.textContent = translated;
}

function applyWebsiteLanguage(language) {

    if (!translations[language]) {
        language = "en-IN";
    }

    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);

    document.documentElement.lang = language;

    // Translate normal website content.
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");
        const translated = getTranslation(key, language);

        if (translated !== key) {
            setAgriLedgerTranslatedText(element, translated);
        }

    });

    // Translate placeholders.
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.getAttribute("data-i18n-placeholder");
        const translated = getTranslation(key, language);

        if (translated !== key) {
            element.placeholder = translated;
        }

    });

    document.querySelectorAll("[data-i18n-value]").forEach(element => {
        const key = element.getAttribute("data-i18n-value");
        const translated = getTranslation(key, language);
        if (translated !== key) element.value = translated;
    });

    // Translate title attributes.
    document.querySelectorAll("[data-i18n-title]").forEach(element => {

        const key = element.getAttribute("data-i18n-title");
        const translated = getTranslation(key, language);

        if (translated !== key) {
            element.title = translated;
        }

    });

    // Translate accessibility labels and image alternative text when tagged.
    document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
        const key = element.getAttribute("data-i18n-aria-label");
        const translated = getTranslation(key, language);
        if (translated !== key) element.setAttribute("aria-label", translated);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(element => {
        const key = element.getAttribute("data-i18n-alt");
        const translated = getTranslation(key, language);
        if (translated !== key) element.setAttribute("alt", translated);
    });

    // Translate Government Schemes page.
    applyGovernmentSchemeLanguage(language);

    // Keep all language selectors synchronized.
    document.querySelectorAll(
        "#globalLanguage, #languageSelect, #language-selector, [data-language-selector]"
    ).forEach(selector => {

        if (selector.tagName === "SELECT") {
            selector.value = language;
        }

    });

    document.dispatchEvent(
        new CustomEvent("agriledger:languageChanged", {
            detail: { language }
        })
    );
}

window.applyWebsiteLanguage = applyWebsiteLanguage;
window.getAgriLedgerTranslation = getTranslation;
window.translateAgriLedgerElement = function (root = document) {
    const language = getCurrentLanguage();
    const nodes = [];
    if (root.matches?.("[data-i18n]")) nodes.push(root);
    root.querySelectorAll?.("[data-i18n]").forEach(node => nodes.push(node));
    nodes.forEach(element => {
        const key = element.getAttribute("data-i18n");
        const translated = getTranslation(key, language);
        if (translated !== key) setAgriLedgerTranslatedText(element, translated);
    });
};


/* ============================================================
   3. GOVERNMENT SCHEMES TRANSLATION
   ============================================================ */

function applyGovernmentSchemeLanguage(language) {

    const selectedLanguage = translations[language] ? language : "en-IN";

    document.querySelectorAll("[data-scheme-i18n]").forEach(element => {

        const key = element.getAttribute("data-scheme-i18n");

        const translated = getTranslation(key, selectedLanguage);
        if (translated !== key) setAgriLedgerTranslatedText(element, translated);

    });

    document.querySelectorAll(
        "[data-scheme-i18n-placeholder]"
    ).forEach(element => {

        const key = element.getAttribute(
            "data-scheme-i18n-placeholder"
        );

        const translated = getTranslation(key, selectedLanguage);
        if (translated !== key) element.placeholder = translated;

    });

    document.querySelectorAll(
        "[data-scheme-i18n-title]"
    ).forEach(element => {

        const key = element.getAttribute(
            "data-scheme-i18n-title"
        );

        const translated = getTranslation(key, selectedLanguage);
        if (translated !== key) element.title = translated;

    });

}

window.applyGovernmentSchemeLanguage =
    applyGovernmentSchemeLanguage;

window.getGovernmentSchemeTranslation = function (key) {
    return getTranslation(key);
};


/* ============================================================
   4. LANGUAGE SELECTOR INITIALIZATION
   ============================================================ */

function initializeLanguageSelector() {

    const selectors = document.querySelectorAll(
        "#globalLanguage, #languageSelect, #language-selector, [data-language-selector]"
    );

    const savedLanguage = getCurrentLanguage();

    selectors.forEach(selector => {

        if (selector.tagName === "SELECT") {
            selector.value = savedLanguage;
        }

        if (selector.dataset.languageBound === "true") {
            return;
        }

        selector.dataset.languageBound = "true";

        selector.addEventListener("change", function () {

            let language = this.value;

            // Support language names as well as language codes.
            const nameToCode = {
                English: "en-IN",
                Kannada: "kn-IN",
                Hindi: "hi-IN",
                Tamil: "ta-IN",
                Telugu: "te-IN",
                Malayalam: "ml-IN",
                Marathi: "mr-IN",
                Bengali: "bn-IN"
            };

            language = nameToCode[language] || language;

            applyWebsiteLanguage(language);

        });

    });

    applyWebsiteLanguage(savedLanguage);
}


/* ============================================================
   5. REGISTRATION ROLE SELECTION
   ============================================================ */

function initializeRegistrationRole() {

    const roleSelect = document.querySelector(
        "#role, #userRole, #registerRole, select[name='role']"
    );

    const farmerFields = document.querySelectorAll(
        ".farmer-fields, #farmerFields, [data-role-fields='farmer']"
    );

    const buyerFields = document.querySelectorAll(
        ".buyer-fields, #buyerFields, [data-role-fields='buyer']"
    );

    if (!roleSelect) return;

    function updateRoleFields() {

        const role = roleSelect.value.toLowerCase();

        farmerFields.forEach(element => {
            element.style.display =
                role === "farmer" ? "" : "none";
        });

        buyerFields.forEach(element => {
            element.style.display =
                role === "buyer" ? "" : "none";
        });

    }

    roleSelect.addEventListener("change", updateRoleFields);

    updateRoleFields();
}


/* ============================================================
   6. LOGIN ROLE SELECTION
   ============================================================ */

function initializeLoginRole() {

    const roleSelect = document.querySelector(
        "#loginRole, #role, select[name='role']"
    );

    if (!roleSelect) return;

    const params = new URLSearchParams(window.location.search);

    const requestedRole =
        params.get("role") || params.get("portal");

    if (requestedRole) {

        const role = requestedRole.toLowerCase();

        const matchingOption = Array.from(
            roleSelect.options
        ).find(option => option.value.toLowerCase() === role);

        if (matchingOption) {
            roleSelect.value = matchingOption.value;
        }

    }
}


/* ============================================================
   7. TRANSACTION AMOUNT CALCULATOR
   ============================================================ */

function initializeTransactionCalculator() {

    const quantityInput = document.querySelector(
        "#quantity, #transactionQuantity, input[name='quantity']"
    );

    const priceInput = document.querySelector(
        "#price, #pricePerUnit, #unitPrice, input[name='price']"
    );

    const deductionsInput = document.querySelector(
        "#deductions, #totalDeductions, input[name='deductions']"
    );

    const totalOutput = document.querySelector(
        "#totalAmount, #total_amount, [data-total-amount]"
    );

    const finalOutput = document.querySelector(
        "#finalAmount, #final_amount, [data-final-amount]"
    );

    if (!quantityInput || !priceInput) return;

    function calculateTransaction() {

        const quantity =
            parseFloat(quantityInput.value) || 0;

        const price =
            parseFloat(priceInput.value) || 0;

        const deductions =
            parseFloat(deductionsInput?.value) || 0;

        const total = quantity * price;

        const finalAmount = Math.max(
            0,
            total - deductions
        );

        if (totalOutput) {
            if ("value" in totalOutput) {
                totalOutput.value = total.toFixed(2);
            } else {
                totalOutput.textContent = total.toFixed(2);
            }
        }

        if (finalOutput) {
            if ("value" in finalOutput) {
                finalOutput.value = finalAmount.toFixed(2);
            } else {
                finalOutput.textContent =
                    finalAmount.toFixed(2);
            }
        }

    }

    [
        quantityInput,
        priceInput,
        deductionsInput
    ].filter(Boolean).forEach(input => {

        input.addEventListener("input", calculateTransaction);

    });

    calculateTransaction();
}


/* ============================================================
   8. SEARCH AND FILTER GOVERNMENT SCHEMES
   ============================================================ */

function initializeSchemeFilters() {

    const filterForm = document.querySelector(
        ".schemes-filter-form"
    );

    const searchInput = document.querySelector(
        ".search-input-wrapper input, .schemes-search-input"
    );

    if (filterForm) {

        filterForm.querySelectorAll("select").forEach(select => {

            select.addEventListener("change", function () {
                console.log(
                    "Selected scheme filter:",
                    this.name,
                    this.value
                );
            });

        });

        filterForm.addEventListener("submit", function () {
            console.log("Applying Government Schemes filters.");
        });

        const resetButton = filterForm.querySelector(
            "[type='reset'], .reset-button"
        );

        if (resetButton) {
            resetButton.addEventListener("click", function () {

                setTimeout(() => {
                    if (searchInput) {
                        searchInput.value = "";
                    }
                }, 0);

            });
        }
    }

    if (searchInput && filterForm) {

        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                event.preventDefault();
                filterForm.requestSubmit();
            }

        });

    }
}


/* ============================================================
   9. SARVAM AI TEXT TO SPEECH
   ============================================================ */

let currentAudio = null;
let currentAudioUrl = null;
let currentVoiceButton = null;

function resetVoiceButton(button) {

    if (!button) return;

    button.disabled = false;

    button.textContent =
        getTranslation("listen");

}

function stopAgriLedgerAudio() {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

    if (currentAudioUrl) {
        URL.revokeObjectURL(currentAudioUrl);
        currentAudioUrl = null;
    }

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

    resetVoiceButton(currentVoiceButton);

    currentVoiceButton = null;
}

window.stopAgriLedgerAudio = stopAgriLedgerAudio;


/* ============================================================
   10. BROWSER SPEECH FALLBACK
   ============================================================ */

function browserSpeech(text, language, button) {

    if (!("speechSynthesis" in window)) {

        alert("Voice playback is not supported by this browser.");

        resetVoiceButton(button);
        currentVoiceButton = null;

        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = language;
    utterance.rate = 0.9;
    utterance.pitch = 1;

    utterance.onstart = function () {

        button.disabled = false;
        button.textContent = "⏸ Playing...";

    };

    utterance.onend = function () {

        resetVoiceButton(button);
        currentVoiceButton = null;

    };

    utterance.onerror = function () {

        resetVoiceButton(button);
        currentVoiceButton = null;

    };

    window.speechSynthesis.speak(utterance);
}


/* ============================================================
   11. PLAY AUDIO RESPONSE
   ============================================================ */

async function playAudioBlob(blob, button) {

    if (!blob || blob.size === 0) {
        throw new Error("Empty audio response.");
    }

    currentAudioUrl = URL.createObjectURL(blob);

    const audio = new Audio(currentAudioUrl);

    currentAudio = audio;

    audio.onended = function () {

        if (currentAudioUrl) {
            URL.revokeObjectURL(currentAudioUrl);
            currentAudioUrl = null;
        }

        resetVoiceButton(button);

        currentAudio = null;
        currentVoiceButton = null;

    };

    audio.onerror = function () {

        if (currentAudioUrl) {
            URL.revokeObjectURL(currentAudioUrl);
            currentAudioUrl = null;
        }

        resetVoiceButton(button);

        currentAudio = null;
        currentVoiceButton = null;

    };

    await audio.play();

    button.disabled = false;
    button.textContent = "⏸ Playing...";
}


/* ============================================================
   12. SARVAM AI SPEAK API
   ============================================================ */

async function playSarvamAudio(text, language, button) {

    const response = await fetch("/api/ai/speak", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        credentials: "same-origin",

        body: JSON.stringify({
            text: text,
            language: language
        })

    });

    if (!response.ok) {
        throw new Error(
            "Sarvam API returned status " + response.status
        );
    }

    const contentType =
        response.headers.get("content-type") || "";

    // Direct audio response.
    if (
        contentType.includes("audio/") ||
        contentType.includes("application/octet-stream")
    ) {

        const blob = await response.blob();

        await playAudioBlob(blob, button);

        return;
    }

    // JSON audio response.
    const data = await response.json();

    if (data.success === false) {
        throw new Error(
            data.error || "Voice generation failed."
        );
    }

    if (data.audio_url || data.url) {

        const audio = new Audio(
            data.audio_url || data.url
        );

        currentAudio = audio;

        audio.onended = function () {

            resetVoiceButton(button);

            currentAudio = null;
            currentVoiceButton = null;

        };

        audio.onerror = function () {

            resetVoiceButton(button);

            currentAudio = null;
            currentVoiceButton = null;

        };

        await audio.play();

        button.disabled = false;
        button.textContent = "⏸ Playing...";

        return;
    }

    const base64 = data.audio_base64 || data.audio;

    if (base64) {

        const cleaned = base64.replace(
            /^data:audio\/[^;]+;base64,/,
            ""
        );

        const binary = atob(cleaned);

        const bytes = new Uint8Array(binary.length);

        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }

        const blob = new Blob(
            [bytes],
            {
                type: data.content_type || "audio/wav"
            }
        );

        await playAudioBlob(blob, button);

        return;
    }

    throw new Error(
        "Unsupported audio response from Sarvam API."
    );
}


/* ============================================================
   13. UNIVERSAL LISTEN FUNCTION
   ============================================================ */

async function speakText(text, button) {

    if (!text || !text.trim()) {
        alert("No text is available to read.");
        return;
    }

    stopAgriLedgerAudio();

    const language = getCurrentLanguage();

    currentVoiceButton = button;

    if (button) {
        button.disabled = true;
        button.textContent = "Preparing audio...";
    }

    try {

        if (!button) {
            button = document.createElement("button");
        }

        await playSarvamAudio(
            text,
            language,
            button
        );

    } catch (error) {

        console.error("Sarvam voice error:", error);

        if (button) {
            button.disabled = false;
            button.textContent = "Using browser voice...";
        }

        browserSpeech(
            text,
            language,
            button
        );

    }
}

window.speakAgriLedgerText = speakText;


/* ============================================================
   14. GOVERNMENT SCHEME LISTEN BUTTONS
   ============================================================ */

function initializeSchemeVoice() {

    document.querySelectorAll(
        ".listen-button, [data-scheme-listen]"
    ).forEach(button => {

        if (button.dataset.voiceBound === "true") {
            return;
        }

        button.dataset.voiceBound = "true";

        button.addEventListener("click", function () {

            if (
                currentVoiceButton === button &&
                (
                    currentAudio ||
                    window.speechSynthesis?.speaking
                )
            ) {
                stopAgriLedgerAudio();
                return;
            }

            const name =
                button.dataset.schemeName || "";

            const description =
                button.dataset.schemeDescription || "";

            const explicitText =
                button.dataset.speakText || "";

            const text =
                explicitText ||
                [name, description].filter(Boolean).join(". ");

            if (!text.trim()) {
                alert("Scheme information is unavailable.");
                return;
            }

            speakText(text, button);

        });

    });

}


/* ============================================================
   15. GENERAL WEBSITE LISTEN BUTTONS
   ============================================================ */

function initializeGeneralVoice() {

    document.querySelectorAll("[data-speak]").forEach(button => {

        if (button.dataset.generalVoiceBound === "true") {
            return;
        }

        button.dataset.generalVoiceBound = "true";

        button.addEventListener("click", function () {

            const speakValue = button.dataset.speak || "";

            let text = button.dataset.speakText || "";

            // Check whether data-speak contains a CSS selector.
            if (!text && speakValue.startsWith("#")) {

                try {
                    const target = document.querySelector(speakValue);

                    if (target) {
                        text = target.innerText || target.textContent || "";
                    }
                } catch (error) {
                    console.warn("Invalid speech target:", error);
                }
            }

            // Otherwise, treat data-speak as the actual sentence.
            if (!text && speakValue) {
                text = speakValue;
            }

            if (!text.trim()) {
                alert("No transaction information is available to read.");
                return;
            }

            speakText(text, button);

        });

    });


}


/* ============================================================
   16. SARVAM AI SPEECH TO TEXT
   ============================================================ */

let mediaRecorder = null;
let recordedChunks = [];
let microphoneStream = null;

async function startVoiceRecording() {

    if (!navigator.mediaDevices?.getUserMedia) {
        alert("Microphone access is unavailable. Please use localhost or HTTPS.");
        return;
    }

    try {
        if (!window.MediaRecorder) {
            throw new Error("Audio recording is not supported by this browser.");
        }

        microphoneStream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });

        recordedChunks = [];

        const supportedMimeTypes = [
            "audio/webm;codecs=opus",
            "audio/webm",
            "audio/ogg;codecs=opus",
            "audio/mp4"
        ];

        let mimeType = "";

        if (MediaRecorder.isTypeSupported) {
            mimeType = supportedMimeTypes.find(type =>
                MediaRecorder.isTypeSupported(type)
            ) || "";
        }

        mediaRecorder = mimeType
            ? new MediaRecorder(microphoneStream, { mimeType })
            : new MediaRecorder(microphoneStream);

        mediaRecorder.ondataavailable = function (event) {
            if (event.data && event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };

        mediaRecorder.onstop = async function () {
            const actualMimeType =
                mediaRecorder?.mimeType || mimeType || "audio/webm";

            const audioBlob = new Blob(recordedChunks, {
                type: actualMimeType
            });

            if (microphoneStream) {
                microphoneStream.getTracks().forEach(track => track.stop());
                microphoneStream = null;
            }

            await transcribeRecordedAudio(audioBlob);
        };

        mediaRecorder.start();

        const startButton = document.querySelector(
            "#recordButton, #startRecording, #recordVoice, [data-start-recording]"
        );

        const stopButton = document.querySelector(
            "#stopRecording, [data-stop-recording]"
        );

        if (startButton) startButton.disabled = true;
        if (stopButton) stopButton.disabled = false;

        const status = document.querySelector("#recordStatus");
        if (status) {
            status.textContent = "Recording... Speak now, then press Stop Recording.";
        }

    } catch (error) {
        console.error("Microphone error:", error);

        if (microphoneStream) {
            microphoneStream.getTracks().forEach(track => track.stop());
            microphoneStream = null;
        }

        const status = document.querySelector("#recordStatus");
        if (status) status.textContent = error.message;

        alert("Unable to start recording: " + error.message);
    }
}

function stopVoiceRecording() {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
    }

    const startButton = document.querySelector(
        "#recordButton, #startRecording, #recordVoice, [data-start-recording]"
    );

    const stopButton = document.querySelector(
        "#stopRecording, [data-stop-recording]"
    );

    if (startButton) startButton.disabled = false;
    if (stopButton) stopButton.disabled = true;

    const status = document.querySelector("#recordStatus");
    if (status) {
        status.textContent = "Recording stopped. Transcribing audio...";
    }
}


async function transcribeRecordedAudio(audioBlob) {
    const language = getCurrentLanguage();
    const formData = new FormData();

    formData.append("audio", audioBlob, "recording.webm");
    formData.append("language", language);

    const transcriptOutput = document.querySelector(
        "#transcript, #voiceTranscript, [data-transcript]"
    );

    const status = document.querySelector("#recordStatus");

    if (transcriptOutput) {
        transcriptOutput.value = "Transcribing audio...";
    }

    if (status) {
        status.textContent = "Sending audio to Sarvam AI...";
    }

    try {
        const response = await fetch("/api/ai/transcribe", {
            method: "POST",
            credentials: "same-origin",
            body: formData
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(
                data.error || data.message || "Transcription failed."
            );
        }

        const transcript = data.transcript || data.text || "";

        if (!transcript.trim()) {
            throw new Error("No transcript was returned.");
        }

        if (transcriptOutput) {
            transcriptOutput.value = transcript;
        }

        window.lastAgriLedgerTranscript = transcript;

        if (status) {
            status.textContent = "Transcription completed successfully.";
        }

    } catch (error) {
        console.error("Speech-to-text error:", error);

        if (transcriptOutput) {
            transcriptOutput.value = "";
        }

        if (status) {
            status.textContent = "Transcription failed: " + error.message;
        }

        alert("Voice transcription failed: " + error.message);
    }
}
    



window.startVoiceRecording = startVoiceRecording;
window.stopVoiceRecording = stopVoiceRecording;


/* ============================================================
   17. RECORDING BUTTON EVENTS
   ============================================================ */

function initializeRecordingButtons() {

      const startButtons = document.querySelectorAll(
        "#recordButton, #startRecording, #recordVoice, [data-start-recording]"
    );

    const stopButtons = document.querySelectorAll(
        "#stopRecording, [data-stop-recording]"
    );

    startButtons.forEach(button => {
        if (button.dataset.recordBound === "true") return;

        button.dataset.recordBound = "true";
        button.addEventListener("click", startVoiceRecording);
    });

    stopButtons.forEach(button => {
        if (button.dataset.recordBound === "true") return;

        button.dataset.recordBound = "true";
        button.disabled = true;
        button.addEventListener("click", stopVoiceRecording);
    });
}


function initializeTranscriptForm() {

    const useTranscriptButton = document.querySelector(
        "#fillTransaction, #useTranscript, #useTranscriptButton, [data-use-transcript]"
    );

    if (!useTranscriptButton || useTranscriptButton.dataset.transcriptBound === "true") return;
    useTranscriptButton.dataset.transcriptBound = "true";

    useTranscriptButton.addEventListener("click", function () {

        const transcript =
            window.lastAgriLedgerTranscript || "";

        if (!transcript.trim()) {
            alert("Please record your voice first.");
            return;
        }

        // Preserve the existing prototype behavior:
        // Copy the transcript into the crop field.
        const cropInput = document.querySelector(
            "#cropName, #crop, input[name='crop_name']"
        );

        if (cropInput) {
            cropInput.value = transcript;

            cropInput.dispatchEvent(
                new Event("input", { bubbles: true })
            );

            cropInput.dispatchEvent(
                new Event("change", { bubbles: true })
            );
        }

    });

}


/* ============================================================
   19. INITIALIZE ALL AGRILEDGER FEATURES
   ============================================================ */

function initializeAgriLedger() {

    initializeLanguageSelector();

    initializeRegistrationRole();

    initializeLoginRole();

    initializeTransactionCalculator();

    initializeSchemeFilters();

    // Government scheme listen buttons are handled by government_schemes.js.
    // Keep the general website voice buttons here to avoid duplicate listeners.
    initializeGeneralVoice();

    initializeRecordingButtons();

    initializeTranscriptForm();

    console.log(
        "AgriLedger initialized successfully."
    );

}


/* ============================================================
   20. PAGE LOAD
   ============================================================ */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeAgriLedger
    );

} else {

    initializeAgriLedger();

}


/* =========================================================
   AGRILEDGER - TRANSACTION PRICE CALCULATOR FIX
   ========================================================= */

(function initializeTransactionCalculator() {

    function setupCalculator() {

        const quantityInput = document.getElementById("txQuantity");
        const priceInput = document.getElementById("txPrice");
        const deductionsInput = document.getElementById("txDeductions");
        const totalDisplay = document.getElementById("txTotal");

        if (
            !quantityInput ||
            !priceInput ||
            !deductionsInput ||
            !totalDisplay
        ) {
            return;
        }

        function calculateTotal() {

            const quantity = parseFloat(quantityInput.value) || 0;
            const price = parseFloat(priceInput.value) || 0;
            const deductions = parseFloat(deductionsInput.value) || 0;

            if (quantity < 0 || price < 0 || deductions < 0) {
                totalDisplay.textContent = "Invalid amount";
                return;
            }

            const grossAmount = quantity * price;
            const finalAmount = grossAmount - deductions;

            if (finalAmount < 0) {
                totalDisplay.textContent = "Invalid deductions";
                return;
            }

            totalDisplay.textContent = finalAmount.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }

        quantityInput.addEventListener("input", calculateTotal);
        priceInput.addEventListener("input", calculateTotal);
        deductionsInput.addEventListener("input", calculateTotal);

        // Calculate immediately when the page opens.
        calculateTotal();
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            setupCalculator
        );
    } else {
        setupCalculator();
    }

})();



/* ============================================================
   21. GLOBAL AGRILEDGER VOICE ASSISTANT
   Translates page content into the selected language, then reads
   it using the AgriLedger Sarvam AI speak endpoint.
   ============================================================ */

(function initializeGlobalVoiceAssistant() {
    "use strict";

    let runId = 0;
    let controller = null;
    let audio = null;
    let audioUrl = null;
    let paused = false;
    let resumeWaiters = [];

    const MAX_TTS_CHARS = 1500;
    const languageLabels = {
        "en-IN": "English", "kn-IN": "Kannada", "hi-IN": "Hindi",
        "ta-IN": "Tamil", "te-IN": "Telugu", "ml-IN": "Malayalam",
        "mr-IN": "Marathi", "bn-IN": "Bengali"
    };

    function getElements() {
        return {
            panel: document.getElementById("agriVoicePanel"),
            toggle: document.getElementById("agriVoiceToggle"),
            close: document.getElementById("agriVoiceClose"),
            language: document.getElementById("agriVoiceLanguage"),
            read: document.getElementById("agriVoiceRead"),
            pause: document.getElementById("agriVoicePause"),
            resume: document.getElementById("agriVoiceResume"),
            stop: document.getElementById("agriVoiceStop"),
            status: document.getElementById("agriVoiceStatus")
        };
    }

    function getSelectedLanguage() {
        const select = getElements().language;
        const value = select?.value || getCurrentLanguage();
        return languageLabels[value] ? value : "en-IN";
    }

    function status(message) {
        const node = getElements().status;
        if (node) node.textContent = message;
    }

    function splitIntoChunks(value, limit) {
        const text = String(value || "").replace(/\s+/g, " ").trim();
        if (!text) return [];
        const sentences = text.match(/[^.!?।]+[.!?।]?/g) || [text];
        const chunks = [];
        let current = "";

        for (let sentence of sentences) {
            sentence = sentence.trim();
            while (sentence.length > limit) {
                if (current) chunks.push(current);
                current = "";
                let cut = sentence.lastIndexOf(" ", limit);
                if (cut < limit * 0.5) cut = limit;
                chunks.push(sentence.slice(0, cut).trim());
                sentence = sentence.slice(cut).trim();
            }
            if (!sentence) continue;
            if ((current + " " + sentence).trim().length > limit) {
                if (current) chunks.push(current);
                current = sentence;
            } else {
                current = (current + " " + sentence).trim();
            }
        }
        if (current) chunks.push(current);
        return chunks;
    }

    function getVisiblePageText() {
        const source = document.querySelector("#main-content") ||
            document.querySelector("main") || document.body;
        if (!source) return "";

        const copy = source.cloneNode(true);
        copy.querySelectorAll(
            "script,style,noscript,button,input,select,textarea,option," +
            "audio,video,iframe,[aria-hidden='true'],[hidden],.no-voice," +
            "[data-no-voice],#agriVoiceWidget"
        ).forEach(node => node.remove());

        copy.querySelectorAll("*").forEach(node => {
            const css = getComputedStyle(node);
            if (css.display === "none" || css.visibility === "hidden") node.remove();
        });

        return (copy.innerText || copy.textContent || "")
            .replace(/\s+/g, " ")
            .replace(/\s+([.,!?;:])/g, "$1")
            .trim();
    }

    async function getSpeechBlob(text, language, activeRun) {
        if (activeRun !== runId) throw new Error("Reading stopped.");

        const response = await fetch("/api/ai/speak", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin",
            signal: controller?.signal,
            body: JSON.stringify({ text: text, language: language })
        });

        if (!response.ok) {
            let message = "Speech request failed (HTTP " + response.status + ").";
            try {
                const data = await response.json();
                if (data?.error) message = data.error;
            } catch (_) {}
            throw new Error(message);
        }

        const type = response.headers.get("content-type") || "";
        if (!type.includes("audio/") && !type.includes("octet-stream")) {
            let message = "Speech service did not return audio.";
            try {
                const data = await response.json();
                if (data?.error) message = data.error;
            } catch (_) {}
            throw new Error(message);
        }
        return response.blob();
    }

    function waitIfPaused(activeRun) {
        if (!paused) return Promise.resolve();
        return new Promise((resolve, reject) => {
            resumeWaiters.push({ resolve, reject, activeRun });
        });
    }

    function playBlob(blob, activeRun) {
        return new Promise((resolve, reject) => {
            if (activeRun !== runId) return reject(new Error("Reading stopped."));
            if (!blob?.size) return reject(new Error("Sarvam returned empty audio."));

            audioUrl = URL.createObjectURL(blob);
            audio = new Audio(audioUrl);
            let done = false;

            const cleanup = () => {
                if (done) return;
                done = true;
                if (audio) {
                    audio.onended = null;
                    audio.onerror = null;
                }
                audio = null;
                if (audioUrl) URL.revokeObjectURL(audioUrl);
                audioUrl = null;
            };

            audio.onended = () => { cleanup(); resolve(); };
            audio.onerror = () => {
                cleanup();
                reject(new Error("Audio playback failed. Please try again."));
            };
            audio.play().catch(error => { cleanup(); reject(error); });
        });
    }

    async function readPage() {
        stopReading(false);
        const activeRun = ++runId;
        controller = new AbortController();
        paused = false;

        const language = getSelectedLanguage();
        const languageName = languageLabels[language];
        const text = getVisiblePageText();
        const chunks = splitIntoChunks(text, MAX_TTS_CHARS);

        if (!chunks.length) {
            status("No readable page text was found.");
            return;
        }

        const readButton = getElements().read;
        if (readButton) {
            readButton.disabled = true;
            readButton.textContent = "Preparing audio...";
        }

        try {
            /*
             * The website language manager has already translated visible
             * page elements. Do not translate the translated page again
             * while claiming its source language is English. Send the
             * currently displayed text to Sarvam TTS using the same locale.
             */
            for (let i = 0; i < chunks.length; i++) {
                if (activeRun !== runId) return;
                await waitIfPaused(activeRun);
                if (activeRun !== runId) return;

                status("Generating " + languageName + " audio (" +
                    (i + 1) + "/" + chunks.length + ")...");

                const blob = await getSpeechBlob(chunks[i], language, activeRun);
                if (activeRun !== runId) return;
                await waitIfPaused(activeRun);
                if (activeRun !== runId) return;

                status("Speaking in " + languageName + " (" +
                    (i + 1) + "/" + chunks.length + ")...");
                await playBlob(blob, activeRun);
            }
            if (activeRun === runId) status("Finished reading in " + languageName + ".");
        } catch (error) {
            if (activeRun !== runId || error.name === "AbortError") return;
            console.error("AgriLedger voice assistant error:", error);
            status("Unable to read page: " + error.message);
        } finally {
            if (activeRun === runId) {
                controller = null;
                paused = false;
                if (readButton) {
                    readButton.disabled = false;
                    readButton.textContent = "▶ Read This Page";
                }
            }
        }
    }

    function pauseReading() {
        if (!controller && !audio) {
            status("Press Read This Page first.");
            return;
        }
        paused = true;
        if (audio && !audio.paused) audio.pause();
        status("Paused. Press Resume to continue.");
    }

    function resumeReading() {
        if (!paused) {
            status("The reading is not paused.");
            return;
        }
        paused = false;
        if (audio?.paused) {
            audio.play().catch(error => {
                console.error(error);
                status("Could not resume audio. Please press Read This Page.");
            });
        }
        const waiting = resumeWaiters;
        resumeWaiters = [];
        waiting.forEach(item => {
            if (item.activeRun === runId) item.resolve();
            else item.reject(new Error("Reading stopped."));
        });
        status("Resuming reading...");
    }

    function stopReading(showStatus = true) {
        runId++;
        paused = false;
        if (controller) {
            controller.abort();
            controller = null;
        }
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
            audio.onended = null;
            audio.onerror = null;
            audio = null;
        }
        if (audioUrl) {
            URL.revokeObjectURL(audioUrl);
            audioUrl = null;
        }
        const waiting = resumeWaiters;
        resumeWaiters = [];
        waiting.forEach(item => item.reject(new Error("Reading stopped.")));

        const readButton = getElements().read;
        if (readButton) {
            readButton.disabled = false;
            readButton.textContent = "▶ Read This Page";
        }
        if (showStatus) status("Reading stopped.");
    }

    function setVoiceLanguage(language) {
        const select = getElements().language;
        if (!select) return;
        const safeLanguage = languageLabels[language] ? language : "en-IN";
        select.value = safeLanguage;
        stopReading(false);
        status("Voice language: " + languageLabels[safeLanguage] + ".");
    }

    function showPanel(show) {
        const controls = getElements();
        if (!controls.panel || !controls.toggle) return;
        controls.panel.hidden = !show;
        controls.panel.setAttribute("aria-hidden", String(!show));
        controls.toggle.setAttribute("aria-expanded", String(show));
    }

    function initialize() {
        const controls = getElements();
        if (!controls.panel || controls.panel.dataset.voiceBound === "true") return;
        controls.panel.dataset.voiceBound = "true";

        const savedLanguage = typeof getCurrentLanguage === "function"
            ? getCurrentLanguage() : "en-IN";
        if (controls.language && languageLabels[savedLanguage]) {
            controls.language.value = savedLanguage;
        }

        controls.toggle?.addEventListener("click", () => showPanel(controls.panel.hidden));
        controls.close?.addEventListener("click", () => showPanel(false));
        controls.read?.addEventListener("click", readPage);
        controls.pause?.addEventListener("click", pauseReading);
        controls.resume?.addEventListener("click", resumeReading);
        controls.stop?.addEventListener("click", () => stopReading(true));

        controls.language?.addEventListener("change", event => {
            const language = event.target.value;
            stopReading(false);
            if (typeof applyWebsiteLanguage === "function" &&
                getCurrentLanguage() !== language) {
                applyWebsiteLanguage(language);
            }
            status("Voice language: " + languageLabels[language] + ".");
        });

        document.addEventListener("agriledger:languageChanged", event => {
            const language = event.detail?.language || getCurrentLanguage();
            setVoiceLanguage(language);
        });

        status("Ready. Voice follows the selected website language.");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize, { once: true });
    } else {
        initialize();
    }
})();
