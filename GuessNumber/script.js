let myInput = document.querySelector("input");
let myBtn = document.querySelector("button");
let myHeading = document.getElementById("message");
const myGuess = 8;

let str = "";

myBtn.addEventListener("click", () => {
  const myInputValue = Number(myInput.value);
  console.log(myInput.value);

  if (isNaN(myInput.value)) {
    myHeading.textContent = "Only numbers are allowed";
    myHeading.style.color = "red";
    myInput.value = str;
    return;
  }

  if (myGuess === myInputValue) {
    myHeading.textContent = "You Guess a right number";
    myHeading.style.color = "green";
  } else if (myInput.value <= 5) {
    myHeading.textContent = "Your guess number is too low!";
    myHeading.style.color = "blue";
  } else if (myInput.value > 5 && myInput.value <= 10 && myInput.value !== 8) {
    myHeading.textContent = "Your guess number is close";
    myHeading.style.color = "orange";
  } else {
    myHeading.textContent = "You Guess a wrong number";
    myHeading.style.color = "red";
  }
  myInput.value = str;
});
