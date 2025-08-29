// ===== Day 6: Objects (Basics) =====

// 1) createPerson(name, age)
// TODO: return an object with { name: name, age: age }
function createPerson(name, age) {
  // your code
  return { name: name, age: age };
}

// 2) getFullName(person)
// person = { firstName: "Ali", lastName: "Khan" }
// TODO: return "Ali Khan"
function getFullName(person) {
  // your code
  return person.firstName + person.lastName;
}

// 3) isAdult(person)
// person = { name: "Sara", age: 20 }
// TODO: return true if age >= 18, otherwise false
function isAdult(person) {
  // your code
  return person.age >= 18;
}

// 4) addProperty(obj, key, value)
// TODO: add key:value to the object and return updated obj
function addProperty(obj, key, value) {
  // your code
  obj[key] = value;
  return obj;
}

// 5) countKeys(obj)
// TODO: return how many keys (properties) the object has
function countKeys(obj) {
  // your code
  return Object.keys(obj).length;
}

// ===== Quick Tests =====
console.log("createPerson('Ali', 25) →", createPerson("Ali", 25));
// { name: "Ali", age: 25 }

console.log(
  "getFullName({firstName:'Ali', lastName:'Khan'}) →",
  getFullName({ firstName: "Ali", lastName: "Khan" })
); // "Ali Khan"

console.log(
  "isAdult({name:'Sara', age:20}) →",
  isAdult({ name: "Sara", age: 20 })
);
// true

console.log("addProperty({a:1}, 'b', 2) →", addProperty({ a: 1 }, "b", 2));
// {a:1, b:2}

console.log("countKeys({a:1, b:2, c:3}) →", countKeys({ a: 1, b: 2, c: 3 }));
// 3
