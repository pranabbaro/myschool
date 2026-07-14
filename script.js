// ======================================================
// KANNADA KIDS LEARNING - COMPLETE SCRIPT.JS
// ======================================================


// ======================================================
// VOICE SETTINGS
// ======================================================

let availableVoices = [];
let selectedKannadaVoice = null;


/**
 * Load all voices available in the browser.
 * Microsoft Edge sometimes loads voices after the page starts,
 * so this function may run more than once.
 */
function loadAvailableVoices() {
    if (!("speechSynthesis" in window)) {
        console.warn("Speech synthesis is not supported.");
        return;
    }

    availableVoices = window.speechSynthesis.getVoices();

    selectedKannadaVoice = availableVoices.find((voice) => {
        const language = voice.lang.toLowerCase();
        const name = voice.name.toLowerCase();

        return (
            language === "kn-in" ||
            language.startsWith("kn") ||
            name.includes("kannada")
        );
    });

    if (selectedKannadaVoice) {
        console.log(
            "Kannada voice found:",
            selectedKannadaVoice.name,
            selectedKannadaVoice.lang
        );
    } else {
        console.warn("No Kannada voice was found.");
    }
}


/*
 * Load voices immediately.
 */
loadAvailableVoices();


/*
 * Edge and Chrome may load voices asynchronously.
 */
if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = loadAvailableVoices;
}


/*
 * Retry loading voices after the page has loaded.
 */
window.addEventListener("load", function () {
    loadAvailableVoices();

    setTimeout(loadAvailableVoices, 500);
    setTimeout(loadAvailableVoices, 1500);
});


// ======================================================
// LESSON CONTENT
// ======================================================

const lessons = {
    letters: {
        title: "Kannada Letters",
        items: [
            {
                picture: "🌟",
                kannada: "ಅ",
                english: "A"
            },
            {
                picture: "🌈",
                kannada: "ಆ",
                english: "Aa"
            },
            {
                picture: "✨",
                kannada: "ಇ",
                english: "I"
            },
            {
                picture: "🦅",
                kannada: "ಈ",
                english: "Ee"
            },
            {
                picture: "🌼",
                kannada: "ಉ",
                english: "U"
            },
            {
                picture: "🎈",
                kannada: "ಊ",
                english: "Oo"
            },
            {
                picture: "🍀",
                kannada: "ಎ",
                english: "E"
            },
            {
                picture: "🌞",
                kannada: "ಏ",
                english: "Ae"
            },
            {
                picture: "⭐",
                kannada: "ಐ",
                english: "Ai"
            },
            {
                picture: "🌸",
                kannada: "ಒ",
                english: "O"
            },
            {
                picture: "🌻",
                kannada: "ಓ",
                english: "Oo"
            },
            {
                picture: "🎵",
                kannada: "ಔ",
                english: "Au"
            }
        ]
    },

    numbers: {
        title: "Kannada Numbers",
        items: [
            {
                picture: "1️⃣",
                kannada: "ಒಂದು",
                english: "One"
            },
            {
                picture: "2️⃣",
                kannada: "ಎರಡು",
                english: "Two"
            },
            {
                picture: "3️⃣",
                kannada: "ಮೂರು",
                english: "Three"
            },
            {
                picture: "4️⃣",
                kannada: "ನಾಲ್ಕು",
                english: "Four"
            },
            {
                picture: "5️⃣",
                kannada: "ಐದು",
                english: "Five"
            },
            {
                picture: "6️⃣",
                kannada: "ಆರು",
                english: "Six"
            },
            {
                picture: "7️⃣",
                kannada: "ಏಳು",
                english: "Seven"
            },
            {
                picture: "8️⃣",
                kannada: "ಎಂಟು",
                english: "Eight"
            },
            {
                picture: "9️⃣",
                kannada: "ಒಂಬತ್ತು",
                english: "Nine"
            },
            {
                picture: "🔟",
                kannada: "ಹತ್ತು",
                english: "Ten"
            }
        ]
    },

    animals: {
        title: "Animals in Kannada",
        items: [
            {
                picture: "🐘",
                kannada: "ಆನೆ",
                english: "Elephant"
            },
            {
                picture: "🐶",
                kannada: "ನಾಯಿ",
                english: "Dog"
            },
            {
                picture: "🐱",
                kannada: "ಬೆಕ್ಕು",
                english: "Cat"
            },
            {
                picture: "🐄",
                kannada: "ಹಸು",
                english: "Cow"
            },
            {
                picture: "🐯",
                kannada: "ಹುಲಿ",
                english: "Tiger"
            },
            {
                picture: "🦁",
                kannada: "ಸಿಂಹ",
                english: "Lion"
            },
            {
                picture: "🐒",
                kannada: "ಕೋತಿ",
                english: "Monkey"
            },
            {
                picture: "🐇",
                kannada: "ಮೊಲ",
                english: "Rabbit"
            }
        ]
    },

    fruits: {
        title: "Fruits in Kannada",
        items: [
            {
                picture: "🥭",
                kannada: "ಮಾವು",
                english: "Mango"
            },
            {
                picture: "🍎",
                kannada: "ಸೇಬು",
                english: "Apple"
            },
            {
                picture: "🍌",
                kannada: "ಬಾಳೆಹಣ್ಣು",
                english: "Banana"
            },
            {
                picture: "🍊",
                kannada: "ಕಿತ್ತಳೆ",
                english: "Orange"
            },
            {
                picture: "🍇",
                kannada: "ದ್ರಾಕ್ಷಿ",
                english: "Grapes"
            },
            {
                picture: "🍉",
                kannada: "ಕಲ್ಲಂಗಡಿ",
                english: "Watermelon"
            }
        ]
    }
};


