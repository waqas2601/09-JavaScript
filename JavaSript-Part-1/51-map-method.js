// Map methods

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled);

// use arrow function \\

const names = ["waqas", "yaseen", "khan"];

const upperNames = names.map((name) => name.toUpperCase());

console.log(upperNames);

// Extract values from an array of objects/

const members = [
  { name: "Abdullah", age: 20 },
  { name: "Ahmad", age: 19 },
];
const namesOnly = members.map((member) => member.name);
console.log(namesOnly);

// another example

const users = [
  { firstName: "Waqas", secondName: "Khan" },
  { firstName: "Yaseen", secondName: "Jan" },
  { firstName: "Abdullah", secondName: "Baooooo" },
];

const endNames = users.map((user) => {
  return user.secondName;
});
console.log(endNames);
