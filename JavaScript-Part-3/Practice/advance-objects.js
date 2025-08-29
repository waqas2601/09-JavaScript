// ===== Day 7: Objects (Intermediate) =====

// 1) getValues(obj)
// TODO: return an array of all values in the object
function getValues(obj) {
  // your code
  return Object.values(obj);
}

// 2) hasKey(obj, key)
// TODO: return true if the object contains the given key
function hasKey(obj, key) {
  // your code
  return obj.hasOwnProperty(key);
}

// 3) mergeObjects(obj1, obj2)
// TODO: return a new object that combines obj1 and obj2
function mergeObjects(obj1, obj2) {
  // your code
  return { ...obj1, ...obj2 };
}

// 4) getNestedValue(obj, key1, key2)
// TODO: return obj[key1][key2] (if it exists)
function getNestedValue(obj, key1, key2) {
  // your code
  return obj[key1]?.[key2];
}

// 5) objectToArray(obj)
// TODO: convert object to array of [key, value] pairs
function objectToArray(obj) {
  // your code
  return Object.entries(obj);
}

// ===== Quick Tests (check your console) =====
console.log("getValues({a:1, b:2, c:3}) →", getValues({ a: 1, b: 2, c: 3 }));
console.log("hasKey({a:1, b:2}, 'b') →", hasKey({ a: 1, b: 2 }, "b"));
console.log("mergeObjects({a:1}, {b:2}) →", mergeObjects({ a: 1 }, { b: 2 }));
console.log(
  "getNestedValue({user:{name:'Ali'}}, 'user', 'name') →",
  getNestedValue({ user: { name: "Ali" } }, "user", "name")
);
console.log("objectToArray({a:1, b:2}) →", objectToArray({ a: 1, b: 2 }));
