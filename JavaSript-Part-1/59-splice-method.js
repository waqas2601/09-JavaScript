// Splice method

// array.splice(start, deleteCount, item1, item2, ...)

// Start, d
// elete, insert

const myArray = ["item1", "item2", "item3"];

// delete

myArray.splice(1, 1);
console.log(myArray);

// insert

myArray.splice(3, 0, "inserted item");

console.log(myArray);

// insert delete together \

const deletedItem = myArray.splice(1, 2, "inserted item");
console.log("dleted item", deletedItem);
console.log(myArray);
