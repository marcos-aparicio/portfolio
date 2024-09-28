const COMPONENT_NAME = "contact-section";

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
          class="contact-item"
        >
          <a
            href="mailto:marcos.aparicio1@outlook.com"
            class="contact-item"
            target="_blank"
          >
            <i class="fa-solid fa-envelope"></i>
            <span>marcos.aparicio1@outlook.com</span>
          </a>
          <a
            href="https://github.com/marcos-aparicio"
            class="contact-item"
            target="_blank"
          >
            <span>marcos-aparicio</span>
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-aparicio"
            target="_blank"
            class="contact-item"
          >
            <i class="fa-brands fa-linkedin"></i>
            <span>marcos-aparicio</span>
          </a>
          <a
            href="https://mastodon.social/@marcos_aparicio"
            target="_blank"
            class="contact-item"
          >
            <span>@marcos_aparicio</span>
            <i class="fa-brands fa-mastodon"></i>
          </a>
        </div>
      </section>
    `;
  }
}

if (customElements.get(COMPONENT_NAME) === undefined)
  customElements.define(COMPONENT_NAME, Contact);
