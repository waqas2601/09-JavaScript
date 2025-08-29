// Objects

const person = {
  name: "Waqas",
  age: 20,
  isStudent: true,
};
console.log(person);

// Adding new Keypairs

person.gender = "male";
person.city = "Mardan";

// updating value
person.age = 21;

// deleting property

delete person.isStudent;
console.log(person);
