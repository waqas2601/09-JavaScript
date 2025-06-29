// Click event on multiple buttons

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function () {
//   console.log("you clicked 1");
// });

// All buttons

// for of loop ////////////////
const allButtons = document.querySelectorAll(".my-buttons button");

// for (let button of allButtons) {
//   button.addEventListener("click", function () {
//     console.log("you clicked me");
//     this.style.backgroundColor = "lightblue";
//   });
// }

// for each ///////////////

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log(this.textContent + " clicked");
    this.style.backgroundColor = "purple";
  });
});
