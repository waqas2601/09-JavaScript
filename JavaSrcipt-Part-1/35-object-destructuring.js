//  object destructuring /

const person = {
  name: "Waqas",
  age: 20,
  city: "Mardan",
};

// destructuring

const { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);

// if key doesnt exist

const user = {
  username: "admin",
};

const { username, role = "guest" } = user;
console.log(role);
