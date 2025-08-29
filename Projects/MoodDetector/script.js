// Get refrences ////

const moodSelector = document.getElementById("moodSelector");
const emoji = document.getElementById("emoji");
const message = document.getElementById("message");

// Add event when user chnages the mood //
moodSelector.addEventListener("change", () => {
  const selectedMood = moodSelector.value;

  switch (selectedMood) {
    case "happy":
      emoji.textContent = "😊";
      message.textContent = "Yay! Keep smiling!";
      document.body.style.backgroundColor = "#ffe066";
      break;

    case "sad":
      emoji.textContent = "😢";
      message.textContent = "It’s okay to feel sad. Take your time.";
      document.body.style.backgroundColor = "#87b5ff"; 
      break;

    case "angry":
      emoji.textContent = "😡";
      message.textContent = "Take a deep breath. You got this!";
      document.body.style.backgroundColor = "#ff9999";
      break;

    case "excited":
      emoji.textContent = "🤩";
      message.textContent = "Awesome! Go rock it!";
      document.body.style.backgroundColor = "#baffc9"; 
      break;

    default:
      emoji.textContent = "";
      message.textContent = "";
      document.body.style.backgroundColor = "#f4f4f4";
  }
});
