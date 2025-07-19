// // Get Refrence
// const body = document.querySelector("body");
// const btnBlack = document.getElementById("black");
// const btnGray = document.getElementById("gray");

// // Attaching event to btnBlack
// btnBlack.addEventListener("click", () => {
//   body.style.backgroundColor = "#000000";
//   body.style.color = "white";
// });

// // Attachig event to btnGray
// btnGray.addEventListener("click", () => {
//   body.style.backgroundColor = "white";
//   body.style.color = "black";
// });
// // console.log(body);

// Get refrences

const body = document.querySelector("body");
const btn = document.querySelector("button");
let isWhite = true;

console.log("Initial value of isWhite is : ", isWhite);

// btn.addEventListener("click",()=>{
//     isWhite = !isWhite;
//     console.log(isWhite);
// })

// Attaching event to btn
btn.addEventListener("click", () => {
  if (isWhite === true) {
    body.style.backgroundColor = "black";
    body.style.color = "white";



  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    // return;
  }

  console.log("Hello worldldlddd");
  console.log("Hello worldldlddd");

  console.log("Hello worldldlddd");

  console.log("Hello worldldlddd");

  console.log("Hello worldldlddd");

  console.log("Hello worldldlddd");

  console.log("Hello worldldlddd");

  console.log("Hello worldldlddd");

  console.log("Hello worldldlddd");

  console.log("Hello worldldlddd");

  console.log("Hello worldldlddd");

  isWhite = !isWhite;
});
// console.log(isWhite);
