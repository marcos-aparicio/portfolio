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
      <section id="props" class="h-full flex flex-col gap-8 landscape-mobile:gap-4">
        <p
          class="text-6xl landscape-mobile:text-4xl xl:text-8xl font-bold text-center"
        >
          Props
        </p>
        <p
          class="text-center text-lg md:text-2xl xl:text-3xl landscape-mobile:text-md landscape-mobile:leading-6"
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
          class="text-secondary flex gap-2 sm:gap-8 flex-col list-decimal list-inside landscape-mobile:flex-row landscape-mobile:text-sm landscape-mobile:flex-wrap landscape-mobile:gap-y-1"
        >
          <template x-for="prop in props">
            <li>
              <a
                :href="prop.source"
                x-text="prop.idea"
                class="underline-effect"
                target="_blank"
              ></a>
            </li>
          </template>
        </ol>
      </section>
    `;
  }
}

if (customElements.get(COMPONENT_NAME) === undefined)
  customElements.define(COMPONENT_NAME, Props);
