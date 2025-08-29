//  ternary operator

let color = "green";

let looks = color == "green" ? "Good" : "Bad";
console.log(looks);

var religion = "iSlAm";
let newRelegion = religion.toLowerCase();
console.log(newRelegion);
var Final = religion.toLowerCase() === "islam" ? "Muslim" : "Non-Muslim"; // .toLowerCase is applied to religion variable
console.log(Final); // OutPut: Muslim

let carName = "corolLA";

let result =
  carName.toUpperCase() === "COROLLA" ? "it is corolla" : "it is not corolla";
console.log(result);
