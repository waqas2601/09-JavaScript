// Get refrences /////
let myInput = document.querySelector("input");
let myBtn = document.querySelector("button");
let myHeading = document.getElementById("message");

// guessing the number

const myGuess = 8;

// to empty the input after user click check button
let str = "";

// attaching eventlistner on check button

myBtn.addEventListener("click", () => {
  // getting user input and converting to number for comparison becaz the input returns string
  const myInputValue = Number(myInput.value);
  console.log(typeof myInput.value);

  // validating user input so that he cannot submit something other than number
  if (isNaN(myInput.value)) {
    myHeading.textContent = "Only numbers are allowed";
    myHeading.style.color = "red";
    // clearing the input box
    myInput.value = str;
    return;
  }
  // check if user sumbit corect guesing number
  if (myGuess === myInputValue) {
    myHeading.textContent = "You Guess a right number";
    myHeading.style.color = "green";
  }

  // check if user input number less than 0
  else if (myInputValue < 0) {
    myHeading.textContent = "Number less than 0 is not allowed";
    myHeading.style.color = "Cyan";
  }
  // if the guess number is less than or equal to 5"
  else if (myInputValue <= 5) {
    myHeading.textContent = "Your guess number is too low!";
    myHeading.style.color = "blue";
  }
  // if the user input the number greater than 5 but less than 10 but not equal to 8
  else if (myInputValue > 5 && myInputValue <= 10 && myInputValue !== 8) {
    myHeading.textContent = "Your guess number is close";
    myHeading.style.color = "orange";
  }

  // check if user put any number greater than 10
  else {
    myHeading.textContent = "You Guess a wrong number";
    myHeading.style.color = "red";
  }

  // empty the input box
  myInput.value = str;
});
