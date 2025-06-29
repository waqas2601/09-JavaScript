// difference between dot and brcket notation

const key = "email";

const person = {
  name: "Ali",
  age: 20,
  // bracket notation
  "person hobbies": ["coding", "sleeping", "playing"],
};

// console.log(person["person hobbies"]);

person[key] = "mw2601005@gmail.com";
console.log(person);
