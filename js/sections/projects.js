const COMPONENT_NAME = "projects-section";

class Projects extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="projects" class="flex flex-col min-h-svh py-8 gap-16">
      <div
        class="sticky top-0 z-10 bg-[url('https://images.pexels.com/photos/3307218/pexels-photo-3307218.jpeg')] opacity-100 border-0"
      >
        <p
          class="text-6xl landscape-mobile:text-4xl landscape-mobile:p-2 xl:text-8xl py-4 font-bold bg-surface border-0 opacity-90"
        >
          Projects
        </p>
      </div>
      <div
        x-data="{ projects: [] }"
        class="flex flex-wrap landscape-mobile:gap-2 gap-4 portrait:justify-stretch landscape:justify-evenly"
        x-init="
                      async () => {
                        const fetchProjects = async () => {
                          const request = await fetch(
                            'https://api.github.com/users/marcos-aparicio/repos',
                          );
                          const data = await request.json();
                          const output = data
                            .filter((p) => p.fork === false)
                            .map((p) => ({
                              name: p.name,
                              description: p.description,
                              topics: p.topics,
                              html_url: p.html_url,
                              homepage: p.homepage,
                            }));
                          return output;
                        };
                        projects = await fetchProjects();
                      };
                    "
      >
        <template x-for="(project,i) in projects" :key="i">
          <div
            class="flex flex-col bg-base py-4 px-6 md:max-w-sm xl:max-w-lg landscape-mobile:max-w-xs portrait:w-full portrait:max-w-full rounded-xl justify-between gap-4 shadow-lg"
          >
            <div class="pointer-events-none">
              <h2
                x-text="project.name"
                class="landscape-mobile:text-lg text-xl md:text-3xl text-primary font-bold"
              ></h2>
              <hr class="h-0.5 border-t-0 bg-primary/30 my-2" />
              <p
                class="landscape-mobile:text-xs text-sm md:text-md"
                x-text="project.description"
              ></p>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex gap-x-4 gap-y-1 pointer-events-none flex-wrap">
                <template x-for="topic in project.topics" :key="topic">
                  <span
                    x-text="topic"
                    class="bg-primary px-2 py-1 rounded-lg font-bold text-white text-xs landscape-mobile:p-1"
                  ></span>
                </template>
              </div>
              <div class="flex gap-4 items-center landscape-mobile:gap-2">
                <a
                  :href="project.html_url"
                  class="rounded-lg border border-r-2 border-primary/90 landscape-mobile:p-1 p-2 text-primary hover:opacity-75 flex items-center gap-2 text-sm justify-center underline-effect"
                  target="_blank"
                >
                  <i class="fa-brands fa-github-alt"></i>
                  <span>GitHub Repo</span>
                </a>
                <a
                  :href="project.homepage"
                  class="rounded-lg border border-r-2 border-primary/90 landscape-mobile:p-1 p-2 text-primary hover:opacity-75 flex items-center gap-2 text-sm justify-center underline-effect"
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
