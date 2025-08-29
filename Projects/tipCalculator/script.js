// Get refrences of elements //

const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

// Add event to button //

calculateBtn.addEventListener("click", () => {
  // Get values from input //
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  // check if input are valid //

  if (isNaN(bill) || isNaN(tipPercent)) {
    result.textContent = "please enter valid numbers";
    return;
  }

  //   Now Calculate tip and total //

  const tipAmount = (bill * tipPercent) / 100;
  const total = bill + tipAmount;

  // Show result //
  result.textContent = `Tip: ${tipAmount} | Total: ${total}`;
});
