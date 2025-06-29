// intro to events

// 1st method in html tags (not usable)

// 2nd method (not recommended)

const btn = document.querySelector(".btn-headline");
// console.dir(btn);

// btn.onclick = function () {
//   console.log("you clicked me");
// };

// 3rd method (Usable)

// btn,
//   addEventListener("click", function () {
//     console.log("Clicked using addEventListner");
//   });

// btn.addEventListener("click", () => {
//   console.log("Using arrow function");
// });

// to change the text

// const btn = document.querySelector(".btn-headline");

const heading = document.getElementById("main-heading");

btn.addEventListener("click", () => {
  heading.textContent = "you clicked the button";
});
console.dir(btn);
