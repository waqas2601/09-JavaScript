// Get Refrences //
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const btn = document.getElementById("calculateBtn");
const result = document.getElementById("result");
// Add eventListener on btn //

btn.addEventListener("click", () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.textContent = "Please enter valid height and weight.";
    result.style.color = "red";
    return;
  }

  const bmi = weight / (height * height);
  const bmiFixed = bmi.toFixed(2);
  let message = "";

  if (bmi < 18.5) {
    message = "You are underweight.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    message = "You have a normal weight.";
  } else if (bmi >= 25 && bmi < 29.9) {
    message = "You are overweight.";
  } else {
    message = "You are obese.";
  }

  result.textContent = `Your BMI is ${bmiFixed}. ${message}`;
  result.style.color = "#333";
});
