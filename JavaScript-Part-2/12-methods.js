// Methods to add elements

// Append and prepend //////////
// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// // newTodoItem.append(newTodoItemText);
// // todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);

// before and after ////////////////

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach students";
const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
todoList.after(newTodoItem);

// remove  ////////////////////

// newTodoItem.remove();

// after sometime
setTimeout(() => {
  newTodoItem.remove();
}, 3000);
