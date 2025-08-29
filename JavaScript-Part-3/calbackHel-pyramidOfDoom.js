// const heading1 = document.getElementById("h1");
// const heading2 = document.getElementById("h2");
// const heading3 = document.getElementById("h3");
// const heading4 = document.getElementById("h4");
// console.log("heading1");

// setTimeout(() => {
//   heading1.textContent = "One";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "Two";
//     heading2.style.color = "blue";
//     setTimeout(() => {
//       heading3.textContent = "Three";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "Four";
//         heading4.style.color = "green";
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

// Pyramid of doom //

const heading = document.getElementById("heading");

setTimeout(() => {
  heading.textContent = "Step 1";
  heading.style.color = "red";

  setTimeout(() => {
    heading.textContent = "Step 2";
    heading.style.color = "blue";

    setTimeout(() => {
      heading.textContent = "Step 3";
      heading.style.color = "green";

      setTimeout(() => {
        heading.textContent = "Step 4";
        heading.style.color = "orange";

        setTimeout(() => {
          heading.textContent = "Finished!";
          heading.style.color = "purple";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
