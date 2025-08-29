//  for loop

// its like while loop but in one line /

for (let i = 1; i <= 3; i++) {
  console.log("Number is: " + i);
}
for (let i = 0; i < 3; i++) {
  console.log("Number is: " + i);
}

// 2nd example
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = 0; i < days.length; i++) {
  console.log(`Today is: ${days[i]}`);
}

// 3rd example

let total = 0;
for (i = 0; i <= 10; i++) {
  total = total + i;
}
console.log(total);
