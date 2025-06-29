//  iterate objects

const person = {
  name: "Waqas",

  age: 22,
  city: "Mardan",
};

// method 1 \

// for (let key in person) {
//   console.log(key);
//   console.log(person[key]);
// }

// for method 2

for (let key of Object.keys(person)) {
  console.log(person[key]);
}
