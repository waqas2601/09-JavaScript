// Sets

// const mySet = new Set();

// with values

// const numbers = new Set([1, 2, 3]);

const names = new Set();

names.add("Waqas");
names.add("Ahmad");
names.add("Waqas");

console.log(names);

// check values

console.log(names.has("Ahmad"));
console.log(names.has("Khan"));

// dlete

names.delete("Ahmad");
console.log(names);

// clear

names.clear();
console.log(names);

// loop over set

const items = new Set(["apple", "banana", "mango"]);

for (let item of items) {
  console.log(item);
}

// remove duplicates from array

const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);
