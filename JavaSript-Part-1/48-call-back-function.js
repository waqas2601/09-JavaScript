// Call back function

function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  let userName = "Waqas";
  callback(userName);
}

processUser(greet);

// 2nd example

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);
