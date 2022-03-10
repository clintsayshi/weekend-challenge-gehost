const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
const mainNav = document.querySelector(".main-nav");

const prev = document.querySelector("[data-previous-slide]");
const next = document.querySelector("[data-next-slide]");
const slides = document.querySelectorAll(".testimonial");

const prevTemplate = document.querySelector("[data-previous-template]");
const nextTemplate = document.querySelector("[data-next-template]");
const templates = document.querySelectorAll(".templates-preview-slide");
const templateSlideNumber = document.querySelector(
  ".templates-preview-slide-number"
);

let menuOpen = false;
let currentSlide = 0;
let currentTemplate = 0;

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

const refreshTemplates = () => {
  templates.forEach((template, index) => {
    if (currentTemplate === index) {
      template.classList.add("template-preview-active");
    } else {
      template.classList.remove("template-preview-active");
    }
  });
  templateSlideNumber.textContent = `${currentTemplate + 1}/${
    templates.length
  }`;
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
nextTemplate.addEventListener("click", () => {
  if (currentTemplate < templates.length - 1) {
    currentTemplate = currentTemplate + 1;
    refreshTemplates();
  } else {
    currentTemplate = 0;
    refreshTemplates();
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
prevTemplate.addEventListener("click", () => {
  if (currentTemplate > 0) {
    currentTemplate = currentTemplate - 1;
    refreshTemplates();
  } else {
    currentTemplate = slides.length - 1;
    refreshTemplates();
  }
});

window.onload = () => {
  refresh();
  refreshTemplates();
};
