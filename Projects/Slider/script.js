const slides = document.querySelectorAll(".slider img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0; //

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (idx === i) {
      slide.classList.add("active");
    }
    console.log(idx, i);
  });
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= slides.length) index = 0;
  showSlide(index);
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = slides.length - 1;
  showSlide(index);
});

