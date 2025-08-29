// Filter method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const isEven = function (number) {
  return number % 2 === 0;
};

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

// Using arrow function

const ages = [15, 16, 18, 21, 25, 22];

const adults = ages.filter((age) => age >= 18);

console.log(adults);

// filter from array objects

const users = [
  { name: "Waqas", active: true },
  { name: "Ahmad", active: false },
  { name: "Khan", active: true },
];

const activeUsers = users.filter((user) => user.active);

console.log(activeUsers);
