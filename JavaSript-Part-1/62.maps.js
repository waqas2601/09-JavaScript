// Maps

const person1 = {
  id: 1,
  firstName: "Waqas",
};

const userInfo = new Map();
userInfo.set(person1, { age: 20, gender: "male" });
console.log(userInfo);

// Add values with .set() and get with .get() \\

const person = new Map();

person.set("name", "Waqas");
person.set("age", 20);

person.set(100, "One Hundered");

console.log(person.get("name"));
console.log(person.get(100));

// Use objects as keys

const user = { id: 1 };
const details = new Map();

details.set(user, { name: "Ahmad", age: 21 });
console.log(details.get(user));

// Loop over Map

const scores = new Map([
  ["Yaseen", 85],
  ["Umair", 92],
  ["Shah", 78],
]);

for (let [key, value] of scores) {
  console.log(`${key}: ${value}`);
}
