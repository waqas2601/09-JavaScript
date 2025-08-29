const fortunes = [
  "You will have a great day!",
  "A surprise is waiting for you.",
  "Good news will come to you soon.",
  "Happiness is around the corner.",
  "Something wonderful is about to happen.",
  "A fresh start will put you on your way.",
  "An exciting opportunity lies ahead.",
  "Trust your instincts.",
  "A dream you have will come true.",
  "Success is in your future!",
];

const cookie = document.getElementById("cookie");
const fortuneText = document.getElementById("fortune");
const btn = document.getElementById("generateBtn");

const image1 = "cookie1.png";
const image2 = "cookie6.webp";

btn.addEventListener("click", () => {
  if (!cookie.src.includes(image2)) {
    // Closed -> open + show fortune
    cookie.src = image2;
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];
    fortuneText.textContent = randomFortune;
  } else {
    // Open -> closed
    cookie.src = image1;
  }
});
