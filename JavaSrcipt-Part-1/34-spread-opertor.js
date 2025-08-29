//  spread operator \

// in Arrays
const array1 = [1, 2, 3];

const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2, 88, 68];

const newArray = [..."123456789"];

console.log(newArray);

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

console.log(moreNumbers);

// in Objects /

const student = { name: "Ali", age: 22 };

const newStudent = { ...student, city: "Mardan" };

console.log(newStudent);
