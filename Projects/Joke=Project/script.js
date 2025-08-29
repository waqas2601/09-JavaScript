const jokeBtn = document.getElementById("jokeBtn");
const loading = document.getElementById("loading");
const jokeDisplay = document.getElementById("jokeDisplay");

// Function returning a Promise (fetch joke)
function fetchJoke() {
  return new Promise((resolve, reject) => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

// Async function to handle fetching
async function getJoke() {
  loading.textContent = "Loading...";
  jokeDisplay.textContent = "";

  // Simulate delay with setTimeout
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const jokeData = await fetchJoke();
    loading.textContent = "";
    jokeDisplay.innerHTML = `<strong>${jokeData.setup}</strong><br>${jokeData.punchline}`;
  } catch (error) {
    loading.textContent = "";
    jokeDisplay.textContent = "Failed to fetch joke 😢";
    console.error(error);
  }
}

// Event Listener
jokeBtn.addEventListener("click", getJoke);
