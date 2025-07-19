// Start the count at 0
let count = 0;

// Get the elements from HTML
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// When Increase button is clicked
increaseBtn.addEventListener("click", () => {
  count++; // add 1
  countDisplay.textContent = count; // show new count
});

// When Decrease button is clicked
decreaseBtn.addEventListener("click", () => {
  if (count === 0) {
    return;
  }
  count--; // subtract 1
  countDisplay.textContent = count;
});

// When Reset button is clicked
resetBtn.addEventListener("click", () => {
  count = 0; // back to zero
  countDisplay.textContent = count;
});
