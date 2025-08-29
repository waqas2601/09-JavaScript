// Storing the words and its hints //
const words = [
  { word: "mango", hint: "It's a fruit" },
  { word: "chair", hint: "Something to sit on" },
  { word: "laptop", hint: "A type of computer" },
  { word: "pizza", hint: "Cheesy and round" },
  { word: "river", hint: "Flows with water" },
];

// get refrences of html elements ///
const wordDisplay = document.getElementById("wordDisplay");
const hint = document.getElementById("hint");
const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const resultMsg = document.getElementById("resultMsg");

// Select random word
let randomIndex = Math.floor(Math.random() * words.length);
let selected = words[randomIndex];

let hiddenWord = selected.word;
let displayedWord = "_ ".repeat(hiddenWord.length).trim();

wordDisplay.textContent = displayedWord;
hint.textContent = "Hint: " + selected.hint;

checkBtn.addEventListener("click", () => {
  const userGuess = guessInput.value.toLowerCase();

  if (userGuess === hiddenWord) {
    resultMsg.textContent = "✅ Correct!";
    resultMsg.style.color = "lightgreen";

    //  Show the correct word
    wordDisplay.textContent = hiddenWord.split("").join(" ");
  } else {
    resultMsg.textContent = "❌ Try again!";
    resultMsg.style.color = "tomato";
  }

  //  Optional: Clear input
  guessInput.value = "";
});
