// Get Refrences //

const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength");

//  Add keyup event to check password every time user types  //

passwordInput.addEventListener("keyup", () => {
  const password = passwordInput.value;

  // Regular expressions for checking
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test (password);

  // Check password strength
  if (password.length === 0) {
    strengthText.textContent = "Strength:";
    strengthText.style.color = "white";
  } else if (password.length < 4) {
    strengthText.textContent = "Strength: Very Weak";
    strengthText.style.color = "red";
  } else if (hasLetters && hasNumbers && hasSymbols && password.length >= 8) {
    strengthText.textContent = "Strength: Strong";
    strengthText.style.color = "green";
  } else if (
    (hasLetters && hasNumbers) ||
    (hasLetters && hasSymbols) ||
    (hasNumbers && hasSymbols)
  ) {
    strengthText.textContent = "Strength: Medium";
    strengthText.style.color = "orange";
  } else {
    strengthText.textContent = "Strength: Weak";
    strengthText.style.color = "tomato";
  }
});
