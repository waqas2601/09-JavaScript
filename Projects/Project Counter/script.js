// Initialize count if not present in localStorage
if (localStorage.getItem("localStorageCount") === null) {
  localStorage.setItem("localStorageCount", "0");
}

// Get count from localStorage and display it
let count = Number(localStorage.getItem("localStorageCount"));
console.log(count);
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

countDisplay.textContent = count;

// Increase
increaseBtn.addEventListener("click", () => {
  count++;
  localStorage.setItem("localStorageCount", count);
  countDisplay.textContent = count;
});

// Decrease
decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    localStorage.setItem("localStorageCount", count);
    countDisplay.textContent = count;
  }
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  localStorage.setItem("localStorageCount", count);
  countDisplay.textContent = count;
});