// ======================================================
// QUIZ QUESTIONS
// ======================================================

const quizQuestions = [
    {
        picture: "🐘",
        answer: "ಆನೆ",
        options: ["ಆನೆ", "ನಾಯಿ", "ಹಸು", "ಬೆಕ್ಕು"]
    },
    {
        picture: "🐶",
        answer: "ನಾಯಿ",
        options: ["ಹುಲಿ", "ನಾಯಿ", "ಕೋತಿ", "ಮೊಲ"]
    },
    {
        picture: "🥭",
        answer: "ಮಾವು",
        options: ["ಸೇಬು", "ದ್ರಾಕ್ಷಿ", "ಮಾವು", "ಕಿತ್ತಳೆ"]
    },
    {
        picture: "🍎",
        answer: "ಸೇಬು",
        options: ["ಸೇಬು", "ಮಾವು", "ಬಾಳೆಹಣ್ಣು", "ಕಲ್ಲಂಗಡಿ"]
    },
    {
        picture: "🐄",
        answer: "ಹಸು",
        options: ["ಆನೆ", "ಸಿಂಹ", "ಹಸು", "ಹುಲಿ"]
    },
    {
        picture: "🐱",
        answer: "ಬೆಕ್ಕು",
        options: ["ನಾಯಿ", "ಮೊಲ", "ಬೆಕ್ಕು", "ಕೋತಿ"]
    }
];


let currentQuestionIndex = 0;
let score = 0;


// ======================================================
// LESSON FUNCTIONS
// ======================================================

function showLesson(lessonName) {
    const lesson = lessons[lessonName];

    if (!lesson) {
        alert("Lesson not found.");
        return;
    }

    hideAllSections();

    const lessonSection = document.getElementById("lessonSection");
    const lessonTitle = document.getElementById("lessonTitle");
    const lessonCards = document.getElementById("lessonCards");

    if (!lessonSection || !lessonTitle || !lessonCards) {
        alert("Some lesson elements are missing from index.html.");
        return;
    }

    lessonSection.classList.remove("hidden");
    lessonTitle.textContent = lesson.title;
    lessonCards.innerHTML = "";

    lesson.items.forEach((item) => {
        const card = document.createElement("div");

        card.className = "lesson-card";

        const picture = document.createElement("div");
        picture.className = "lesson-picture";
        picture.textContent = item.picture;

        const kannadaWord = document.createElement("div");
        kannadaWord.className = "kannada-word";
        kannadaWord.textContent = item.kannada;

        const englishWord = document.createElement("div");
        englishWord.className = "english-word";
        englishWord.textContent = item.english;

        const speakButton = document.createElement("button");
        speakButton.className = "speak-button";
        speakButton.textContent = "🔊 Listen";

        speakButton.addEventListener("click", function () {
            speakKannada(item.kannada, item.english);
        });

        card.appendChild(picture);
        card.appendChild(kannadaWord);
        card.appendChild(englishWord);
        card.appendChild(speakButton);

        lessonCards.appendChild(card);
    });
}


// ======================================================
// SPEECH FUNCTIONS
// ======================================================

