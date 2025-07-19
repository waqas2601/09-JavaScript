let myHeadig = document.querySelector("h1");
let myBtn = document.querySelector("button");
const name = "IqraKhanJan";
myBtn.addEventListener("click", () => {
  //   const myRndNm =
  //   console.log(myRndNm);
  //   myHeadig.textContent = Math.floor(Math.random() * 11);
  myHeadig.textContent = name[Math.floor(Math.random() * name.length)];
  //   console.log(name[3]);
});
