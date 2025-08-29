import { firstName } from "./fname.js";
import { age } from "./age.js";

console.log(firstName, age);

import { add, subtract } from "./age.js";

console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6

import greet from "./fname.js";
console.log(greet("Ali"));
