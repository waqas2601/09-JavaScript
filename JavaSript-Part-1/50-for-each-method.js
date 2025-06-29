// ForEach Method

const names = ["Waqas", "Yaaseen", "Khan"];

names.forEach(function (name) {
  console.log("Hello " + name);
});

// 2nd example

// var books = ["book 1", "book2", "book3", "book4"];
// books.forEach(function (value, index, array) {
//   console.log(`Ali is Reading: ${value}`);
//   console.log(`This Book is located on index : ${index}`);
//   console.log(`The elements taken from this Array : [${array}]`);
// });

// Example with index

const numbers = [10, 20, 30];

numbers.forEach(function (num, i) {
  console.log("index " + i + " " + num);
});

// Using Arrow function

const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((fruit) => {
  console.log("Big " + fruit);
});
