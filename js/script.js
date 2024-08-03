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

window.Alpine = Alpine;

Alpine.start();

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
library.add(faMoon, faSun);

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
