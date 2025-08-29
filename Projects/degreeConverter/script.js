// Get refrences //
const tempInput = document.getElementById("tempInput");
const unit = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// Function to convert temperature
// function convertTemperature(temp, type) {
//   if (type === "toC") {
//     return ((temp - 32) * 5) / 9;
//   } else {
//     return (temp * 9) / 5 + 32;
//   }
// }

// Event listener for button
// convertBtn.addEventListener("click", () => {
//   const temperature = parseFloat(tempInput.value);
//   const selectedUnit = unit.value;

//   if (isNaN(temperature)) {
//     result.textContent = " Please enter a valid number.";
//     return;
//   }

//   const converted = convertTemperature(temperature, selectedUnit);

//   if (selectedUnit === "toC") {
//     result.textContent = `${converted.toFixed(2)} °C`;
//   } else {
//     result.textContent = `${converted.toFixed(2)} °F`;
//   }
// });

convertBtn.addEventListener("click", () => {
  const temp = parseFloat(tempInput.value);
  const type = unit.value;
  console.log(type);

  if (isNaN(temp)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let converted;

  if (type === "toC") {
    converted = ((temp - 32) * 5) / 9;
    result.textContent = `${converted.toFixed(2)} °C`;
  } else {
    converted = (temp * 9) / 5 + 32;
    result.textContent = `${converted.toFixed(2)} °F`;
  }
});
