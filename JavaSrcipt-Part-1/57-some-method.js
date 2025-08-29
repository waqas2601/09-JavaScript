// Some method

const numbers = [3, 5, 6, 9];

// is any of one number is even lets check

const ans = numbers.some((number) => number % 2 === 0);
console.log(ans);

// 2nd Example underage check

// is any of them is underage

const users = [
  { name: "Waqas", age: 20 },
  { name: "Ahmad", age: 17 },
  { name: "Ayaan", age: 25 },
];

const hasUnderage = users.some((user) => user.age < 18);

console.log(hasUnderage);
