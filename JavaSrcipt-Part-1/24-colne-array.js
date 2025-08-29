// Array cloning

// Using slice

// let original = [1, 2, 3];
// let copy = original.slice();

// copy[0] = 99;

// console.log(original);
// console.log(copy);

// using spread operator ...

// let original = [1, 2, 3];
// let copy = [...original];

// copy[1] = 88;

// console.log(original);
// console.log(copy);

// using array.form()

let original = [1, 2, 3];
let copy = Array.from(original);

copy[2] = 77;

console.log(original);
console.log(copy);
