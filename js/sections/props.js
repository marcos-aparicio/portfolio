const COMPONENT_NAME = "props-section";

const props = [
  {
    idea: "How to implement a theme switcher",
    source:
      "https://www.youtube.com/watch?v=vIBKSmWAdIA&ab_channel=TomIsLoading",
  },
  {
    idea: "Sliding Text Animation from first section",
    source: "https://codepen.io/chenxinnn/pen/qGKPOE",
  },
  {
    idea: "AlpineJS Carousel Component",
    source: "https://www.penguinui.com/components/carousel",
  },
  {
    idea: "Inspiration to use WebComponents",
    source: "https://www.freecodecamp.org/news/build-your-first-web-component/",
  },
  {
    idea: "Idea to use simple throttle function",
    source: "https://www.sitepoint.com/throttle-scroll-events/",
  },
];
class Props extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="props" class="flex flex-col justify-between py-2 landscape-mobile:h-fit h-[95svh] portrait:h-[85vh]">
        <div class="flex flex-col gap-8 landscape-mobile:gap-4">
          <p
            class="text-6xl font-bold text-center xl:text-8xl landscape-mobile:text-4xl"
          >
            Props
          </p>
          <p
            class="text-lg text-center md:text-2xl xl:text-3xl landscape-mobile:text-md landscape-mobile:leading-6"
          >
            I like to recognize when I am not the original author of an idea, for this
            website I <strong>definitely</strong> used some code from other people or
            was inspired by their code. I don't think they'll ever see this but I want
            to acknowledge them.
          </p>

          <ol
            x-data="{
                  props: [
                      {
                        idea: 'How to implement a theme switcher',
                        source:
                          'https://www.youtube.com/watch?v=vIBKSmWAdIA&ab_channel=TomIsLoading',
                      },
                      {
                        idea: 'Sliding Text Animation from first section',
                        source: 'https://codepen.io/chenxinnn/pen/qGKPOE',
                      },
                      {
                        idea: 'AlpineJS Carousel Component',
                        source: 'https://www.penguinui.com/components/carousel',
                      },
                      {
                        idea: 'Inspiration to use WebComponents',
                        source: 'https://www.freecodecamp.org/news/build-your-first-web-component/',
                      },
                      {
                        idea: 'Idea to use simple throttle function',
                        source: 'https://www.sitepoint.com/throttle-scroll-events/',
                      },
                    ]
                }"
            class="flex flex-col gap-2 list-decimal list-inside sm:gap-8 text-secondary landscape-mobile:flex-row landscape-mobile:text-sm landscape-mobile:flex-wrap landscape-mobile:gap-y-1"
          >
            <template x-for="prop in props">
              <li>
                <a
                  :href="prop.source"
                  x-text="prop.idea"
                  class="text-sm underline-effect md:text-md"
                  target="_blank"
                ></a>
              </li>
            </template>
          </ol>
        </div>
        <footer
          class="flex flex-col gap-4 justify-center pb-4 mx-auto w-full opacity-60 landscape-mobile:gap-1 landscape-mobile:pb-1"
            >
              <a
                href="https://www.pexels.com/photo/landscape-photography-of-tree-s-reflection-on-body-of-water-under-a-starry-night-sky-3307218/"
                class="mx-auto text-center underline-effect text-secondary"
                target="_blank"
                >Background by Tristan Pokornyi
              </a>
              <p class="flex gap-8 justify-center text-xs text-center">
                <span
                  >Marcos Aparicio
                  <script type="text/javascript">
                    document.write(new Date().getFullYear());
                  </script></span
                >
                <span>Built with 🧡 using AlpineJS, Tailwind and Vite</span>
              </p>
          </footer>
      </section>
    `;
  }
}

if (customElements.get(COMPONENT_NAME) === undefined)
  customElements.define(COMPONENT_NAME, Props);
