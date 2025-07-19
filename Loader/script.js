// Get Refrences

const btn = document.querySelector("button");
const loader = document.querySelector(".loader");

// Simulate async tasks
function taskOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 0; i < 10000; i++) {
        console.log("Task 1:", i);
      }
      resolve("Task 1 done");
    }, 100);
  });
}

function taskTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 completed");
      resolve("Task 2 done");
    }, 100);
  });
}

btn.addEventListener("click", async () => {
  loader.style.display = "block";
  try {
    const results = await Promise.all([taskOne(), taskTwo()]);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    loader.style.display = "none"; // Hide loader
  }
});
