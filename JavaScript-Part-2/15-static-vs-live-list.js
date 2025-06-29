// Static vs live list

// const listItems = document.querySelector(".todo-list li");
// const sixthli = document.createElement("li");
// sixthli.textContent = "item 6";
// const ul = document.querySelector(".todo-list");

// ul.append(sixthli);
// console.log(listItems);

// live list

const liveList = document.getElementsByTagName("li");

const newLi = document.createElement("li");
newLi.textContent = "live item";
document.querySelector("ul").appendChild(newLi);
console.log(liveList.length);
