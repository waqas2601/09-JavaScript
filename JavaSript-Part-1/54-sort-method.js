// Sort method

const numbers = [5, 23, 238, 84, 23, 3];

numbers.sort((a, b) => a - b);
console.log(numbers);

// products example

const products = [
  { product: 1, productName: "p1", price: 300 },
  { product: 2, productName: "p2", price: 4000 },
  { product: 3, productName: "p3", price: 500 },
  { product: 4, productName: "p4", price: 6000 },
  { product: 5, productName: "p5", price: 700 },
];

// lowToHigh
const lowToHigh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
  //   return b.price - a.price; highToLow
});
console.log(lowToHigh);
