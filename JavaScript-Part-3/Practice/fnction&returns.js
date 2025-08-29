// ===== Day 1: Functions & Returns =====

// 1) Function declaration: greet(name)
// TODO: return "Hello, <name>!"
function greet(name) {
  // your code
  return "Hello " + name;
}

// 2) Function expression: add(a, b)
// TODO: return the sum of a and b
const add = function (a, b) {
  // your code
  return a + b;
};

// 3) Arrow function: isEven(n)
// TODO: return true if n is even, otherwise false
const isEven = (n) => {
  // your code
  return n % 2 === 0;
};

// 4) maxOf3(a, b, c)
// TODO: return the largest of the three numbers
function maxOf3(a, b, c) {
  // your code
  return Math.max(a, b, c);
}

// 5) reverseString(str)
// TODO: return the reversed string (e.g. "abc" -> "cba")
function reverseString(str) {
  // your code
  return str.split("").reverse().join("");
}

// 6) sayHi() – no parameters
// TODO: return "Hi!"
function sayHi() {
  // your code
  return "Hi";
}

// ===== Quick Tests (check your console) =====
console.log("greet('Ali') →", greet("Ali")); // "Hello, Ali!"
console.log("add(3, 4) →", add(3, 4)); // 7
console.log("isEven(10) →", isEven(10)); // true
console.log("isEven(7) →", isEven(7)); // false
console.log("maxOf3(5, 9, 2) →", maxOf3(5, 9, 2)); // 9
console.log("reverseString('hello') →", reverseString("hello")); // "olleh"
console.log("sayHi() →", sayHi()); // "Hi!"
