//  this keyword

const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click", function () {
//   console.log("you clicked me");
//   console.log("value of this");
//   console.log(this);
//   this.style.backgroundColor = "green";
// });

// in arrow function

// const btn = document.querySelector("btn");

btn.addEventListener("click", () => {
  console.log(this); //  refers to outer `this`, not the button!
});
