// // fetch Api //

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error", error));

// //   Post request using fetch //
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Hello",
//     body: "This is a post request",
//     userId: 1,
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Error:", err));

const URL = "https://official-joke-api.appspot.com/random_joke";
const output = document.getElementById("output");
const btn = document.getElementById("loadBtn");

const getApi = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  output.innerHTML = `<p>${data.setup}</p><p>${data.punchline}</p>`;
};
// getApi();
btn.addEventListener("click", getApi);
