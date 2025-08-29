// ===== Day 5: Arrays (Loops & Methods) =====

// 1) sumArray(arr)
// TODO: return the sum of all numbers in the array
function sumArray(arr) {
  // your code
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// 2) maxInArray(arr)
// TODO: return the largest number in the array
function maxInArray(arr) {
  // your code
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// 3) doubleArray(arr)
// TODO: return a new array where each number is doubled
function doubleArray(arr) {
  // your code
  return arr.map((num) => num * 2);
}

// 4) filterEven(arr)
// TODO: return only even numbers from the array
function filterEven(arr) {
  // your code
  return arr.filter((num) => num % 2 === 0);
}

// 5) reverseArray(arr)
// TODO: return the reversed array
function reverseArray(arr) {
  // your code
  return arr.reverse();
}

// ===== Quick Tests =====
console.log("sumArray([1,2,3,4]) →", sumArray([1, 2, 3, 4])); // 10
console.log("maxInArray([3,7,2,9,5]) →", maxInArray([3, 7, 2, 9, 5])); // 9
console.log("doubleArray([1,2,3]) →", doubleArray([1, 2, 3])); // [2,4,6]
console.log("filterEven([1,2,3,4,5,6]) →", filterEven([1, 2, 3, 4, 5, 6])); // [2,4,6]
console.log("reverseArray([1,2,3,4]) →", reverseArray([1, 2, 3, 4])); // [4,3,2,1]
