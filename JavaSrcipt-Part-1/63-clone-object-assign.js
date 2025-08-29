// Clone using object assign

const obj = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.assign({}, obj);

obj.key3 = "value3";
console.log(obj);
console.log(obj2);

// 2nd example

const original = {
  name: "Waqas",
  age: 20,
};

const clone = Object.assign({}, original);

console.log(clone);

console.log(clone === original);
