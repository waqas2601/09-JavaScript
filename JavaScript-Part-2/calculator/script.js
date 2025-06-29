const allBtns = document.querySelectorAll(".btn");
const input = document.querySelector("input");

let valueToBeCalculatedInside = "";

let valueToBeShownInInput = "";
input.value = "0";

allBtns.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.textContent === "C") {
      valueToBeShownInInput = "";
      input.value = "";
      return;
    } else if (ele.textContent === "=") {
      valueToBeCalculatedInside = eval(valueToBeShownInInput);
      console.log(valueToBeCalculatedInside);
      valueToBeShownInInput = valueToBeCalculatedInside.toString();
      input.value = valueToBeShownInInput;
      return;
    }

    valueToBeShownInInput += ele.textContent;
    console.log(valueToBeShownInInput);
    input.value = valueToBeShownInInput;
  });
});
