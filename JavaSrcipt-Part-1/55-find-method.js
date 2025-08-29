// Find method

const numbers = [3, 7, 8, 10, 22];

const firstEven = numbers.find((num) => num % 2 === 0);

console.log(firstEven);

// find object from array

const users = [
  { id: 1, name: "Waqas" },
  { id: 2, name: "Khan" },
  { id: 3, name: "Ahmad" },
];

const user = users.find((u) => u.id === 2);

console.log(user);
