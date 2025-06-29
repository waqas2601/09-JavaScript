// Event bubbling and Event capturing

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".grandparent");
const child = document.querySelector(".grandparent");

// Capturing /////////////

grandparent.addEventListener(
  "click",
  () => {
    console.log("grandparent captured");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log("parent captured");
  },
  true
);

child.addEventListener(
  "click",
  () => {
    console.log("child captured");
  },
  true
);

// Bubbling //////////////

child.addEventListener("click", () => {
  console.log("you clicked on child");
});
parent.addEventListener("click", () => {
  console.log("you clicked on parent");
});
grandparent.addEventListener("click", () => {
  console.log("you clicked on grandparent");
});