function speakKannada(kannadaText, englishText = "") {
    if (!("speechSynthesis" in window)) {
        alert(
            "Your browser does not support speech. " +
            "Please try the latest version of Microsoft Edge."
        );

        return;
    }

    if (!kannadaText) {
        return;
    }

    /*
     * Stop any speech already playing.
     */
    window.speechSynthesis.cancel();

    /*
     * Reload available voices before speaking.
     */
    loadAvailableVoices();

    const speech = new SpeechSynthesisUtterance(kannadaText);

    speech.rate = 0.7;
    speech.pitch = 1;
    speech.volume = 1;

    if (selectedKannadaVoice) {
        speech.voice = selectedKannadaVoice;
        speech.lang = selectedKannadaVoice.lang;
    } else {
        /*
         * Edge may still use a Kannada cloud voice when kn-IN is selected,
         * even if it does not appear in the voice list.
         */
        speech.lang = "kn-IN";
    }

    speech.onstart = function () {
        console.log("Speech started:", kannadaText);
    };

    speech.onend = function () {
        console.log("Speech finished:", kannadaText);
    };

    speech.onerror = function (event) {
        console.error("Speech error:", event.error);

        /*
         * If Kannada speech fails, speak the English meaning
         * so that the user can confirm sound itself is working.
         */
        if (englishText) {
            speakEnglishFallback(englishText);
        } else {
            showVoiceError();
        }
    };

    /*
     * Small delay helps Microsoft Edge after cancel().
     */
    setTimeout(function () {
        try {
            window.speechSynthesis.speak(speech);
        } catch (error) {
            console.error("Unable to start speech:", error);

            if (englishText) {
                speakEnglishFallback(englishText);
            } else {
                showVoiceError();
            }
        }
    }, 150);
}


function speakEnglishFallback(englishText) {
    if (!englishText) {
        showVoiceError();
        return;
    }

    const fallbackSpeech =
        new SpeechSynthesisUtterance(englishText);

    const englishVoice = availableVoices.find((voice) => {
        return voice.lang.toLowerCase().startsWith("en");
    });

    if (englishVoice) {
        fallbackSpeech.voice = englishVoice;
        fallbackSpeech.lang = englishVoice.lang;
    } else {
        fallbackSpeech.lang = "en-US";
    }

    fallbackSpeech.rate = 0.8;
    fallbackSpeech.pitch = 1;
    fallbackSpeech.volume = 1;

    fallbackSpeech.onerror = function () {
        showVoiceError();
    };

    window.speechSynthesis.speak(fallbackSpeech);

    alert(
        "Kannada voice was not found on this device. " +
        "The English word will be spoken instead.\n\n" +
        "For correct Kannada pronunciation, install Kannada language support " +
        "in Windows or use recorded MP3 audio files."
    );
}


function showVoiceError() {
    alert(
        "Sound could not be played.\n\n" +
        "Please check the following:\n" +
        "1. Your laptop volume is turned on.\n" +
        "2. Microsoft Edge tab is not muted.\n" +
        "3. Kannada language support is installed in Windows.\n" +
        "4. Refresh the page using Ctrl + F5."
    );
}


/**
 * Optional function.
 * You can call testVoice() from a button if needed.
 */
function testVoice() {
    if (!("speechSynthesis" in window)) {
        alert("Speech is not supported in this browser.");
        return;
    }

    window.speechSynthesis.cancel();

    const testSpeech =
        new SpeechSynthesisUtterance("Hello");

    testSpeech.lang = "en-US";
    testSpeech.rate = 0.8;
    testSpeech.volume = 1;

    testSpeech.onstart = function () {
        alert("Sound is working.");
    };

    testSpeech.onerror = function () {
        alert(
            "Sound is not working. Check your Windows and Edge sound settings."
        );
    };

    window.speechSynthesis.speak(testSpeech);
}


// ======================================================
// PAGE NAVIGATION
// ======================================================

function hideAllSections() {
    const sections = [
        "homeSection",
        "lessonSection",
        "quizSection"
    ];

    sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.classList.add("hidden");
        }
    });
}


function goHome() {
    hideAllSections();

    const homeSection = document.getElementById("homeSection");

    if (homeSection) {
        homeSection.classList.remove("hidden");
    }

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}


// ======================================================
// QUIZ FUNCTIONS
// ======================================================

function showQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    hideAllSections();

    const quizSection = document.getElementById("quizSection");

    if (!quizSection) {
        alert("Quiz section is missing from index.html.");
        return;
    }

    quizSection.classList.remove("hidden");

    restoreQuizLayout();
    displayQuestion();
}


