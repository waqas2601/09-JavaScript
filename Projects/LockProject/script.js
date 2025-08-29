// Get Refrences /////
const lockImg = document.getElementById("lock");
const passwordInput = document.getElementById("password");
const button = document.getElementById("check");

// Correct password which user put ///

const correctPassword = "2005";

// Add event to Unlock button ///

button.addEventListener("click", () => {
  const userInput = passwordInput.value;

  // If user input correct pass then show open lock img //

  if (userInput === correctPassword) {
    lockImg.src = "openLock.png";
  }
  // if user input wrong pass then shake the lock mean its wrong
  else {
    lockImg.classList.add("shake");

    // Animation time //\
    setTimeout(() => {
      lockImg.classList.remove("shake");
    }, 300);
  }
});
