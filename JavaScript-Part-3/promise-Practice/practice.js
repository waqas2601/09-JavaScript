function orderPizza(flavor) {
  return new Promise((resolve, reject) => {
    document.getElementById("status").textContent = " Baking your pizza...";
    setTimeout(() => {
      if (flavor === "cheese") {
        resolve(" Cheese Pizza delivered!");
      } else {
        reject(" Only cheese pizza is available.");
      }
    }, 2000); // simulating delay
  });
}

function orderNow() {
  orderPizza("cheese") // try changing to "pepperoni"
    .then((msg) => {
      document.getElementById("status").textContent = msg;
    })
    .catch((err) => {
      document.getElementById("status").textContent = err;
    });
}
