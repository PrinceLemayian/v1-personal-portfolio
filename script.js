// Updating the year in the footer

const yearElement = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
    
const btnNavEl = document.querySelector(".btn-mobile-nav"); 
const headerEl = document.querySelector(".header");

const alllinks = document.querySelectorAll(".header__nav-link");

alllinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
  });
});

btnNavEl.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
});