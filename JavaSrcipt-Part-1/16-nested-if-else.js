//  nested if else

let winnigNumber = 20;
let userGuess = +prompt("Guess a number");

if (userGuess === winnigNumber) {
  console.log("Your guess is right!");
} else {
  if (userGuess < winnigNumber) {
    console.log("too low!");
  } else {
    console.log("too high!");
  }
}

// We are nesting ifelse inside else this is why it is called nested ifelse

// 2nd exaple \

// let name = prompt("Enter your name here");

// if (name === "Waqas") {
//   console.log("Its Your First Name");
// } else {
//   if (name === "Khan") {
//     console.log("Its Your 2nd Name");
//   } else {
//     console.log("You are wrong");
//   }
// }
