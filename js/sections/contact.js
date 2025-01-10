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
];
Alpine.data("socialMediaLinks", () => ({ socialMediaLinks }));

class Contact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <section id="contact" class="flex flex-col gap-8 py-8 min-h-svh">
    <p
      class="text-6xl font-bold text-center xl:text-8xl landscape-mobile:text-4xl"
    >
      Contact
    </p>
    <p class="text-xl text-center md:text-2xl xl:text-3xl">
      Greetings, suggestions or anything you want. Let's get to work 🧑‍💻
    </p>

    <div
      class="flex flex-col flex-wrap gap-8 justify-center mx-auto w-full landscape-mobile:flex-row landscape-mobile:gap-2 xl:w-fit"
      x-data="socialMediaLinks"
    >
      <template x-for="(link,i) in socialMediaLinks" :key="i">
        <a
          :href="link.url"
          class="flex gap-2 justify-between items-center p-1 w-full text-xl rounded-xl md:gap-8 md:px-8 md:text-3xl xl:gap-16 underline-effect landscape-mobile:gap-2 landscape-mobile:w-fit landscape-mobile:text-lg hover:text-primary"
          target="_blank"
        >
          <span
            x-text="link.name"
            :class="i % 2 == 0 ? 'order-last' : ''"
            class="truncate ..."
          ></span>
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
