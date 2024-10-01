import { throttle } from "../helpers";
function getOrientation() {
  return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
}
// Example usage
let orientation = getOrientation();
// only allow parallax effect on min width
function parallaxEffect(scrollPos) {
  if (orientation === "portrait") return;
  // container that holds the image to produce the parallax effect
  let parallax = document.getElementById("parallax");

  parallax.style.backgroundPositionY = `-${0.1 * scrollPos}px`;
}

const main = document.querySelector("main");

window.onresize = () => {
  orientation = getOrientation();
};
main.addEventListener(
  "scroll",
  throttle(() => parallaxEffect(main.scrollTop), 10),
);
