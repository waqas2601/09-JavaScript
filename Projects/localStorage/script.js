const setData = document.querySelector(".setData");
const getData = document.querySelector(".getData");
const remove = document.querySelector(".remove");
const update = document.querySelector(".update");

setData.addEventListener("click", () => {
  localStorage.setItem("name", "Waqas");
  localStorage.setItem("age", "20");
  localStorage.setItem("email", "mw2601005@gmail.com");
});

getData.addEventListener("click", () => {
  //   console.log(localStorage.length);

  //   console.log(localStorage.getItem("name"));
  const name = localStorage.getItem("name");
  const age = localStorage.getItem("age");
  const email = localStorage.getItem("email");
  console.log(name);
  console.log(age);
  console.log(email);
});

remove.addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("age");
  localStorage.removeItem("email");
});

update.addEventListener("click", () => {
  localStorage.setItem("name", "M.Waqas");
  localStorage.setItem("age", "21");
  localStorage.setItem("email", "abcd@gmail.com");
});
