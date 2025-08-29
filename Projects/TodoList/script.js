const inputBox = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

// Load tasks from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.forEach((task) => {
    createTask(task.text);
  });
});

// Function to create and display a task
function createTask(text) {
  const list = document.createElement("li");
  const para = document.createElement("p");
  const span = document.createElement("span");

  para.textContent = text;
  span.textContent = "✖";
  span.style.cursor = "pointer";

  // Delete task
  span.addEventListener("click", () => {
    list.remove();
    updateLocalStorage();
  });

  list.appendChild(para);
  list.appendChild(span);
  ul.appendChild(list);
}

// Update localStorage with current tasks
function updateLocalStorage() {
  const allTasks = [];
  ul.querySelectorAll("li p").forEach((p) => {
    allTasks.push({ text: p.textContent });
  });
  localStorage.setItem("tasks", JSON.stringify(allTasks));
}

// Add new task
btn.addEventListener("click", () => {
  if (inputBox.value.trim() === "") {
    alert("Add Something");
    return;
  }
  createTask(inputBox.value);
  updateLocalStorage();
  inputBox.value = "";
});
