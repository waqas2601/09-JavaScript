// ===== Day 3: Arrays & Loops =====

// 1) sumArray(arr)
// TODO: return the sum of all numbers in the array
function sumArray(arr) {
  // your code
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 2) findMax(arr)
// TODO: return the largest number in the array
function findMax(arr) {
  // your code
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 3) countEven(arr)
// TODO: return how many even numbers are in the array
function countEven(arr) {
  // your code
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

// ===== Quick Tests (check your console) =====
console.log("sumArray([1, 2, 3, 4]) →", sumArray([1, 2, 3, 4])); // 10
console.log("findMax([3, 7, 2, 9, 5]) →", findMax([3, 7, 2, 9, 5])); // 9
console.log("countEven([2, 5, 8, 11, 14]) →", countEven([2, 5, 8, 11, 14])); // 3
