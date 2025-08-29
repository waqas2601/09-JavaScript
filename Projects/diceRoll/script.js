// Get Refrences //

const dice = document.getElementById("dice");
const rollBtn = document.getElementById("rollBtn");
const message = document.getElementById("message");

// Array of dice faces //

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// Add event to rollBtn //

rollBtn.addEventListener("click", () => {
  // Generate random number //
  const randomNumber = Math.floor(Math.random() * 6);

  dice.textContent = diceFaces[randomNumber];

  //   Display text on if else conditions

  if (randomNumber === 5) {
    message.textContent = "Yehhh you got sixer";
    message.style.color = "green";
  } else if (randomNumber === 0) {
    message.textContent = "O o you got 1 saddd";
    message.style.color = "red";
  } else {
    message.textContent = `Nice you got ${randomNumber + 1}.`;
    message.style.color = "black";
  }
});
