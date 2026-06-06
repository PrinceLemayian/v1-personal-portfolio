"use strict";

const nav = document.querySelector(".header__nav");
const allSections = document.querySelectorAll(".section");

// NAVIGATION
// Menu Fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("header__nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".header__nav")
      .querySelectorAll(".header__nav-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});
// allSections.forEach(function (section) {
//   const rect = section.getBoundingClientRect();
//   if (rect.top > window.innerHeight) {
//     section.classList.add("section--hidden");
//   }
//   sectionObserver.observe(section);
// });

// FOOTER

// Updating the year in the footer

const yearElement = document.querySelector(".year");
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
