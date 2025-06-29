//  Objects inside array /

const users = [
  { userid: 1, firstName: "Waqas", gender: "male" },
  { userid: 2, firstName: "Yaseen", gender: "male" },
  { userid: 3, firstName: "Abdullah", gender: "male" },
];

for (let user of users) {
  console.log(user);
}

// 2nd example

const students = [
  { name: "Ali", age: 20 },
  { name: "Ayesha", age: 22 },
  { name: "Waqas", age: 21 },
];

for (let student of students) {
  console.log(`${student.name} is ${student.age} years old.`);
}

console.log(students[1].name);
