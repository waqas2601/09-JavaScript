// Iterables

// only string and arrays are iterables not objects

// example of string

const myName = "Waqas";
for (let name of myName) {
  console.log(name);
}

// Example of array

const myArray = ["item1", "item2", "item3"];

for (let array of myArray) {
  console.log(array);
}

// Non iterables

const obj = {
  name: "Waqas",
  age: 20,
};

for (let item of obj) {
  console.log(item);
}
 
