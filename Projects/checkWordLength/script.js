// Get Refrences //

const wordInput = document.getElementById("wordInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");

// Add event to check btn to get the user word //
checkBtn.addEventListener("click", () => {
  const word = wordInput.value.trim();

  //   applying switch method //
  switch (word.length) {
    // Checks if the Input is empty //
    case 0:
      result.textContent = "Please enter a word";
      result.style.color = "gray";
      break;

    //   Checks if the input length is short

    case 1:
    case 2:
      result.textContent = "Too short";
      result.style.backgroundColor = "white";

      result.style.color = "red";
      break;

    //   Checks the input length is near to 5
    case 3:
    case 4:
      result.textContent = "Almost there...";
      result.style.backgroundColor = "white";

      result.style.color = "orange";
      break;

    //   checks if the user input perfect(5) length //
    case 5:
      result.textContent = "Perfect length!";
      result.style.backgroundColor = "white";
      result.style.color = "green";
      break;

    //   check greater than 5 words //
    default:
      result.textContent = "Too long!";
      result.style.backgroundColor = "white";

      result.style.color = "purple";
  }

  resetBtn.addEventListener("click", () => {
    wordInput.value = "";
    result.textContent = "";
  });
});
