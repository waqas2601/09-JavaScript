// ===== Day 3: Scope & Hoisting =====

// 1) Function Scope vs Block Scope
function scopeTest() {
  var a = 10; // function scoped
  if (true) {
    var b = 20; // still function scoped
    let c = 30; // block scoped
    const d = 40; // block scoped
    console.log("Inside block:", b, c, d);
  }
  console.log("Outside block (a):", a); // works
  console.log("Outside block (b):", b); // works because var is function-scoped
  // console.log(c); //  error
  // console.log(d); //  error
}
scopeTest();

// 2) Hoisting with var
function hoistingVar() {
  console.log(x); // undefined (hoisted, but not initialized)
  var x = 5;
  console.log("After declaration:", x); // 5
}
hoistingVar();

// 3) Hoisting with let/const
function hoistingLetConst() {
  // console.log(y); //  ReferenceError (Temporal Dead Zone)
  let y = 10;
  console.log("y after declaration:", y);

  // console.log(z); //  ReferenceError
  const z = 20;
  console.log("z after declaration:", z);
}
hoistingLetConst();

// 4) Function Hoisting
hoistedDeclaration(); //  works, declarations are hoisted
// hoistedExpression(); //  error, not hoisted
// hoistedArrow();      //  error, not hoisted

function hoistedDeclaration() {
  console.log("I am a function declaration!");
}

const hoistedExpression = function () {
  console.log("I am a function expression!");
};

const hoistedArrow = () => {
  console.log("I am an arrow function!");
};

hoistedExpression(); // works when called after definition
hoistedArrow();

// 5) Lexical Scope
function outer() {
  let outerVar = "Hello from outer!";
  function inner() {
    console.log("Inner can access:", outerVar); // closure
  }
  inner();
}
outer();
