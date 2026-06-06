"use strict";

const nav = document.querySelector(".header__nav");

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
