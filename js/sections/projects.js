const COMPONENT_NAME = "projects-section";

class Projects extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="projects" class="min-h-svh py-8">
      <p class="text-8xl font-bold">Projects</p>
      <div class="flex flex-col bg-base p-2 px-4 rounded-xl gap-4 max-w-xl">
      <div>
        <h2 class="text-3xl text-primary font-bold">Project 1</h2>
        <hr class="h-0.5 border-t-0 bg-primary/30 my-2" />
      </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum
          facilis excepturi totam aliquid dicta id? Voluptatem adipisci rem,
          quibusdam assumenda sit ipsum veritatis quos obcaecati aut quas maxime
          consequuntur.
        </p>
      <div class="flex gap-4">
        <span class="bg-primary px-2 py-1 rounded-lg font-bold text-white text-xs">React</span>
        <span class="bg-primary px-2 py-1 rounded-lg font-bold text-white text-xs">Angular</span>
        <span class="bg-primary px-2 py-1 rounded-lg font-bold text-white text-xs">Python</span>
      </div>
        <div class="flex gap-4 items-center">
          <a href="" class="rounded-lg border border-r-2 border-primary/90 p-2 text-primary hover:opacity-75 flex items-center gap-2 text-sm justify-center">
            <i class="fa-brands fa-github-alt"></i>
            <span>GitHub Repo</span>
          </a>
          <a href="" class="rounded-lg border border-r-2 border-primary/90 p-2 text-primary hover:opacity-75 flex items-center gap-2 text-sm justify-center">
            <i class="fa-solid fa-globe"></i>
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </section>
    `;
  }
}

if (customElements.get(COMPONENT_NAME) === undefined)
  customElements.define(COMPONENT_NAME, Projects);

const url = "https://api.github.com/users/marcos-aparicio/repos";
const tryFetch = async () => {
  const pepe = await fetch(url);
  const data = await pepe.json();
  const myProjects = data.filter((p) => p.fork === false);
  console.log(myProjects);
};
tryFetch();
