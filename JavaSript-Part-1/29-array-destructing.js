// Array destructing

const myArray = ["value1", "value2"];

let [myvar1, myvar2] = myArray;

console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);

// 2nd example

const color = ["Red", "Green", "Blue"];

const [first, second, third] = color;

console.log(first, second, third);

// skip Elemens

const nums = [1, 2, 3, 4];

const [one, , three] = nums;

console.log(one);
console.log(three);
