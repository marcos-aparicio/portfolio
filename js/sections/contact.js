import Alpine from "alpinejs";
const COMPONENT_NAME = "contact-section";

const socialMediaLinks = [
  {
    icon: "fa-brands fa-github",
    url: "https://github.com/marcos-aparicio",
    name: "marcos-aparicio",
  },
  {
    icon: "fa-solid fa-envelope",
    url: "mailto:marcos.aparicio1@outlook.com",
    name: "marcos.aparicio1@outlook.com",
  },
  {
    icon: "fa-brands fa-linkedin",
    url: "https://www.linkedin.com/in/marcos-aparicio",
    name: "marcos-aparicio",
  },
  {
    icon: "fa-brands fa-mastodon",
    url: "https://mastodon.social/@marcos_aparicio",
    name: "@marcos_aparicio",
  },
];
Alpine.data("socialMediaLinks", () => ({ socialMediaLinks }));

class Contact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <section id="contact" class="min-h-svh flex flex-col gap-8 py-8">
  <p class="text-6xl landscape-mobile:text-4xl xl:text-8xl text-center font-bold">Contact</p>
  <p class="text-center text-xl md:text-2xl xl:text-3xl">
  Greetings, suggestions or anything you want. Let's get to work 🧑‍💻
  </p>

      <div
        class="mx-auto flex w-full xl:w-fit flex-col justify-center gap-8 landscape-mobile:flex-row flex-wrap landscape-mobile:gap-2"
        x-data="socialMediaLinks"
        >
        <template x-for="(link,i) in socialMediaLinks" :key="i">
            <a
              :href="link.url"
              class="underline-effect flex items-center justify-between w-full gap-2 md:gap-8 xl:gap-16 text-xl md:text-3xl p-1 md:px-8 hover:text-primary rounded-xl landscape-mobile:gap-2 landscape-mobile:w-fit landscape-mobile:text-lg"
              target="_blank"
            >
              <span x-text="link.name" :class="i % 2 == 0 ? 'order-last' : ''" class="truncate ..."></span>
              <i :class="link.icon" class="text-4xl xl:text-6xl"></i>
            </a>
        </template>
      </div>
    </section>
`;
  }
}

if (customElements.get(COMPONENT_NAME) === undefined)
  customElements.define(COMPONENT_NAME, Contact);
