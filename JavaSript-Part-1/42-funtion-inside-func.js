// Function inside function

function outerFunction() {
  console.log("I am the outer function");

  function innerFunction() {
    console.log("I am the inner function");
  }
  innerFunction();
}

outerFunction();

// 2nd example

var arrowFunction = () => {
  var funcSum = (num1, num2) => {
    return num1 + num2;
  };
  var funcMinus = (num1, num2) => {
    return num1 - num2;
  };
  var funcMultiply = (num1, num2) => {
    return num1 * num2;
  };
  const sum = funcSum(2, 4);
  console.log(sum);

  const minus = funcMinus(4, 1);
  console.log(minus);

  const multiply = funcMultiply(3, 2);
  console.log(multiply);
};
arrowFunction();
