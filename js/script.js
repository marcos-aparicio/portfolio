// The place I saw this effect:
// https://angle2.agency/

// Red Staper made a NICE tutorial about this effect! You should check it out!
// https://www.youtube.com/watch?v=LgiadQQM6mo&t=5s

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleWindowResize);

const spansSlow = document.querySelectorAll(".spanSlow");
const spansFast = document.querySelectorAll(".spanFast");

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = (e.pageX / width - 1) * 0.5;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 250 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`;
  });
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}

import Alpine from "alpinejs";
import "@fortawesome/fontawesome-free";
import data from "./data.js";

window.Alpine = Alpine;
Alpine.data("projectsData", data);

Alpine.start();

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMoon,
  faSun,
  faEnvelope,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faMoon,
  faSun,
  faGithub,
  faLinkedin,
  faMastodon,
  faEnvelope,
  faChevronLeft,
  faChevronRight,
);

// extracted from https://www.youtube.com/watch?v=vIBKSmWAdIA&ab_channel=TomIsLoading

const selectedTheme = localStorage.getItem("theme");

if (selectedTheme) {
  document.body.classList.add(selectedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  localStorage.setItem("theme", "theme-dark");
  document.body.classList.add("theme-dark");
} else {
  localStorage.setItem("theme", "theme-light");
  document.body.classList.add("theme-light");
}

// assuming each section corresponds to a nav item
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("aside ul li");
const main = document.querySelector("main");
function sectionWatcher(section, index, sections) {
  // padding to consider for the section to be considered active(since there's a dead space between sections)
  const padding = 150;
  if (
    (main.scrollTop <= section.offsetTop + section.offsetHeight &&
      main.scrollTop >= section.offsetTop) ||
    (main.scrollTop + padding <= section.offsetTop + section.offsetHeight &&
      main.scrollTop + padding >= section.offsetTop)
  ) {
    navItems[index].classList.add("text-primary");
  } else {
    navItems[index].classList.remove("text-primary");
  }
}
window.onload = () => {
  sections.forEach(sectionWatcher);
};
main.addEventListener("scroll", () => {
  sections.forEach(sectionWatcher);
});

// const contactEntries = document.querySelectorAll(".contact-item");
// contactEntries.forEach((entry) => {
//   entry.onmousemove = (e) => {
//     var rect = document.body.getBoundingClientRect(); // Get the position of the element
//     var rXP = e.pageX - rect.left - entry.offsetWidth;
//     var rYP = e.pageY - rect.top - entry.offsetHeight;
//     entry.style.textShadow =
//       +rYP / 10 +
//       "px " +
//       rXP / 80 +
//       "px rgba(227,6,19,.8), " +
//       rYP / 8 +
//       "px " +
//       rXP / 60 +
//       "px rgba(255,237,0,1), " +
//       rXP / 70 +
//       "px " +
//       rYP / 12 +
//       "px rgba(0,159,227,.7)";
//   };
// });
// console.log(contactEntries);
