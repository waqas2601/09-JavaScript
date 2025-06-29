// primitive vs refrence data types \

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// refrence type

let obj1 = { name: "Ali" };
let obj2 = obj1;

obj2.name = "Sara";

console.log(obj1.name); // Sara
console.log(obj2.name); // Sara

let me = ["Yaseen", 20];
{
  console.log(me);
}
