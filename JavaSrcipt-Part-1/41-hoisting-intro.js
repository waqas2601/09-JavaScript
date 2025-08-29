// Hoisting intro

// Hoisting (Later will be discussed)
// Explanation

// We will create a simple function
// function hello(){
//     console.log("Hello World");
// }
// hello();//OutPut: Hello World

// Now if we call the function above the function then it will stil work
// hello();//OutPut: Hello World
// function hello(){
//     console.log("Hello World");
// }

/* This thing happens only in 'function declaration', and if we do the same in 'function expression' or 'arrow function' the it will create a problem*/

//For example (Function expression):

hello(); //Output: Error
var hello = function () {
  console.log("Hello World");
};

// For Example (Arrow Function)

hello(); //OutPut: Error
var hello = () => console.log("Hello World");
