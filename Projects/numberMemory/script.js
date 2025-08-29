// Get Refrences  //

const numberDisplay = document.getElementById("number");
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");
const inputSection = document.getElementById("inputSection");

let generatedNumber;

startBtn.addEventListener("click", () => {
  result.textContent = "";
  userInput.value = "";
  inputSection.style.display = "none";

  generatedNumber = Math.floor(1000 + Math.random() * 9000);
  numberDisplay.textContent = generatedNumber;

  setTimeout(() => {
    numberDisplay.textContent = "???";
    inputSection.style.display = "block";
  }, 3000);
});

checkBtn.addEventListener("click", () => {
  const guess = userInput.value;

  if (guess === generatedNumber.toString()) {
    result.textContent = "✅ Correct! Well done!";
    result.style.color = "green";
  } else {
    result.textContent = `❌ Wrong! It was ${generatedNumber}`;
    result.style.color = "red";
  }

  inputSection.style.display = "none"; // hide input after answer
});
