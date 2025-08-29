// setTimeout //

console.log("Start");

setTimeout(() => {
  console.log("setTimeOut");
}, 2000);

console.log("End");

// Color Delay //
setTimeout(() => {
  document.body.style.backgroundColor = "lightblue";
}, 2000);

// Call back function Delay
function greet() {
  console.log("Welcome back!");
}

setTimeout(greet, 3000);



// Cancel setTimeout //

let timer = setTimeout(() => {
  console.log("This will never run");
}, 5000);

clearTimeout(timer); // Cancels it


const para = document.getElementById("para")
