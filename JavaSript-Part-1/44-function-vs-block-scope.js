// Function scope

// Only var is function-scoped.

function greet() {
  var message = "Hello";
  console.log(message);
}

greet();

// console.log(message);  (Error)

// Block scope

// let and const are block-scoped.

{
  let a = 10;
  const b = 20;
  console.log(a, b);
}

// console.log(a);     (Error)
// console.log(b);    (Error)
