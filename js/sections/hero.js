const COMPONENT_NAME = "hero-section";
const styles = `
    <style>
        :root {
          --distance: 25vw;
          --primaryTextSize: 5.5vw;
          --secondaryTextSize: 3.5vw;
        }
        @media (max-width: 1024px) and (orientation: portrait) {
          :root {
            --distance: 55vw;
          --primaryTextSize: 6.5vw;
          --secondaryTextSize: 4.5vw;
          }
        }
        @media (max-width: 1024px) and (orientation: landscape) {
          :root {
            --distance: 20vw;
          }
        }

        .line {
          overflow: visible;
          position: relative;
          display: flex;
        }
        .left,
        .right {
          width: var(--distance);
          overflow: hidden;
          display: inline-block;
        }
        .left {
          @apply text-primary;
          transform: skew(0deg, -15deg);
        }
        .right {
          transform: skew(0deg, 15deg);
        }
        .left .content {
          width: calc(var(--distance) * 2);
          text-align: center;
        }
        .right .content {
          width: calc(var(--distance) * 2);
          text-align: center;
          transform: translateX(calc(var(--distance) * -1));
        }
      .spanSlow,
      .spanFast {
        display: inline-block;
        font-family: "Montserrat", sans-serif;
        font-size: var(--primaryTextSize);
        font-weight: 900;
        text-transform: uppercase;
        line-height: 0.8;
        transition: ease-out 0.6s;
      }
      .job span {
        font-size: var(--secondaryTextSize) !important;
      }
      </style>
`;

class Hero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      ${styles}
      <section id="first" class="min-h-svh flex flex-col landscape:flex-row portrait:justify-start portrait:mt-32 items-center gap-8 sm:gap-16 lg:gap-0 landscape:max-[900px]:-mt-4">
        <div class="flex flex-col items-start" id="left-part">
          <svg
            width="159.60255mm"
            height="191.71155mm"
            class="mx-auto mb-24 xl:mb-32 sm:block hidden landscape:max-[900px]:hidden landscape:lg:block sm:h-40 xl:h-48 w-fit rounded bg-primary object-contain p-8 text-surface text-white"
            style="border-radius: 2.5rem"
            viewBox="0 0 159.60255 191.71155"
            version="1.1"
            id="svg1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="currentColor"
          >
            <defs id="defs1" />
            <g id="layer1" transform="translate(-20.198727,-4.1442275)">
              <g id="g23" transform="translate(3.5810906,3.2023229)">
                <path
                  style="
                    fill-opacity: 0;
                    stroke-width: 17.9362;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                    paint-order: stroke fill markers;
                  "
                  d="M 165.53547,183.68535 V 157.09276 L 164.4781,37.556772 c -18.06801,0 -61.43613,25.972794 -71.858595,59.385921 -6.249408,20.034857 -5.642767,58.823117 -5.642767,86.742657"
                  id="path9"
                />
                <path
                  style="
                    fill-opacity: 0;
                    stroke-width: 17.9362;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                    paint-order: fill markers stroke;
                  "
                  d="M 93.099082,90.294938 C 63.670347,46.530365 40.004838,34.789697 25.585728,34.789697 l 0.409664,48.561292 0.0458,100.334361"
                  id="path18"
                />
                <path
                  style="
                    fill-opacity: 0;
                    stroke-width: 15.2986;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                    paint-order: fill markers stroke;
                  "
                  d="m 93.011801,100.13227 c 20.358769,-0.0107 40.717529,-0.0214 61.076299,-0.0321"
                  id="path19"
                  transform="matrix(1.1495205,0,0,1.1957459,-15.66922,-1.9818232)"
                />
                <ellipse
                  style="
                    fill-opacity: 0.966102;
                    stroke-width: 7.40767;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                    paint-order: stroke fill markers;
                  "
                  id="path22"
                  ry="8.7961674"
                  rx="8.7961636"
                  cy="13.441907"
                  cx="163.72018"
                />
              </g>
            </g>
          </svg>
          <div class="line">
            <div class="left">
              <div class="content">
                <span class="spanSlow">Marcos</span>
              </div>
            </div>
            <!--
                -->
            <div class="right">
              <div class="content">
                <span class="spanSlow">Marcos</span>
              </div>
            </div>
          </div>
          <div class="line">
            <div class="left">
              <div class="content">
                <span class="spanSlow">Aparicio</span>
              </div>
            </div>
            <!--
                -->
            <div class="right">
              <div class="content">
                <span class="spanSlow">aparicio</span>
              </div>
            </div>
          </div>
          <div class="line job">
            <div class="left">
              <div class="content">
                <span class="spanFast">Software</span>
              </div>
            </div>
            <!--
                -->
            <div class="right">
              <div class="content">
                <span class="spanFast">software</span>
              </div>
            </div>
          </div>
          <div class="line job">
            <div class="left">
              <div class="content">
                <span class="spanSlow">Developer</span>
              </div>
            </div>
            <!--
                -->
            <div class="right">
              <div class="content">
                <span class="spanSlow">developer</span>
              </div>
            </div>
          </div>
        </div>
        <div id="right-part" class="flex flex-col justify-center gap-6 sm:gap-8 lg:gap-32">
          <h2 class="landscape:max-[900px]:text-2xl text-4xl sm:text-6xl text-center landscape:text-left xl:text-8xl font-bold">Hello Internet! 👋</h2>
          <p class="landscape:max-[900px]:text-md landscape:max-[900px]:leading-6 text-lg sm:text-xl xl:text-2xl font-light ">
            I am a programmer based on Hamilton Ontario, I like everything Linux
            related, know some stuff about website development and really keen on
            everything computer science related! Always looking for something else to
            learn of that incredible world 🧡
          </p>
        </div>
      </section>
    `;
  }
}

if (customElements.get(COMPONENT_NAME) === undefined)
  customElements.define(COMPONENT_NAME, Hero);

// setting up the cool effect from the name

// The place I saw this effect:
// https://codepen.io/chenxinnn/pen/qGKPOE

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
