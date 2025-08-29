// Async/Await //

async function myFunction() {
  try {
    const result = await somePromiseFunction();
    console.log(result);
  } catch (error) {
    console.error("Something went wrong", error);
  }
}

// using fetch with async await //

async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching post:", error);
  }
}

getPost();

// post requesting using async await //
async function createPost() {
  try {
    const postData = {
      title: "Async Post",
      body: "Learning async/await!",
      userId: 1,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const data = await response.json();
    console.log("Post Created:", data);
  } catch (error) {
    console.error("Failed to create post:", error);
  }
}

createPost();
