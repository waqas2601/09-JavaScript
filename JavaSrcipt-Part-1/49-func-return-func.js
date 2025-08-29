// Function returning function

function outer() {
  function inner() {
    console.log("Hello from inner function");
  }
  return inner;
}

const result = outer();
result();

// 2nd example

function myFunc() {
  return 1;
}

const ans = myFunc();

console.log(ans);

// return function with arguments

function seeYou(goodbye) {
  return function (name) {
    console.log(goodbye + name);
  };
}

const sayBye = seeYou("Bye Bye ");
sayBye("Waqas");
