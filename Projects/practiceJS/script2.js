// // Practice ///\
// // Checking Even //
// function chkNmbr(nmbr) {
//   if (nmbr % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }

// // Checking larger nmbr //
// chkNmbr(42453233);

// function largest(a, b) {
//   if (a > b) {
//     console.log(a + "is larger");
//   } else {
//     console.log(b + "is larger");
//   }
// }

// largest(25, 25);

// // Addition subtraction //

// function calculate(a, b, operator) {
//   if (operator === "+") {
//     console.log(a + b);
//   } else if (operator === "-") {
//     console.log(a - b);
//   } else {
//     console.log("invalid operator");
//   }
// }

// calculate(5, 3, "-");

// // Print items in array //

// const colors = ["red", "blue", "green"];

// colors.forEach((color) => {
//   console.log(color);
// });

// // console.dir(window);

// const heading = document.querySelector("h2");
// console.log(heading);

// heading.innerText = heading.innerText + " World";

// const box = document.getElementById("box");
// const btn = document.getElementById("btn");

// let count = 0;
// const max = 256;

// function colorLoop() {
//   if (count >= max) return;

//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);

//   box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   count++;
// //   console.log(`rgb(${red}, ${green}, ${blue})`);

//   setTimeout(colorLoop, 100); // Delay like a loop with gap
// }

// btn.addEventListener("click", () => {
//   count = 0; // Reset count if clicked again
//   colorLoop(); // Start loop
// });

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// countVowels("Hello World");

// let nums = [2, 4, 5, 6, 8];

// nums.forEach((num) => {
//   console.log(num * num);
// });

// // 01 if/else //
// function chkNmbr(number) {
//   if (number > 0) {
//     console.log(`${number} is positive`);
//   } else if (number < 0) {
//     console.log(`${number} is negative`);
//   } else {
//     console.log(`${number} is zero`);
//   }
// }

// chkNmbr(5);
// chkNmbr(-5);
// chkNmbr(0);

// // 02 for lopp //

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// // 03  function declaration //

// function multiply(a, b) {
//   return a * b;
// }

// let mul = multiply(4, 3);
// console.log(mul);
// // 04 addEventListener //
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   console.log("Button clicked");
// });

// // 05 Array .push() //

// let fruits = ["Apple", "Mango"];

// let push = fruits.push("Orange");
// console.log(fruits);

// // 06 Array .pop() //

// let fruits = ["Apple", "Banana", "Orange", "Grape"];

// let removeFruit = fruits.pop();
// console.log(fruits);

// // 07 switch statement //

// let dayOfWeek = new Date().getDay();

// let dayName;

// switch (dayOfWeek) {
//   case 0:
//     dayName = "Sunday";
//     break;
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// console.log(`Today is ${dayName}`);

// // 08 setTimeout() //

// setTimeout(() => {
//   console.log("This message appears after 2 seconds");
// }, 2000);

// // 09 typeof Operator //
// console.log(typeof 123);
// console.log(typeof "hello");
// console.log(typeof true);

// // 10 innerHTML //\

// const myDiv = document.getElementById("div");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   myDiv.innerHTML = "Welcome";
// });

// Guess the Number //

const input = document.getElementById("guess");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

const myNmbr = 5;

btn.addEventListener("click", () => {
  const userNmbr = Number(input.value);

  console.log(userNmbr);

  if (isNaN(userNmbr)) {
    result.textContent = "Please enter a valid number";
    input.value = "";
    return;
  }

  if (userNmbr === myNmbr) {
    result.textContent = "You guess a right number";
  } else if (userNmbr > 5) {
    result.textContent = "You guess a high number";
  } else {
    result.textContent = "You guess a low number";
  }
  input.value = "";
});
