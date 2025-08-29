// Array of words and hints
const words = [
  { word: "school", hint: "A place for learning" },
  { word: "bottle", hint: "Holds a liquid inside" },
  { word: "book", hint: "Something to study" },
  { word: "office", hint: "A place for a job" },
  { word: "pen", hint: "Used for writing" },
];

const scrambledWordEl = document.getElementById("scrambledWord");
const hintEl = document.getElementById("hint");
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const feedback = document.getElementById("feedback");

// Add a new button for next word (you can also create this in HTML)
const nextBtn = document.createElement("button");
nextBtn.textContent = "Next Word";
document.querySelector(".game").appendChild(nextBtn);

// Global variables to track current word
let originalWord = "";

// Function to pick and show a random word
function loadNewWord() {
  const currentWordObj = words[Math.floor(Math.random() * words.length)];
  originalWord = currentWordObj.word;

  // Scramble the word
  let scrambled = originalWord
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  // Show on page
  scrambledWordEl.textContent = scrambled;
  hintEl.textContent = "Hint: " + currentWordObj.hint;
  feedback.textContent = "";
  userInput.value = "";
}

// When Check button is clicked
checkBtn.addEventListener("click", () => {
  const guess = userInput.value.toLowerCase();

  if (guess === originalWord) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Try again!";
    feedback.style.color = "red";
  }
});

// When Next Word button is clicked
nextBtn.addEventListener("click", loadNewWord);

// Load first word on page load
loadNewWord();
