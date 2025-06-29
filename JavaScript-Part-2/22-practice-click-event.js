// practice with click events

// changing color on click

// const buttons = document.querySelectorAll(".my-buttons button");

// for (const btn of buttons) {
//   btn.addEventListener("click", function () {
//     this.style.backgroundColor = "gray";
//     this.style.color = "yellow";
//   });
// }

// toggle color on click

// const buttons = document.querySelectorAll(".my-buttons button");

// for (const btn of buttons) {
//   btn.addEventListener("click", function () {
//     if (this.style.backgroundColor === "green") {
//       this.style.backgroundColor = "white";
//       this.style.color = "black";
//     } else {
//       this.style.backgroundColor = "green";
//       this.style.color = "white";
//     }
//   });
// }

// change text on hover

const buttons = document.querySelectorAll(".my-buttons button");

for (const btn of buttons) {
  btn.setAttribute("original", btn.textContent);

  btn.addEventListener("mouseover", function () {
    this.textContent = "Change on Hover";
  });

  btn.addEventListener("mouseout", function () {
    this.textContent = this.getAttribute("original");
  });
}
