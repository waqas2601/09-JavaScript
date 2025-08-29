// function declaration

function greeting() {
  console.log("Assalam, Waqas");
}
greeting(); //calling it multiple times
greeting();
greeting();

// function with parameters

function sayHello(name) {
  console.log("Hi " + name);
}

sayHello("Iqra");
sayHello("Waqas");

// function that returns a value

function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);



// Concept	     Example

// Declare	     function greet() {}
// Call	         greet()
// With params	 function sayHi(name) {}
// Return value	  return something;