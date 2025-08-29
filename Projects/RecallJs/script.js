let myName = "Waqas";
let myAge = 20;

myAge = 21;

console.log("Name", myName);
console.log("Age", myAge);

if (myAge < 13) {
  console.log("You are a child");
} else if (myAge >= 13 && myAge <= 19) {
  console.log("You are a teenager");
} else {
  console.log("You are an adult");
}

function square(num) {
  return num * num;
}
console.log("Square of 5 is", square(5));

const greet = (name) => "Hi your name is " + name;

console.log(greet("Waqas"));
