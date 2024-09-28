import { throttle } from "../helpers";
function parallaxEffect(scrollPos) {
  // container that holds the image to produce the parallax effect
  let parallax = document.getElementById("parallax");
  parallax.style.backgroundPositionY = `-${scrollPos * 0.2}px`;
}

const main = document.querySelector("main");

main.addEventListener(
  "scroll",
  throttle(() => parallaxEffect(main.scrollTop), 10),
);
