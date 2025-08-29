// Practicing Basics //

// // 01 Function  if/else //

// function checkAge(age) {
//   if (age < 18) {
//     console.log("You are a minor");
//   } else {
//     console.log("You are an adult");
//   }
// }
// // Calling function
// checkAge(16);
// checkAge(20);

// // 02 for loop //

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // 03 Function expression //

// const add = function (a, b) {
//   return a + b;
// };
// console.log(add(5, 3));

// // 04 For Each on array //

// const fruits = ["apple", "banana", "cherry"];

// fruits.forEach(function (fruit) {
//   console.log("I like " + fruit);
// });

// // 05 Event listener //
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   alert("Button clicked");
// });

// 06 While loop //
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// 07 Arrow function //

const multiply = () => 5 * 5;
console.log(multiply());

// 08 Map method //

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled);

// 09 Toggle button text //
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  if (toggle.textContent === "ON") {
    toggle.textContent = "OFF";
  } else {
    toggle.textContent = "ON";
  }
});

// 10 form submission //

const myInput = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const userInput = myInput.value;
  console.log(userInput);
});
