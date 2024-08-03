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
  document.body.classList.add("theme-dark");
} else {
  localStorage.setItem("theme", "theme-light");
  document.body.classList.add("theme-light");
}
