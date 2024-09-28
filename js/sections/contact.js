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
  <p class="text-center text-8xl font-bold">Contact</p>
  <p class="text-center text-3xl">
  Greetings, suggestions or anything you want. Let's get to work 🧑‍💻
  </p>

      <div
        class="mx-auto flex w-fit flex-col justify-center gap-8 text-2xl"
        x-data="socialMediaLinks"
        >
        <template x-for="(link,i) in socialMediaLinks" :key="i">
            <a
              :href="link.url"
              class="underline-effect flex items-center justify-between gap-16 text-3xl p-1 px-8 hover:text-primary rounded-xl"
              target="_blank"
            >
              <span x-text="link.name" :class="i % 2 == 0 ? 'order-last' : ''"></span>
              <i :class="link.icon" class="text-6xl"></i>
            </a>
        </template>
      </div>
    </section>
`;
  }
}

if (customElements.get(COMPONENT_NAME) === undefined)
  customElements.define(COMPONENT_NAME, Contact);
