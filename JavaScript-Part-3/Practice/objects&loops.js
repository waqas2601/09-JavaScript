// ===== Day 4: Objects & Loops =====

// 1) makePerson(name, age)
// TODO: return an object with properties { name: name, age: age }
function makePerson(name, age) {
  // your code
  return { name, age };
}

// 2) getKeys(obj)
// TODO: return an array of keys of the object
function getKeys(obj) {
  // your code
  return Object.keys(obj);
}

// 3) getValues(obj)
// TODO: return an array of values of the object
function getValues(obj) {
  // your code
  return Object.values(obj);
}

// 4) countProperties(obj)
// TODO: return how many properties the object has
function countProperties(obj) {
  // your code
  return Object.keys(obj).length;
}

// 5) cloneObject(obj)
// TODO: return a shallow copy of obj
function cloneObject(obj) {
  // your code
  return { ...obj };
}

// ===== Quick Tests =====
console.log("makePerson('Ali', 20) →", makePerson("Ali", 20));
// { name: "Ali", age: 20 }

console.log("getKeys({a:1,b:2}) →", getKeys({ a: 1, b: 2 }));
// ["a", "b"]

console.log("getValues({a:1,b:2}) →", getValues({ a: 1, b: 2 }));
// [1, 2]

console.log(
  "countProperties({a:1,b:2,c:3}) →",
  countProperties({ a: 1, b: 2, c: 3 })
);
// 3

console.log("cloneObject({x:10,y:20}) →", cloneObject({ x: 10, y: 20 }));
// {x:10,y:20}
