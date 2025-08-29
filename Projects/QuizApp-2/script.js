const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Paris", "Madrid", "Rome"],
    correct: "Paris",
  },
  {
    question: "Which language runs in the browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Computer Style Sheets",
    ],
    correct: "Cascading Style Sheets",
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElemexntById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function showQuestion() {
  // Reset
  answersEl.innerHTML = "";
  nextBtn.disabled = true;

  const current = questions[currentQuestion];
  questionEl.textContent = current.question;

  current.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.addEventListener("click", () => selectAnswer(btn, current.correct));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(button, correctAnswer) {
  const allButtons = answersEl.querySelectorAll("button");

  allButtons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.style.background = "#4CAF50"; // Green
    } else if (btn === button) {
      btn.style.background = "#f44336"; // Red
    }
  });

  if (button.textContent === correctAnswer) {
    score++;
  }

  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = `Quiz Completed! Your score: ${score}/${questions.length}`;
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
}

// Start the quiz
showQuestion();
