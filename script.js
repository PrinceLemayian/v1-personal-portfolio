// Updating the year in the footer

const yearElement = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile-nav"); 
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
});

console.log("JavaScript is working!");