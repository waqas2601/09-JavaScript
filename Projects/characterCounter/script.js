// get refrence

const inputBox = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

const maxChars = 20;

inputBox.setAttribute("maxlength", maxChars);

inputBox.addEventListener("input", () => {
  const currentLength = inputBox.value.length;
  const remaining = maxChars - currentLength;
  if (remaining === 0) {
    charCount.textContent = "limit reached";
  } else {
    charCount.textContent = `Characters left : ${remaining}`;
  }
});
