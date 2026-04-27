// ===============================
// Element Selection
// ===============================

// Background music element
const bgMusic = document.getElementById("bgMusic");

// Music toggle button
const musicBtn = document.getElementById("musicBtn");

// Main container (used for switching login/register view)
const container = document.querySelector(".container");

// Register & Login toggle buttons
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

// Login form
const loginForm = document.getElementById("loginForm");


// ===============================
// Background Music Settings
// ===============================

// Set default music volume (30%)
bgMusic.volume = 0.3;


// ===============================
// Browser Autoplay Fix
// ===============================
// Many browsers block autoplay.
// This plays music on the first user click only.

document.body.addEventListener(
  "click",
  () => {
    bgMusic.play();
  },
  { once: true } // Runs only once
);


// ===============================
// Music Toggle Function
// ===============================
// Switches between play and pause
// and updates the button icon.

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "🔊"; // Sound ON icon
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🔇"; // Sound OFF icon
  }
});


// ===============================
// Form Toggle (Login / Register)
// ===============================
// Adds or removes "active" class
// to switch between forms.

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});


// ===============================
// Login Form Submission
// ===============================
// Prevents page reload
// Redirects user after login

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop default form submission

  // TODO: Add validation or authentication logic here

  // Redirect to Home Page
  window.location.href = "Home_Page.html";
});