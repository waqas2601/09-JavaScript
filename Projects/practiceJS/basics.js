// if , elseif , else

let myName = "Waqas";
let myAge = 20;

if (myAge > 18) {
  console.log("Adult");
} else if (myAge < 13) {
  console.log("child");
} else {
  console.log("Teenager");
}

if (myName === "Waqas") {
  console.log("yes");
} else if (myName !== "Waqas") {
  console.log("No");
} else {
  console.log("maybe");
}

// function

function add(a, b) {
  return a + b;
}

let result = add(5, 5);
console.log(result);

const greet = function (name) {
  return "Hi" + name;
};
console.log(greet(" Waqas"));

// const isEven = (2) =>{

// }

const print = () => console.log("hello world");

print();

const sumTwoNums = () => 2 + 2;

console.log(sumTwoNums());

const chkUser = (login) => {
  if (login === false) {
    return;
  }
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
};
chkUser(false);

const fnc = (myFnc) => {
  console.log(myFnc);
  return "Waqas";
};
fnc(() => {});

console.log(fnc(() => {}));


