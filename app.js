const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
const mainNav = document.querySelector(".main-nav");

const prev = document.querySelector("[data-previous-slide]");
const next = document.querySelector("[data-next-slide]");
const slides = document.querySelectorAll(".testimonial");

let menuOpen = false;
let currentSlide = 0;

mobileMenuBtn.addEventListener("click", () => {
  if (menuOpen) {
    mainNav.classList.remove("open-main-nav");
    menuOpen = false;
  } else {
    mainNav.classList.add("open-main-nav");
    menuOpen = true;
  }
});

const refresh = () => {
  slides.forEach((slide, index) => {
    if (currentSlide === index) {
      slide.classList.add("testimonial-active");
    } else {
      slide.classList.remove("testimonial-active");
    }
  });
};

next.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide = currentSlide + 1;
    refresh();
  } else {
    currentSlide = 0;
    refresh();
  }
});

prev.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide = currentSlide - 1;
    refresh();
  } else {
    currentSlide = slides.length - 1;
    refresh();
  }
});

window.onload = () => {
  refresh();
};
