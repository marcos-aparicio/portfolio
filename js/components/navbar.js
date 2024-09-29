const COMPONENT_NAME = "nav-bar";

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <aside
        class="sticky z-50 flex h-full flex-col justify-between bg-base p-2 shadow-2xl shadow-primary"
        style="position: sticky; top: 0"
      >
        <!--extremely important empty div-->
        <div></div>
        <ul class="flex flex-col gap-4 px-8 text-lg font-bold text-secondary">
          <li class="underline-effect">
            <a href="#first">
              <svg
                width="159.60255mm"
                height="191.71155mm"
                class="mx-auto h-16 w-fit rounded object-contain p-2"
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
            </a>
          </li>
          <li class="underline-effect">
            <a href="#projects">Projects</a>
          </li>
          <li class="underline-effect">
            <a href="#work">Work</a>
          </li>
          <li class="underline-effect">
            <a href="#contact">Contact</a>
          </li>
          <li class="underline-effect">
            <a href="#props">Props</a>
          </li>
        </ul>
        <div
          class="flex items-center justify-around"
          x-data="{
              selectedTheme: localStorage.getItem('theme') ?? 'theme-light'
              }"
          x-init="()=>{
                let icon = 'fa-moon';
                if(localStorage.getItem('theme') == 'theme-light') icon = 'fa-moon';
                else if(window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.getItem('theme') == 'theme-dark') icon = 'fa-sun';

                $refs.icon.classList.add(icon);
              }"
        >
          <!-- TODO: implement multi language support for spanish in the future -->
          <p class="!hidden underline-effect">ES</p>
          <button
            x-on:click="()=>{
                  if(selectedTheme == 'theme-dark'){
                  $refs.icon.classList.remove('fa-sun');
                  $refs.icon.classList.add('fa-moon');
                    document.body.classList.remove('theme-dark');
                    selectedTheme = 'theme-light';
                  } else {
                    $refs.icon.classList.remove('fa-moon');
                    $refs.icon.classList.add('fa-sun');
                    document.body.classList.remove('theme-light');
                    selectedTheme = 'theme-dark';
                  }
                  localStorage.setItem('theme',selectedTheme);
                  document.body.classList.add(selectedTheme);
                }"
          >
            <i class="fa-solid underline-effect" x-ref="icon"></i>
          </button>
        </div>
      </aside>
  `;
  }
}

// ADDING THE COMPONENT TO THE PAGE
if (customElements.get(COMPONENT_NAME) === undefined)
  customElements.define(COMPONENT_NAME, Navbar);

// assuming each section corresponds to a nav item
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav-bar ul li");
const main = document.querySelector("main");
function sectionWatcher(section, index, sections) {
  // padding to consider for the section to be considered active(since there could be a dead space between sections)
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
