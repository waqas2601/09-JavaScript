const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector("p");

// Check when button is clicked
button.addEventListener("click", checkOddEven);

// Check when Enter key is pressed
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkOddEven();
  }
});

// Function to check odd or even
function checkOddEven() {
  const value = input.value.trim();

  if (value === "") {
    result.textContent = "Please enter a number.";
    result.style.color = "orange";
  } else if (isNaN(value)) {
    result.textContent = "That's not a valid number!";
    result.style.color = "red";
  } else if (Number(value) % 2 === 0) {
    result.textContent = "Even Number ✅";
    result.style.color = "green";
  } else {
    result.textContent = "Odd Number 🔢";
    result.style.color = "blue";
  }
}
