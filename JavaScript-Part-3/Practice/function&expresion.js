// ===== Day 2: Function Expressions & Arrow Functions =====

// Original declarations:
function greet(name) {
  return "Hello, " + name + "!";
}
function add(a, b) {
  return a + b;
}
function isEven(n) {
  return n % 2 === 0;
}

// 1) Function expressions
const greetExpr = function (name) {
  return "Hello, " + name + "!";
};
const addExpr = function (a, b) {
  return a + b;
};
const isEvenExpr = function (n) {
  return n % 2 === 0;
};

// 2) Arrow functions
const greetArrow = (name) => "Hello, " + name + "!";
const addArrow = (a, b) => a + b;
const isEvenArrow = (n) => n % 2 === 0;

// 3) Arrow with one parameter & implicit return
const toUpper = (str) => str.toUpperCase();

// 4) Arrow returning object (wrap in parentheses!)
const getUser = (name, age) => ({ name: name, age: age });

// 5) Arrow with no parameters
const now = () => new Date().getFullYear();

// ===== Quick Tests =====
console.log("--- Function Expressions ---");
console.log(greetExpr("Ali")); // "Hello, Ali!"
console.log(addExpr(3, 4)); // 7
console.log(isEvenExpr(10)); // true

console.log("--- Arrow Functions ---");
console.log(greetArrow("Sara")); // "Hello, Sara!"
console.log(addArrow(5, 6)); // 11
console.log(isEvenArrow(7)); // false
console.log(toUpper("javascript")); // "JAVASCRIPT"
console.log(getUser("Ayan", 18)); // { name: "Ayan", age: 18 }
console.log(now()); // e.g., 2025