function restoreQuizLayout() {
    const quizSection = document.getElementById("quizSection");

    if (!quizSection) {
        return;
    }

    quizSection.innerHTML = `
        <button class="back-button" onclick="goHome()">
            ← Back to Home
        </button>

        <div class="quiz-card">

            <h2>⭐ Kannada Picture Quiz</h2>

            <p id="quizScore">Score: 0</p>

            <div id="quizPicture" class="quiz-picture"></div>

            <h3>Select the correct Kannada word</h3>

            <div id="quizOptions" class="quiz-options"></div>

            <p id="quizMessage" class="quiz-message"></p>

            <button
                id="nextQuestionButton"
                class="next-button hidden"
                onclick="nextQuestion()"
            >
                Next Question →
            </button>

        </div>
    `;
}


function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];

    if (!question) {
        showQuizResult();
        return;
    }

    const scoreElement = document.getElementById("quizScore");
    const pictureElement = document.getElementById("quizPicture");
    const messageElement = document.getElementById("quizMessage");
    const nextButton = document.getElementById("nextQuestionButton");
    const optionsElement = document.getElementById("quizOptions");

    if (
        !scoreElement ||
        !pictureElement ||
        !messageElement ||
        !nextButton ||
        !optionsElement
    ) {
        alert("Quiz elements are missing from index.html.");
        return;
    }

    scoreElement.textContent =
        `Score: ${score} / ${quizQuestions.length}`;

    pictureElement.textContent = question.picture;

    messageElement.textContent = "";

    nextButton.classList.add("hidden");

    optionsElement.innerHTML = "";

    const shuffledOptions = shuffleArray([...question.options]);

    shuffledOptions.forEach((option) => {
        const button = document.createElement("button");

        button.className = "quiz-option";
        button.textContent = option;

        button.addEventListener("click", function () {
            checkAnswer(option, button);
        });

        optionsElement.appendChild(button);
    });
}


function checkAnswer(selectedAnswer, selectedButton) {
    const question = quizQuestions[currentQuestionIndex];

    if (!question) {
        return;
    }

    const optionButtons =
        document.querySelectorAll(".quiz-option");

    optionButtons.forEach((button) => {
        button.disabled = true;

        if (button.textContent === question.answer) {
            button.classList.add("correct-answer");
        }
    });

    const messageElement =
        document.getElementById("quizMessage");

    if (selectedAnswer === question.answer) {
        score++;

        selectedButton.classList.add("correct-answer");

        if (messageElement) {
            messageElement.textContent =
                "Correct! Great job! ⭐";
        }

        speakKannada(question.answer);
    } else {
        selectedButton.classList.add("wrong-answer");

        if (messageElement) {
            messageElement.textContent =
                `Good try! The correct answer is ${question.answer}.`;
        }

        speakKannada(question.answer);
    }

    const scoreElement =
        document.getElementById("quizScore");

    if (scoreElement) {
        scoreElement.textContent =
            `Score: ${score} / ${quizQuestions.length}`;
    }

    const nextButton =
        document.getElementById("nextQuestionButton");

    if (nextButton) {
        nextButton.classList.remove("hidden");
    }
}


function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= quizQuestions.length) {
        showQuizResult();
        return;
    }

    displayQuestion();
}


function showQuizResult() {
    const quizSection =
        document.getElementById("quizSection");

    if (!quizSection) {
        return;
    }

    let resultMessage = "";

    if (score === quizQuestions.length) {
        resultMessage =
            "Perfect score! You are a Kannada superstar! 🌟";
    } else if (score >= quizQuestions.length / 2) {
        resultMessage =
            "Very good! Keep practising Kannada! ⭐";
    } else {
        resultMessage =
            "Good effort! Try again and improve your score! 😊";
    }

    quizSection.innerHTML = `
        <button class="back-button" onclick="goHome()">
            ← Back to Home
        </button>

        <div class="quiz-card">

            <h2>🎉 Quiz Completed!</h2>

            <div class="quiz-picture">
                🏆
            </div>

            <h3>
                Your score is ${score} out of
                ${quizQuestions.length}
            </h3>

            <p class="quiz-message">
                ${resultMessage}
            </p>

            <button
                class="next-button"
                onclick="restartQuiz()"
            >
                Play Again
            </button>

        </div>
    `;
}


function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    restoreQuizLayout();
    displayQuestion();
}


// ======================================================
// HELPER FUNCTIONS
// ======================================================

function shuffleArray(array) {
    for (let index = array.length - 1; index > 0; index--) {
        const randomIndex =
            Math.floor(Math.random() * (index + 1));

        const temporaryValue = array[index];

        array[index] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// ======================================================
// PAGE INITIALIZATION
// ======================================================

document.addEventListener("DOMContentLoaded", function () {
    loadAvailableVoices();

    const homeSection =
        document.getElementById("homeSection");

    if (homeSection) {
        homeSection.classList.remove("hidden");
    }
});