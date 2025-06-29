// Reduce method

const numbers = [
  { name: "Product 1", price: "100" },
  { name: "Product 2", price: "200" },
  { name: "Product 3", price: "300" },
];

let ans = numbers.reduce((acc, currentVal) => {
  return acc + Number(currentVal.price);
}, 0);

const final = ans + 100;

console.log(final);

let someval = 10;
someval += 10; // ===  someval = someval + 10

console.log(someval);

let myAns = 0;

for (let i = 0; i <= 10; i++) {
  myAns += i;
}
console.log(myAns);

const array = [2, 3, 5, 67, 43, 7, 9, 6, 45];
const answer = array.reduce((accumulator, currentValue) => {
  return accumulator < currentValue ? currentValue : accumulator;
}, 0);
console.log(answer);

// counting values

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;

  return acc;
}, {});
console.log(count);
