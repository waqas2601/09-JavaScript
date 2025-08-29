// callBacks in general //

// function greet(name) {
//   console.log("Hello " + name);
// }
// function userName(callback) {
//   let user = "Waqas";
//   callback(user);
// }

// userName(greet);

// // another example //
// setTimeout(() => {
//   console.log("This is a callback after 2 seconds");
// }, 2000);

// example //
// function handleClick(callback) {
//   document.getElementById("output").textContent = "Button clicked";

//   // Now run the calback //
//   callback();
// }

// function showCallbackMessage() {
//   console.log("This is a callback function");
//   alert("This is a call back function");
// }

// document.getElementById("myBtn").addEventListener("click", () => {
//   handleClick(showCallbackMessage,"Waqas",21);
// });

// function sayMyName(gettingNameHere, gettingAgeHere) {
//     console.log("Name is : ", gettingNameHere);
//     console.log("Getting age here : ", gettingAgeHere);
// }

// sayMyName(name,age);

// const name = "Waqas";
// const age = 12;
// function someCallBack() {
//   const result = 2 + 2;
//   return result;
// }

// function callingTheCallbackinside(myCallBack, recievedName, recievedAge) {
//   console.log(recievedName);
//   console.log(recievedAge);
//   const finalResultFromCallback = myCallBack();
//   console.log(finalResultFromCallback);
// }

// callingTheCallbackinside(someCallBack, name, age);

// function addEventListener(eventName, theCallBackWeRecieved){
//     console.log("Event Name is :", eventName);
//     theCallBackWeRecieved();
// }

// addEventListener("evetName", ()=>{
//     console.log("I'm the custom callback")
// })

// const result = 2 + 4;
// console.count(result);

// const result2 = 4 + 4;
// console.log(result);

// const result3 = 3 + 3;
// console.log(result3);

// function addSum(a, b){
//     const result = a + b;
//     console.log(result);
// }

// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);
// addSum(2,4);

// const firstNum = 6;
// const seconNum = 2;

// const finalResult = firstNum + seconNum;

// console.log(finalResult);

// const myBtn = document.getElementById("myBtn");
// myBtn.addEventListener()

// console.log(window);

// function makeTea(callback) {
//   console.log("Making tea...");

//   // Simulate tea-making delay using setTimeout
//   setTimeout(() => {
//     console.log("Tea is ready!");
//   }, 0);

//   for (let i = 0; i < 10000; i++) {
//     console.log(i);
//   }

//   console.log("Hello world");
// }

// function drinkTea() {
//   console.log("Drinking the tea now ☕");
// }

// makeTea(drinkTea);

// example ///

function cook(callback) {
  console.log("Cooking");
  setTimeout(() => {
    callback();
  }, 2000);
}

function eat() {
  console.log("Eating");
}
cook(eat);


