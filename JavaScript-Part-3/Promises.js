// Intro to promises //
const items = ["water", "sugar", "teaLeaves", "milk"];

// const makeTea = new Promise((resolve, reject) => {
//   if (items.includes("mil k") && items.includes("water")) {
//     resolve("Tea is ready");
//   } else {
//     reject("Couldnt make");
//   }
// });
// makeTea
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Another Example  //
function cook() {
  console.log("Cooking");
  let ingredients = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ingredients) {
        resolve("Done cooking");
      } else {
        reject("Cannot cook");
      }
    }, 2000);
  });
}
function eat() {
  console.log("Eating");
}
cook()
  .then((msg) => {
    console.log(msg);
    eat();
  })
  .catch((err) => {
    console.log(err);
  });
//   example with setTimeout //
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Waited for " + ms + " ms");
    }, ms);
  });
}

wait(2000).then((msg) => {
  console.log(msg); // Output after 2 seconds
});

// function returning promise //

function orderPizza(flavor) {
  return new Promise((resolve, reject) => {
    if (flavor === "cheese") {
      resolve("Cheese pizza delivered");
    } else {
      reject("Only cheese pizza available");
    }
  });
}

// we can use it like this //

orderPizza("cheese")
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

// function returning promise //
function checkInternet(status) {
  return new Promise((resolve, reject) => {
    if (status === "online") {
      resolve(" Internet is working!");
    } else {
      reject(" No internet connection.");
    }
  });
}

checkInternet("online")
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

// Example /////////////////
const cookPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    const hasIngredients = true;
    if (hasIngredients) {
      resolve("pizza ready");
    } else {
      reject("No ingredients");
    }
  }, 2000);
});

cookPizza.then((msg) => console.log(msg)).catch((err) => console.log(err));

// Promise resolve //
let promise = Promise.resolve("Everything is fine");

promise.then((msg) => {
  console.log(msg);
});

// Promise Chaining //
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Step:1");
  }, 1000);
})
  .then((msg) => {
    console.log(msg);
    return "Step 2";
  })
  .then((msg) => {
    console.log(msg);
    return "Step 3";
  })
  .then((msg) => {
    console.log(msg);
    return "Step 4";
  })
  .then((msg) => {
    console.log(msg);
  });
