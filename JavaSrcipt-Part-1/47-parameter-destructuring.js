// Parameter destructuring

// Used in objects

const person = {
  name: "Waqas",
  age: 22,
  city: "Mardan",
};

function printPerson({ name, age, city }) {
  console.log("Name", name);
  console.log("Age", age);
  console.log("City", city);
}

printPerson(person);

// used in array

const colors = ["red", "green", "blue"];

function printColors([first, second]) {
  console.log("First color", first);
  console.log("Second color", second);
}

printColors(colors);
