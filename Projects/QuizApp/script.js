const store = [
  {
    storeQuestion: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    storeQuestion: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    storeQuestion: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    storeQuestion: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "1992",
    answer: "1995",
  },
];

const question = document.querySelector("h2");
const option1 = document.querySelector("#label1");
const option2 = document.querySelector("#label2");
const option3 = document.querySelector("#label3");
const option4 = document.querySelector("#label4");
const btn = document.querySelector("#submit");

const result = document.querySelector("#result");
const scoreTxt = document.querySelector("#score");
const resetBtn = document.querySelector("#reset");
const parent = document.querySelector(".parent");

let curentQstn = 0;

question.textContent = store[curentQstn].storeQuestion;
option1.textContent = store[curentQstn].ans1text;
option2.textContent = store[curentQstn].ans2text;
option3.textContent = store[curentQstn].ans3text;
option4.textContent = store[curentQstn].ans4text;

let score = 0;

btn.addEventListener("click", () => {
// Make sure the user do not submit empty MCQ 
  const select = document.querySelector('input[type="radio"]:checked');
  if (select === null) {
    alert("Select one option");
    // if there is no MCQ selected, the function will return 
    return;
  }
  
//   checking if the selceted MCQ is correct or wrong, if true then increment the score else not 
  if (store[curentQstn].answer === select.nextElementSibling.textContent) {
    score++;
  }

//   rendering next question by incrementing index in store 
  curentQstn++;


//   making sure the questions does not exceed the store array length 
  if (curentQstn < store.length) {
    question.textContent = store[curentQstn].storeQuestion;
    option1.textContent = store[curentQstn].ans1text;
    option2.textContent = store[curentQstn].ans2text;
    option3.textContent = store[curentQstn].ans3text;
    option4.textContent = store[curentQstn].ans4text; 
    // uncheck the radio button 
    select.checked = false;
  } else {
    scoreTxt.textContent = `Score is : ${score}`;
    parent.style.display = "none";
    result.style.display = "block";
  }
});
resetBtn.addEventListener("click", () => {
  location.reload();
});
