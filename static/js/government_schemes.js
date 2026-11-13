
/* ==========================================================
   AGRILEDGER - GOVERNMENT SCHEMES JAVASCRIPT
   Search, language translation and voice support
   ========================================================== */

(() => {
    "use strict";

    const TRANSLATE_API = "/api/ai/translate";
    const SPEAK_API = "/api/ai/speak";

    const DEFAULT_LANGUAGE = "en-IN";

    const SUPPORTED_LANGUAGES = {
        "en-IN": "English",
        "hi-IN": "Hindi",
        "ta-IN": "Tamil",
        "te-IN": "Telugu",
        "kn-IN": "Kannada",
        "ml-IN": "Malayalam",
        "mr-IN": "Marathi",
        "bn-IN": "Bengali"
    };

    let activeAudio = null;
    let activeListenButton = null;

    const translationCache = new Map();

    let currentTranslationRequest = 0;


    // ------------------------------------------------------
    // LANGUAGE MANAGEMENT
    // ------------------------------------------------------

    function getCurrentLanguage() {
        let language = DEFAULT_LANGUAGE;

        try {
            language =
                localStorage.getItem("agriledger_language") ||
                localStorage.getItem("selectedLanguage") ||
                DEFAULT_LANGUAGE;
        } catch (error) {
            console.warn("Unable to read saved language.", error);
        }

        if (!SUPPORTED_LANGUAGES[language]) {
            return DEFAULT_LANGUAGE;
        }

        return language;
    }


    function getLanguageSelector() {
        return document.querySelector(
            "#languageSelect, " +
            "#languageSelector, " +
            "[name='language'], " +
            "[data-language-selector]"
        );
    }


    function updateLanguageSelector(language) {
        const selector = getLanguageSelector();

        if (!selector) {
            return;
        }

        const matchingOption = Array.from(selector.options || [])
            .find(option => {
                return option.value === language ||
                    option.value.toLowerCase() ===
                    language.toLowerCase();
            });

        if (matchingOption) {
            selector.value = matchingOption.value;
        }
    }


    // ------------------------------------------------------
    // TRANSLATION API
    // ------------------------------------------------------

    async function translateText(
        text,
        targetLanguage,
        sourceLanguage = DEFAULT_LANGUAGE
    ) {
        if (!text || !text.trim()) {
            return text;
        }

        if (
            !SUPPORTED_LANGUAGES[targetLanguage] ||
            targetLanguage === sourceLanguage
        ) {
            return text;
        }

        const cacheKey = [
            sourceLanguage,
            targetLanguage,
            text
        ].join("::");

        if (translationCache.has(cacheKey)) {
            return translationCache.get(cacheKey);
        }

        const response = await fetch(TRANSLATE_API, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                text: text,
                source_language: sourceLanguage,
                target_language: targetLanguage
            })
        });

        if (!response.ok) {
            throw new Error(
                `Translation failed: HTTP ${response.status}`
            );
        }

        const data = await response.json();

        if (data.success === false || data.error) {
            throw new Error(
                data.message || data.error || "Translation failed"
            );
        }

        const translated =
            data.translated_text ||
            data.translatedText ||
            data.translation ||
            data.translated ||
            data.text;

        if (
            typeof translated !== "string" ||
            !translated.trim()
        ) {
            throw new Error(
                "Translation API returned no translated text."
            );
        }

        translationCache.set(cacheKey, translated);

        return translated;
    }


    // ------------------------------------------------------
    // TRANSLATE SCHEME CONTENT
    // ------------------------------------------------------

    async function applyGovernmentSchemeLanguage(language) {
        const targetLanguage =
            language || getCurrentLanguage();

        if (!SUPPORTED_LANGUAGES[targetLanguage]) {
            console.warn(
                "Unsupported Government Schemes language:",
                targetLanguage
            );
            return;
        }

        const requestId = ++currentTranslationRequest;

        const elements = Array.from(
            document.querySelectorAll("[data-scheme-translate]")
        );

        if (!elements.length) {
            return;
        }

        if (targetLanguage === DEFAULT_LANGUAGE) {
            elements.forEach(element => {
                const original = element.dataset.originalText;

                if (original !== undefined) {
                    element.textContent = original;
                }
            });

            return;
        }

        const tasks = elements.map(async element => {
            if (element.dataset.originalText === undefined) {
                element.dataset.originalText =
                    element.textContent.trim();
            }

            const originalText =
                element.dataset.originalText;

            if (!originalText) {
                return;
            }

            try {
                const translated = await translateText(
                    originalText,
                    targetLanguage
                );

                // Ignore results from an older language selection.
                if (requestId !== currentTranslationRequest) {
                    return;
                }

                element.textContent = translated;

            } catch (error) {
                console.error(
                    "Could not translate scheme text:",
                    originalText,
                    error
                );

                // Keep original text if translation fails.
            }
        });

        await Promise.allSettled(tasks);

        updateLanguageSelector(targetLanguage);
    }


    // Make this function available to main.js.
    window.applyGovernmentSchemeLanguage =
        applyGovernmentSchemeLanguage;


    // ------------------------------------------------------
    // VOICE LANGUAGE
    // ------------------------------------------------------

    function getVoiceLanguage() {
        return getCurrentLanguage();
    }


    // ------------------------------------------------------
    // STOP CURRENT AUDIO
    // ------------------------------------------------------

    function stopCurrentAudio() {
        if (activeAudio) {
            activeAudio.pause();
            activeAudio.currentTime = 0;
            activeAudio = null;
        }

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

        if (activeListenButton) {
            activeListenButton.disabled = false;
            activeListenButton.textContent = "🔊 Listen";
            activeListenButton = null;
        }
    }


    // ------------------------------------------------------
    // BROWSER SPEECH FALLBACK
    // ------------------------------------------------------

    function browserSpeak(text, language) {
        return new Promise((resolve, reject) => {
            if (!("speechSynthesis" in window)) {
                reject(
                    new Error("Browser speech is not supported.")
                );
                return;
            }

            const utterance =
                new SpeechSynthesisUtterance(text);

            utterance.lang = language;
            utterance.rate = 0.9;
            utterance.pitch = 1;

            utterance.onend = () => resolve();

            utterance.onerror = event => {
                reject(
                    new Error(
                        event.error || "Browser speech failed."
                    )
                );
            };

            window.speechSynthesis.cancel();

            window.speechSynthesis.speak(utterance);
        });
    }


    // ------------------------------------------------------
    // SARVAM TEXT-TO-SPEECH
    // ------------------------------------------------------

    async function sarvamSpeak(text, language) {
        const response = await fetch(SPEAK_API, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                text: text,
                language: language
            })
        });

        if (!response.ok) {
            throw new Error(
                `Speech API failed: HTTP ${response.status}`
            );
        }

        const contentType =
            response.headers.get("content-type") || "";

        if (
            contentType.includes("application/json") ||
            contentType.includes("text/html")
        ) {
            const data = await response.json();

            throw new Error(
                data.message ||
                data.error ||
                "Speech service did not return audio."
            );
        }

        const audioBlob = await response.blob();

        if (!audioBlob.size) {
            throw new Error("Speech service returned empty audio.");
        }

        const audioUrl = URL.createObjectURL(audioBlob);

        return new Promise((resolve, reject) => {
            const audio = new Audio(audioUrl);

            activeAudio = audio;

            audio.onended = () => {
                URL.revokeObjectURL(audioUrl);
                activeAudio = null;
                resolve();
            };

            audio.onerror = () => {
                URL.revokeObjectURL(audioUrl);
                activeAudio = null;

                reject(
                    new Error("Unable to play the generated audio.")
                );
            };

            audio.play().catch(error => {
                URL.revokeObjectURL(audioUrl);
                activeAudio = null;
                reject(error);
            });
        });
    }


    // ------------------------------------------------------
    // BUILD SCHEME SPEECH
    // ------------------------------------------------------

    function getSchemeSpeech(button) {
        const schemeName =
            button.dataset.schemeName || "";

        const description =
            button.dataset.schemeDescription || "";

        const benefits =
            button.dataset.schemeBenefits || "";

        const eligibility =
            button.dataset.schemeEligibility || "";

        const documents =
            button.dataset.schemeDocuments || "";

        return [
            schemeName,
            description,
            "Benefits.",
            benefits,
            "Eligibility.",
            eligibility,
            "Required documents.",
            documents
        ]
            .filter(Boolean)
            .join(". ");
    }


    // ------------------------------------------------------
    // LISTEN BUTTON
    // ------------------------------------------------------

    async function handleListen(button) {
        if (button.disabled) {
            return;
        }

        if (activeListenButton === button) {
            stopCurrentAudio();
            return;
        }

        stopCurrentAudio();

        const text = getSchemeSpeech(button);

        if (!text.trim()) {
            alert("No scheme information is available to read.");
            return;
        }

        const language = getVoiceLanguage();

        button.disabled = true;
        button.textContent = "⏳ Preparing audio...";

        activeListenButton = button;

        try {
            try {
                await sarvamSpeak(text, language);

            } catch (sarvamError) {
                console.warn(
                    "Sarvam speech unavailable. Trying browser speech.",
                    sarvamError
                );

                button.textContent = "🔊 Speaking...";

                await browserSpeak(text, language);
            }

        } catch (error) {
            console.error("Voice playback error:", error);

            alert(
                "Unable to play this scheme right now. " +
                "Please check your internet connection and voice service."
            );

        } finally {
            button.disabled = false;
            button.textContent = "🔊 Listen";

            if (activeListenButton === button) {
                activeListenButton = null;
            }
        }
    }


    // ------------------------------------------------------
    // INITIALIZE LISTEN BUTTONS
    // ------------------------------------------------------

    function initializeSchemeVoice() {
        const buttons = document.querySelectorAll(
            ".scheme-card .listen-button"
        );

        buttons.forEach(button => {
            // Prevent duplicate listeners.
            if (button.dataset.schemeVoiceBound === "true") {
                return;
            }

            button.dataset.schemeVoiceBound = "true";

            button.addEventListener("click", () => {
                handleListen(button);
            });
        });
    }


    // ------------------------------------------------------
    // SEARCH FORM
    // ------------------------------------------------------

    function initializeSchemeSearch() {
        const form = document.querySelector(
            ".schemes-filter-form"
        );

        if (!form || form.dataset.searchBound === "true") {
            return;
        }

        form.dataset.searchBound = "true";

        const searchInput = form.querySelector(
            "input[name='search']"
        );

        if (searchInput) {
            searchInput.addEventListener("keydown", event => {
                if (event.key === "Enter") {
                    form.requestSubmit();
                }
            });
        }

        // Native GET form submission handles the actual filtering.
        // No client-side filtering is performed on incomplete data.
    }


    // ------------------------------------------------------
    // RESET BUTTON
    // ------------------------------------------------------

    function initializeResetButton() {
        const resetButton = document.querySelector(
            ".reset-button"
        );

        if (!resetButton || resetButton.dataset.resetBound === "true") {
            return;
        }

        resetButton.dataset.resetBound = "true";

        resetButton.addEventListener("click", event => {
            // The anchor already points to the unfiltered page.
            // Allow normal navigation.
        });
    }


    // ------------------------------------------------------
    // LANGUAGE CHANGE EVENTS
    // ------------------------------------------------------

    function initializeLanguageEvents() {
        const selector = getLanguageSelector();

        if (selector && selector.dataset.schemeLanguageBound !== "true") {
            selector.dataset.schemeLanguageBound = "true";

            selector.addEventListener("change", event => {
                const language = event.target.value;

                try {
                    localStorage.setItem(
                        "agriledger_language",
                        language
                    );
                } catch (error) {
                    console.warn(
                        "Unable to save selected language.",
                        error
                    );
                }

                applyGovernmentSchemeLanguage(language);
            });
        }

        // main.js can dispatch this event after changing the language.
        window.addEventListener(
            "agriledger:languageChanged",
            event => {
                const language =
                    event.detail?.language || getCurrentLanguage();

                applyGovernmentSchemeLanguage(language);
            }
        );
    }


    // ------------------------------------------------------
    // INITIALIZATION
    // ------------------------------------------------------

    function initializeGovernmentSchemes() {
        initializeSchemeSearch();
        initializeResetButton();
        initializeSchemeVoice();
        initializeLanguageEvents();

        const language = getCurrentLanguage();

        updateLanguageSelector(language);

        if (language !== DEFAULT_LANGUAGE) {
            applyGovernmentSchemeLanguage(language);
        }

        console.info(
            "AgriLedger Government Schemes initialized."
        );
    }


    // ------------------------------------------------------
    // DOM READY
    // ------------------------------------------------------

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeGovernmentSchemes,
            { once: true }
        );
    } else {
        initializeGovernmentSchemes();
    }

})();
