import { throttle } from "../helpers";
function getOrientation() {
  return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
}
// Example usage
const orientation = getOrientation();
// only allow parallax effect on landscape orientation
function parallaxEffect(scrollPos) {
  // container that holds the image to produce the parallax effect
  let parallax = document.getElementById("parallax");
  let parallaxMovement =
    orientation === "landscape"
      ? 0.2 * scrollPos
      : 0.05 * scrollPos * 0.1 * 0.1;

  parallax.style.backgroundPositionY = `-${parallaxMovement}px`;
}

const main = document.querySelector("main");

main.addEventListener(
  "scroll",
  throttle(() => parallaxEffect(main.scrollTop), 10),
);
