// Get Refrences //
const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const dobValue = dobInput.value;

  if (!dobValue) {
    result.textContent = "Please select your date of birth";
    return;
  }

  const dobDate = new Date(dobValue);
  const today = new Date();

  let years = today.getFullYear() - dobDate.getFullYear();
  let months = today.getMonth() - dobDate.getMonth();
  let days = today.getDate() - dobDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }
  result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});
