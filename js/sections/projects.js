const COMPONENT_NAME = "projects-section";

class Projects extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="projects" class="flex flex-col gap-16 py-8 min-h-svh">
      <div
        class="sticky top-0 z-10 bg-[url('https://images.pexels.com/photos/3307218/pexels-photo-3307218.jpeg')] opacity-100 border-0"
      >
        <p
          class="py-4 text-6xl font-bold border-0 opacity-90 xl:text-8xl landscape-mobile:text-4xl landscape-mobile:p-2 bg-surface"
        >
          Projects
        </p>
      </div>
      <div
        x-data="{ projects: [] }"
        class="flex flex-wrap gap-4 landscape-mobile:gap-2 portrait:justify-stretch landscape:justify-evenly"
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
            class="flex flex-col gap-4 justify-between py-4 px-6 rounded-xl shadow-lg md:max-w-sm xl:max-w-lg bg-base landscape-mobile:max-w-xs portrait:w-full portrait:max-w-full"
          >
            <div class="pointer-events-none">
              <h2
                x-text="project.name"
                class="text-xl font-bold md:text-3xl landscape-mobile:text-lg text-primary"
              ></h2>
              <hr class="my-2 h-0.5 border-t-0 bg-primary/30" />
              <p
                class="text-sm landscape-mobile:text-xs md:text-md"
                x-text="project.description"
              ></p>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex flex-wrap gap-y-1 gap-x-4 pointer-events-none">
                <template x-for="topic in project.topics" :key="topic">
                  <span
                    x-text="topic"
                    class="py-1 px-2 text-xs font-bold text-white rounded-lg bg-primary landscape-mobile:p-1"
                  ></span>
                </template>
              </div>
              <div class="flex gap-4 items-center landscape-mobile:gap-2">
                <a
                  :href="project.html_url"
                  class="flex gap-2 justify-center items-center p-2 text-sm rounded-lg border border-r-2 hover:opacity-75 border-primary/90 landscape-mobile:p-1 text-primary underline-effect"
                  target="_blank"
                >
                  <i class="fa-brands fa-github-alt"></i>
                  <span>GitHub Repo</span>
                </a>
                <a
                  :href="project.homepage"
                  class="flex gap-2 justify-center items-center p-2 text-sm rounded-lg border border-r-2 hover:opacity-75 border-primary/90 landscape-mobile:p-1 text-primary underline-effect"
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
