// Rest Parameters

function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(5, 10, 15, 20));

// 2nd example

function introduce(...names) {
  return "Hello to: " + names.join(", ");
}

console.log(introduce("Waqas", "Ayaan", "Zain"));
console.log(introduce("Ahmad", "Yaseen"));
