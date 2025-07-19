console.log(eval(string));
function isEven(num) {}
console.log(isEven(6));

// const checkEven = (num) => {
//   return num % 2 === 0;
// };

// const ans = checkEven(2)
// console.log(ans)
// console.log(checkEven(2));

const checkEven = (num) => {
  console.log(num % 2 === 0);
};
checkEven(4);

// let lastChar = string[string.length - 1];

const myNam = "Waqas";
console.log(myNam[myNam.length - 1]);

// const arr = ["maNgO", "APple", "bAnAnna"];
// console.log("Arr before foreach", arr);
// arr.forEach((fruit,index) => {
//   arr[index] = fruit.toLowerCase()
// });

// console.log("Arr after foreach : ", arr)

// const arr = ["maNgO", "APple", "bAnAnna"];

// console.log("Arr before map", arr);

// const lowercased = arr.map((fruit) => fruit.toLowerCase());
// console.log("Arr after map", arr);
// console.log("To lowercased fruits", lowercased);

const arr = ["maNgO", "APple", "bAnAnna"];
const newArr = arr.map((fruit) => fruit.toLowerCase());

if (newArr.includes("aPple".toLowerCase())) {
  console.log("Apple is available");
} else {
  console.log("Apple is not available");
}

// console.log(colors);

// Map mehtod

// console.log(upperCase);

const colors = ["GreeN", "yeLLow", "WhiTe", "BluE"];

function myFunc(color, covertToUppercase = true) {
  let upperCase = [];
  let uppered = "";

  if (covertToUppercase) {
    upperCase = colors.map((color) => color.toUpperCase());
    uppered = color.toUpperCase();
  } else {
    upperCase = colors.map((color) => color.toLowerCase());
    uppered = color.toLowerCase();
  }

  if (upperCase.includes(uppered)) {
    console.log(`${uppered} is in the array`);
  } else {
    console.log(`${uppered} not in the array`);
  }
}
myFunc("Blue");
// const urFunc = () => {};

// cosnt sssds ["Khan", 1 , 1.0, {name : }]

const data = [
  { name: "Waqas", age: 30 },
  { name: "Waqas", age: 30 },
  { name: "Waqas", age: 30 },
  { name: "Waqas", age: 30 },
  { name: "Waqas", age: 30 },
  { name: "Waqas", age: 30 },
];


const fetxhData = async()=>{
  let res  = await fetch("https://jsonplaceholder.typicode.com/posts");
  let ans = await res.json();
  console.log(ans);
}

// fetxhData();