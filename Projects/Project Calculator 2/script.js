let display = document.getElementById("inputBox");

let buttons = document.querySelectorAll("button");

let buttonArray = Array.from(buttons);

let string = "";

buttonArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log("You clicked:", e.target.innerHTML);
    console.log("Current string is:", string);

    if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    } else {
      const operators = ["+", "-", "*", "/", "%"];
      let lastChar = string[string.length - 1];
      let currentChar = e.target.innerHTML;

      if (operators.includes(lastChar) && operators.includes(currentChar)) {
        return;
      }

      string += currentChar;
      display.value = string;
      display.scrollLeft = display.scrollWidth;
    }
  });
});
