// const URL = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL);
// xhr.onload = () => {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     const data = JSON.parse(xhr.response);
//     console.log(data);

//     // getting the specific id
//     const id = data[3].id;
//     console.log(id);
//   } else {
//     console.log("something wrong");
//   }
// };

// xhr.onerror = () => {
//   console.log("network error");
// };
// xhr.send();

// Error handling //

document.getElementById("loadBtn").addEventListener("click", function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

//   xhr.open("GET", "https://jsonplaceholder.typicode.com/wrong-url");

  // Handle network/server errors
  xhr.onerror = function () {
    document.getElementById("output").innerHTML =
      " Network Error. Please try again.";
  };

  // Optional: handle timeouts
  xhr.timeout = 5000; // 5 seconds
  xhr.ontimeout = function () {
    document.getElementById("output").innerHTML =
      "⏱️ Request timed out. Try again.";
  };

  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById("output").innerHTML = xhr.responseText;
    } else {
      document.getElementById(
        "output"
      ).innerHTML = ` Error ${xhr.status}: Could not load post.`;
    }
  };

  xhr.send();
});
