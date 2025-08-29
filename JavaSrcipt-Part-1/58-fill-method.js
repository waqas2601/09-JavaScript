// Fill method

// array.fill(value, start, end)

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// myArray.fill(0, 2, 5);
myArray.fill(0, 2);
console.log(myArray);

// create new array

const emptyArray = new Array(5).fill("Hello");

console.log(emptyArray);
