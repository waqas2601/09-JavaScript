// Optional chaining

const user = {
  name: "Waqas",
  adress: {
    city: "Mardan",
  },
};

console.log(user.adress?.city);
console.log(user.adress?.zip);
console.log(user.contact?.phone);
console.log(user?.name);

// with method

// const person = {
//   greet() {
//     return "Hello!";
//   },
// };

// console.log(person.greet?.());
// console.log(person.sayHi?.());

// // With method

// const person = {
//   greet() {
//     return "Hello!";
//   },
// };

console.log(person.greet?.());
console.log(person.sayHi?.());

// In arrays

const data = {
  users: [{ name: "Ali" }],
};

console.log(data.users?.[0]?.name);
console.log(data.users?.[1]?.name);
