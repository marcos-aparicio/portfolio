const COMPONENT_NAME = "projects-section";

class Projects extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="projects" class="flex flex-col min-h-svh xl:h-svh py-8 gap-16">
        <p class="text-8xl font-bold">Projects</p>
        <div
          x-data="{ projects: [] }"
          class="flex flex-col flex-wrap gap-4 overflow-y-hidden overflow-x-scroll"
          x-init="
                  async () => {
                    const fetchProjects = async () => {
                      const request = await fetch(
                        'https://api.github.com/users/marcos-aparicio/repos',
                      );
                      const data = await request.json();
                      return data
                        .filter((p) => p.fork === false)
                        .map((p) => ({
                          name: p.name,
                          description: p.description,
                          topics: p.topics,
                          html_url: p.html_url,
                          homepage: p.homepage,
                        }));
                    };
                    projects = await fetchProjects();
                  };
                "
        >
          <template x-for="(project,i) in projects" :key="i">
            <div
              class="flex flex-col bg-base py-4 px-6 max-w-xl rounded-xl justify-between gap-4 shadow-lg"
            >
              <div class="pointer-events-none">
                <h2
                  x-text="project.name"
                  class="text-3xl text-primary font-bold"
                ></h2>
                <hr class="h-0.5 border-t-0 bg-primary/30 my-2" />
                <p x-text="project.description"></p>
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex gap-x-4 gap-y-1 pointer-events-none flex-wrap">
                  <template x-for="topic in project.topics" :key="topic">
                    <span
                      x-text="topic"
                      class="bg-primary px-2 py-1 rounded-lg font-bold text-white text-xs"
                    ></span>
                  </template>
                </div>
                <div class="flex gap-4 items-center">
                  <a
                    :href="project.html_url"
                    class="rounded-lg border border-r-2 border-primary/90 p-2 text-primary hover:opacity-75 flex items-center gap-2 text-sm justify-center underline-effect"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github-alt"></i>
                    <span>GitHub Repo</span>
                  </a>
                  <a
                    :href="project.homepage"
                    class="rounded-lg border border-r-2 border-primary/90 p-2 text-primary hover:opacity-75 flex items-center gap-2 text-sm justify-center underline-effect"
                    target="_blank"
                    x-show="project.homepage"
                  >
                    <i class="fa-solid fa-globe"></i>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </template>
        </div>
      </section>
    `;
  }
}

if (customElements.get(COMPONENT_NAME) === undefined)
  customElements.define(COMPONENT_NAME, Projects);
