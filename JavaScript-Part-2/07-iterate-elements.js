// Iterate elements

const navItems = document.getElementsByTagName("a");
// console.log(navItems);

for (let i = 0; i < navItems.length; i++) {
  //   console.log(navItems[i]);

  const navItem = navItems[i];
  navItem.style.backgroundColor = "#fff";
  navItem.style.color = "green";
}
