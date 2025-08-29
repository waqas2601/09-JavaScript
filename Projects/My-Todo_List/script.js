// <!-- Get refrences  -->

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const toggleBtn = document.getElementById("themeToggle");

// Event for DarkMode Btn //

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text based on current mode
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

// Add function for counting the tasks //

function updateCount() {
  taskCount.textContent = `Tasks: ${taskList.children.length}`;
}

// Add event to btn //

addBtn.addEventListener("click", () => {
  const task = taskInput.value;

  if (task.trim() === "") {
    alert("please enter your name");
    return;
  }

  // Create list item and Del btn //

  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete-btn");

  // Add Functionality to del btn //

  delBtn.addEventListener("click", () => {
    li.remove();
    updateCount();
  });
  // Attaching th btn to task and task to list //
  li.appendChild(delBtn);
  taskList.appendChild(li);
  updateCount();

  // Completed TAsk //
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  // Clears Input //

  taskInput.value = "";
});
