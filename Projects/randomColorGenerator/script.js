let myBox = document.querySelector("div");
let myBtn = document.querySelector("button");

myBtn.addEventListener("click", () => {
  // alert("hello world");
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  // console.log(`rgb(${red}, ${green}, ${blue})`);
  myBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
});
console.log(Math.random() * 256);

// const firstName = "Muhammad Waqas";
// const lastName = "Khan";

// // const fullName = firstName + lastName;

// console.log(`My name is : ${firstName} ${lastName}`);
// console.log("My name is", firstName, lastName);

// for (let i = 0; i < 10; i++) {
//   console.log("Hello world");
// }

// let i = 0;
// let num = 0
// while (i < 10) {
// //   console.log("Hello world");
//   num++;
//   console.log(num);
// //   i++;
// }
