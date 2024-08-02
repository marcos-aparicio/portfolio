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

import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
library.add(faMoon);
