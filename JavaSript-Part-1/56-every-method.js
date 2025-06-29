// Every method

const numbers = [2, 4, 6, 9, 10];

function isEven(number) {
  return number % 2 === 0;
}

const ans = numbers.every(isEven);

console.log(ans);

const manSize = [
  { manNmbr: 1, manName: "Waqas", size: "60kg" },
  { manNmbr: 2, manName: "Abdullah", size: "67kg" },
  { manNmbr: 3, manName: "Yaseen", size: "70kg" },
];

const final = manSize.every((men) => men.size < "75kg");

console.log(final);
