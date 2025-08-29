// XHR - XMLHttpRequest //

// const xhr = new XMLHttpRequest();
// console.log(xhr);

// // Step 1: Create a request object
// let xhr = new XMLHttpRequest();

// // Step 2: Open the request (method, URL)
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

// // Step 3: Set what happens when response is received
// xhr.onload = function () {
//   if (xhr.status === 200) {
//     console.log("Success:", xhr.responseText);
//   } else {
//     console.log("Error:", xhr.status);
//   }
// };

// // Step 4: Send the request
// xhr.send();

document.getElementById("loadBtn").addEventListener("click", function () {
  // Step 1: Create the XHR object
  let xhr = new XMLHttpRequest();

  // Step 2: Setup the request (GET, and URL)
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

  // Step 3: What to do when the request loads
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Step 4: Show the response inside the box
      document.getElementById("output").innerHTML = xhr.responseText;
    } else {
      document.getElementById("output").innerHTML = "Error loading post";
    }
  };

  // Step 5: Send the request
  xhr.send();
});
