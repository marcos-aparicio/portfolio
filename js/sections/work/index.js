import Alpine from "alpinejs";
import data from "./data.js";

const COMPONENT_NAME = "work-section";

Alpine.data("workProjectsData", data);
class Work extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="work" class="h-svh py-8 flex flex-col overflow-hidden">
      <div class="sticky md:static top-0 z-10   bg-[url('https://images.pexels.com/photos/3307218/pexels-photo-3307218.jpeg')] opacity-100 border-0">
        <p class="text-6xl landscape-mobile:text-4xl landscape-mobile:p-2 xl:text-8xl py-4 font-bold bg-surface border-0 opacity-90">Work</p>
      </div>
      <p class="px-4 text-lg xl:text-xl">
        While some of my work remains confidential, I’ve had the opportunity to work
        extensively with <strong>React</strong> in front-end development and gain
        exposure to backend systems using <strong>Django</strong>. However, my
        strong suit would be <strong>Laravel</strong> . Although I’m still early in
        my development journey, I’ve built a strong understanding of
        <strong>Git</strong> for version control, with repositories hosted on
        platforms like <strong>Github</strong>. Below are some of the projects I’m
        able to share, where I applied and expanded my skill set:
      </p>
      <div x-data="workProjectsData" class="relative px-4 py-12 sm:px-6 lg:px-8 flex-1">
        <!-- Project Carousel Navigation -->
        <button
          @click="prevProject"
          class="absolute top-1/2 left-5 rounded-full bg-base p-2 text-secondary shadow-md transition-all hover:bg-primary hover:shadow-lg z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span class="sr-only">Previous project</span>
        </button>

        <!-- Bubbles -->
        <div
          class="flex space-x-2 mt-auto mb-2 absolute left-1/2 -translate-x-1/2 bottom-5 z-20"
          role="group"
        >
          <template x-for="(project, index) in projects" :key="index">
            <div
              :class="{'bg-primary': currentProject === index, 'bg-secondary': currentProject !== index}"
              @click="()=>goToProject(index)"
              class="h-3 w-3 cursor-pointer rounded-full transition-all duration-300 hover:scale-125 hover:bg-primary"
              :style="currentProject === index ? 'transform: scale(1.25);' : ''"
            ></div>
          </template>
        </div>

        <button
          @click="nextProject"
          class="absolute right-5 top-1/2 rounded-full bg-base p-2 text-secondary shadow-md transition-all hover:bg-primary hover:shadow-lg z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span class="sr-only">Next project</span>
        </button>
      <!-- END PROJECTS NAVIGATION-->
      <!-- PROJECTS -->

        <div class="mx-auto max-w-7xl">
          <template x-for="(project, index) in projects" :key="index">
            <div
              x-show="currentProject === index"
              x-cloak
              x-transition:enter.duration.500ms
              x-transition:leave.duration.0ms
              class="rounded-lg bg-base shadow-lg shadow-primary"
            >
              <div class="p-6">
                <h2
                  class="text-3xl font-bold sm:text-4xl"
                  x-text="project.title"
                ></h2>
              </div>
              <hr class="h-0.5 border-t-0 bg-primary/30" />
              <div class="p-6">
                <div class="flex flex-col gap-8 lg:flex-row">
                  <div class="flex-grow space-y-6 lg:w-2/3">
                    <div class="rounded-lg bg-surface p-4">
                      <h3 class="mb-2 text-xl font-semibold">Tech Stack</h3>
                      <p class="text-lg" x-text="project.stack"></p>
                    </div>
                    <div>
                      <h3 class="mb-2 text-xl font-semibold">Project Overview</h3>
                      <p
                        class="text-lg leading-relaxed"
                        x-text="project.description"
                      ></p>
                    </div>
                    <div>
                      <h3 class="mb-2 text-xl font-semibold">
                        Technical Highlights
                      </h3>
                      <ul class="list-inside list-disc space-y-2">
                        <template x-for="detail in project.details" :key="detail">
                          <li class="text-md" x-text="detail"></li>
                        </template>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="hidden aspect-video rounded-lg bg-gray-200 shadow-inner landscape:block lg:w-1/3"
                  >
                    <div
                      class="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary"
                    >
                      <p class="text-center font-semibold text-white">
                        Project Video Placeholder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
    `;
  }
}

if (customElements.get(COMPONENT_NAME) === undefined)
  customElements.define(COMPONENT_NAME, Work);
