// ================================
// SELECTING HTML ELEMENTS
// ================================

// Select scrambled word text
const wordText = document.querySelector(".word");

// Select hint text span
const hintText = document.querySelector(".hint span");

// Select timer number (bold inside time)
const timeText = document.querySelector(".time b");

// Select input field
const inputField = document.querySelector("input");

// Select buttons
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

// Select message box elements
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");
const closeMessage = document.getElementById("closeMessage");

// Select quit button
const quitBtn = document.getElementById("quitBtn");

// Select background (used for blur effect)
const bg = document.querySelector(".bg");

// Select score and level text
const scoreText = document.querySelector(".score b");
const levelText = document.querySelector(".level b");

// Select music elements
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


// ================================
// GAME VARIABLES
// ================================

let correctWord;        // Stores the correct word
let timer;              // Stores interval reference
let score = 0;          // Player score
let level = 1;          // Current level
let redirectToHome = false;  // Controls redirect after quitting
const maxLevel = 100;   // Maximum game level


// ================================
// BACKGROUND MUSIC SETTINGS
// ================================

// Set music volume to 30%
bgMusic.volume = 0.3;

// Fix browser autoplay restriction
// Music will start after first user click
document.body.addEventListener("click", () => {
    bgMusic.play();
}, { once: true });

// Toggle music ON / OFF
musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {   // If music is paused
        bgMusic.play();     // Play music
        musicBtn.textContent = "🔊"; // Change icon
    } else {                // If music is playing
        bgMusic.pause();    // Pause music
        musicBtn.textContent = "🔇"; // Change icon
    }
});


// ================================
// MESSAGE BOX FUNCTION
// ================================

function showMessage(text, type = "success") {

    messageText.innerText = text; // Set message text

    // Change color based on message type
    if (type === "success") {
        messageText.style.color = "white";
    } else if (type === "error") {
        messageText.style.color = "red";
    } else {
        messageText.style.color = "#333";
    }

    messageBox.classList.add("active"); // Show message box
    bg.classList.add("blur");           // Blur background
}

// Close message box
closeMessage.addEventListener("click", () => {

    messageBox.classList.remove("active"); // Hide message
    bg.classList.remove("blur");           // Remove blur

    // Redirect to login page if quit button was used
    if (redirectToHome) {
        window.location.href = "index.html";
    }
});


// ================================
// QUIT GAME FUNCTION
// ================================

quitBtn.addEventListener("click", () => {

    clearInterval(timer); // Stop timer

    // Show game over message
    showMessage(
        `📊 Game Over!\n\nTotal Score: ${score}\nReached Level: ${level}`,
        "success"
    );

    redirectToHome = true; // Mark for redirect
});


// ================================
// TIMER FUNCTION
// ================================

const initTimer = (maxTime) => {

    clearInterval(timer); // Clear previous timer

    timer = setInterval(() => {

        if (maxTime > 0) {
            maxTime--; // Decrease time
            timeText.innerText = maxTime; // Update UI
        } else {
            clearInterval(timer); // Stop timer
            showMessage(
                `⏰ Time's up! The correct word was ${correctWord.toUpperCase()}`,
                "error"
            );
            initGame(); // Restart game
        }

    }, 1000); // Runs every 1 second
};


// ================================
// START / RESET GAME
// ================================

const initGame = () => {

    // Timer decreases as level increases
    initTimer(Math.max(10, 30 - level));

    // Get random word object
    const randomObj = words[Math.floor(Math.random() * words.length)];

    // Split word into array of letters
    const wordArray = randomObj.word.split("");

    // Shuffle letters using loop
    for (let i = wordArray.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        // Swap letters
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    wordText.innerText = wordArray.join(""); // Display scrambled word
    hintText.innerText = randomObj.hint;     // Display hint
    correctWord = randomObj.word.toLowerCase(); // Store correct word

    inputField.value = ""; // Clear input field

    // Limit input length to correct word length
    inputField.setAttribute("maxlength", correctWord.length);
};

// Start first game
initGame();


// ================================
// CHECK USER ANSWER
// ================================

const checkWord = () => {

    const userWord = inputField.value.toLowerCase(); // Get user input

    // If input empty
    if (!userWord) {
        return showMessage("Please enter a word!", "error");
    }

    // If wrong answer
    if (userWord !== correctWord) {
        return showMessage(
            `Oops! ${userWord.toUpperCase()} is not correct!`,
            "error"
        );
    }

    // Correct answer
    score += 2; // Increase score
    scoreText.innerText = score; // Update score display

    // Level up every 10 points
    if (score % 10 === 0 && level < maxLevel) {

        level++;
        levelText.innerText = level;

        if (level === maxLevel) {
            showMessage(
                "🏆 Congratulations! You completed all 100 levels!",
                "success"
            );
            clearInterval(timer);
            return;
        }

        showMessage(
            `🎉 Level ${level - 1} Complete! Welcome to Level ${level}`,
            "success"
        );

    } else {

        showMessage(
            `🎉 Congrats! ${userWord.toUpperCase()} is correct!`,
            "success"
        );
    }

    initGame(); // Start new word
};


// ================================
// BUTTON EVENTS
// ================================

refreshBtn.addEventListener("click", initGame); // Refresh word
checkBtn.addEventListener("click", checkWord);  // Check answer



