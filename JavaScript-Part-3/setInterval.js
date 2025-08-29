// setInterval //
let id = setInterval(() => {
  console.log("repeat after every 2 seconds");
}, 2000);

// console.log(id);
// Stop after 6 seconds
setTimeout(() => {
  clearInterval(id); // Stop the repeating
  console.log("Interval stopped!");
}, 6000);

// Practice //
let count = 10;
let timer = setInterval(() => {
  document.getElementById("count").textContent = count;
  count--;

  if (count < 0) {
    clearInterval(timer);
    document.getElementById("count").textContent = "Times up";
  }
}, 1000);
