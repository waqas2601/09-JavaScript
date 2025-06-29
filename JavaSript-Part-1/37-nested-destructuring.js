// Nested Destructuring /

const students = [
  { name: "iqra", marks: { math: 90, english: 85 } },
  { name: "Waqas", marks: { math: 88, english: 78 } },
];

for (let {
  name,
  marks: { math, english },
} of students) {
  console.log(`${name} scored ${math} in Math and ${english} in English`);
}

// 2nd example

const user = {
  name: "Ali",
  address: {
    city: "Lahore",
    zip: 54000,
  },
};

// 🔸 Nested Destructuring
const {
  name,
  address: { city, zip },
} = user;

console.log(name); // Ali
console.log(city); // Lahore
console.log(zip); // 54000
