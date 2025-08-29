const sentenceDisplay = document.getElementById("sentence");
const inputText = document.getElementById("inputText");
const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

const sentences = [
  "JavaScript is a powerful language.",
  "Practice makes a man perfect.",
  "Typing fast requires daily effort.",
  "Frontend development is fun and creative.",
  "Keep learning and keep improving.",
];

let startTime, endTime, selectedSentence;

// Start button logic
startBtn.addEventListener("click", () => {
  // 1. Pick random sentence
  selectedSentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentenceDisplay.textContent = selectedSentence;

  // 2. Clear previous input and result
  inputText.value = "";
  result.textContent = "";

  // 3. Enable typing and focus
  inputText.disabled = false;
  inputText.focus();

  // 4. Enable check button
  checkBtn.disabled = false;

  // 5. Record start time
  startTime = new Date().getTime();
});

// Check button logic
checkBtn.addEventListener("click", () => {
  // 1. Record end time
  endTime = new Date().getTime();

  // 2. Get typed value
  const typedText = inputText.value.trim();

  // 3. Calculate time in seconds
  const timeTaken = (endTime - startTime) / 1000;

  // 4. Count words typed
  const wordCount = typedText.split(" ").filter((word) => word !== "").length;

  // 5. Calculate speed (words per minute)
  const speed = Math.round((wordCount / timeTaken) * 60);

  // 6. Check correctness
  if (typedText === selectedSentence) {
    result.textContent = `✅ Great! You typed correctly in ${timeTaken.toFixed(
      2
    )}s at ${speed} WPM.`;
    result.style.color = "green";
  } else {
    result.textContent = `❌ You typed incorrectly. Speed: ${speed} WPM.`;
    result.style.color = "red";
  }

  // 7. Disable input again
  inputText.disabled = true;
});
