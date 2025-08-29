const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let current = "";
let resetDisplay = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    // Clear everything
    if (value === "AC") {
      current = "";
      display.textContent = "0";
      resetDisplay = false;
    }

    // Change sign
    else if (value === "+/-") {
      current = (parseFloat(current) * -1).toString();
      display.textContent = current;
    }

    // Percent
    else if (value === "%") {
      current = (parseFloat(current) / 100).toString();
      display.textContent = current;
    }

    // Equals
    else if (value === "=") {
      try {
        current = eval(current).toString();
        display.textContent = current;
        resetDisplay = true;
      } catch {
        display.textContent = "Error";
        current = "";
        resetDisplay = true;
      }
    }

    // Numbers and Operators
    else {
      // Clear "0" if it's the first number or after "="
      if (display.textContent === "0" || (resetDisplay && !isNaN(value))) {
        current = value;
        display.textContent = value;
        resetDisplay = false;
      }
      // If operator pressed after "=", continue
      else {
        current += value;
        display.textContent += value;
        resetDisplay = false;
      }
    }
  });
});
// console.log(parseFloat("123.3"));
