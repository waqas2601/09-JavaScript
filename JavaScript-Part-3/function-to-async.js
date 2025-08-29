// Functions //////////////////////
// function mul(a, b) {
//   return a + b;
// }

// let result = mul(4, 4);
// console.log(result);

// // 2nd example //
// function welcome(name) {
//   console.log("Welcome to JavaScript " + name);
// }
// welcome("Waqas");

// setTimeout with function ////////////////////
// function greet() {
//   console.log("Hello after 3 seconds!");
// }

// setTimeout(greet, 3000);

// setInterval (Runs repeatedly) ///////////////

// let count = 1;
// let timerId = setInterval(() => {
//   console.log(count++);

//   //   stops after 10 counts //
//   if (count > 5) {
//     clearInterval(timerId);
//   }
// }, 1000);

// CallBack Asynchronus ///////////////
// function cook(CallBack) {
//   console.log("Cooking");
//   setTimeout(() => {
//     console.log("Done cooking");
//     CallBack();
//   }, 2000);
// }

// function eat() {
//   console.log("Eating now");
// }
// cook(eat);

// CallBack Hell ///////////////////////////
// cook(function () {
//   eat(function () {
//     wash(function () {
//       console.log("All done!");
//     });
//   });
// });

// function cook(callback) {
//   console.log("Cooking...");
//   setTimeout(() => {
//     console.log("Done cooking!");
//     callback();
//   }, 1000);
// }

// function eat(callback) {
//   console.log("Eating...");
//   setTimeout(() => {
//     console.log("Done eating!");
//     callback();
//   }, 1000);
// }

// function wash(callback) {
//   console.log("Washing dishes...");
//   setTimeout(() => {
//     console.log("Dishes washed!");
//     callback();
//   }, 1000);
// }

// Promises fix callback hell //////////////////
// cook()
//   .then(eat)
//   .then(wash)
//   .then(() => console.log("All done!"))
//   .catch((err) => console.log("Error:", err));

// function cook() {
//   return new Promise((resolve) => {
//     console.log("Cooking...");
//     setTimeout(() => {
//       console.log("Done cooking!");
//       resolve();
//     }, 1000);
//   });
// }

// function eat() {
//   return new Promise((resolve) => {
//     console.log("Eating...");
//     setTimeout(() => {
//       console.log("Done eating!");
//       resolve();
//     }, 1000);
//   });
// }

// function wash() {
//   return new Promise((resolve) => {
//     console.log("Washing dishes...");
//     setTimeout(() => {
//       console.log("Dishes washed!");
//       resolve();
//     }, 1000);
//   });
// }

// Fetch API with promises //////////////////

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Got the data ", data);
//   })
//   .catch((error) => {
//     console.log("Error ", error);
//   });

//   Async/Await ////////////////////////////
async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    //  Wait for fetch
    const data = await response.json(); //  Wait for JSON conversion
    console.log(data); //  Use the data
  } catch (error) {
    console.error("Error:", error); // Handle any errors
  }
}

getPost();
