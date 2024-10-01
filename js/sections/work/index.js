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
    <section id="work" class="flex overflow-hidden flex-col py-8 h-svh">
      <div class="sticky md:static top-0 z-10   bg-[url('https://images.pexels.com/photos/3307218/pexels-photo-3307218.jpeg')] opacity-100 border-0">
        <p class="py-4 text-6xl font-bold border-0 opacity-90 xl:text-8xl landscape-mobile:text-4xl landscape-mobile:p-2 bg-surface">Work</p>
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
      <div x-data="workProjectsData" class="relative flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <!-- Project Carousel Navigation -->
        <button
          @click="prevProject"
          class="absolute left-5 top-1/2 z-10 p-2 rounded-full shadow-md transition-all hover:shadow-lg bg-base text-secondary hover:bg-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
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
          class="flex absolute bottom-5 left-1/2 z-20 mt-auto mb-2 space-x-2 -translate-x-1/2"
          role="group"
        >
          <template x-for="(project, index) in projects" :key="index">
            <div
              :class="{'bg-primary': currentProject === index, 'bg-secondary': currentProject !== index}"
              @click="()=>goToProject(index)"
              class="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 hover:bg-primary"
              :style="currentProject === index ? 'transform: scale(1.25);' : ''"
            ></div>
          </template>
        </div>

        <button
          @click="nextProject"
          class="absolute right-5 top-1/2 z-10 p-2 rounded-full shadow-md transition-all hover:shadow-lg bg-base text-secondary hover:bg-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
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
              class="rounded-lg shadow-lg bg-base shadow-primary"
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
                    <div class="p-4 rounded-lg bg-surface">
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
                      <ul class="space-y-2 list-disc list-inside">
                        <template x-for="detail in project.details" :key="detail">
                          <li class="text-md" x-text="detail"></li>
                        </template>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="hidden bg-gray-200 rounded-lg shadow-inner lg:w-1/3 aspect-video landscape:block"
                  >
                    <div
                      class="flex justify-center items-center w-full h-full bg-gradient-to-br from-primary"
                    >
                      <p class="font-semibold text-center text-white">
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
