const COMPONENT_NAME = "props-section";

class Props extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="props" class="min-h-svh py-8">
        <p class="text-8xl font-bold">Props</p>
        <p class="text-2xl">
          I like to recognize when I am not the original author of an idea, for
          this website I <strong>definitely</strong> used some code from other
          people, I don't think they'll ever see this but I want to acknowledge
          how my website was inspired from that code.
        </p>

        <ul>
          <li>example 1</li>
          <li>example 2</li>
        </ul>

        <p>Built with 🧡 using AlpineJS, Neovim, Tailwind and Vite</p>
      </section>
    `;
  }
}

if (customElements.get(COMPONENT_NAME) === undefined)
  customElements.define(COMPONENT_NAME, Props);
