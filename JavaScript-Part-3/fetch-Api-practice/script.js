document.getElementById("getPost").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("title").textContent = data.title;
      document.getElementById("body").textContent = data.body;
    })
    .catch((error) => {
      document.getElementById("title").textContent = "Error loading post";
      document.getElementById("body").textContent = error;
    });
});

// postData using fetch //
const postData = {
  title: "My First Post",
  body: "This is what I wrote.",
  userId: 1,
};

// we can send it like this //]
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // <-- POST method
  headers: {
    "Content-Type": "application/json", // <-- Tells server we're sending JSON
  },
  body: JSON.stringify(postData), // <-- Convert object to JSON string
})
  .then((response) => response.json()) // Convert response to JS object
  .then((data) => console.log("Post successful:", data))
  .catch((error) => console.log("Error posting:", error));
