const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// NEW: Feature button & message elements
const featuresBtn = document.getElementById("featuresBtn");
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");
const closeMessage = document.getElementById("closeMessage");
const bg = document.querySelector(".bg");

// Set volume
bgMusic.volume = 0.3;

// Browser autoplay fix
document.body.addEventListener("click", () => {
    bgMusic.play();
}, { once: true });

// Toggle music
musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = "🔊";
    } else {
        bgMusic.pause();
        musicBtn.textContent = "🔇";
    }
});


// ===============================
// GAME FEATURES MESSAGE
// ===============================

featuresBtn.addEventListener("click", () => {

    messageText.innerText =
`🎮 WORD SCRAMBLE GAME FEATURES

⏳ Countdown Timer  
   • Level 1  → 29 seconds  
   • Level 10 → 20 seconds  
   • Level 20 → 10 seconds  
   • Level 30+ → Minimum 10 seconds (does not go lower)

🔄 Refresh word button
   • skip the word

📈 Scoring System  
   • +2 points for every correct word

🆙 Level Progression  
   • Level up every 10 points

🏆 Challenge Mode  
   • Maximum 100 levels

🚪 Quit Option  
   • Displays your final score and level reached`;

    messageBox.classList.add("active");
    bg.classList.add("blur");
});


// Close popup smoothly
closeMessage.addEventListener("click", () => {

    messageBox.classList.remove("active");
    bg.classList.remove("blur");
});