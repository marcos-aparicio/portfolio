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
    <section id="work" class="flex flex-col py-8 min:h-svh">
      <div class="sticky md:static top-0 z-20   bg-[url('https://images.pexels.com/photos/3307218/pexels-photo-3307218.jpeg')] opacity-100 border-0">
        <p class="py-4 text-6xl font-bold border-0 opacity-90 xl:text-8xl landscape-mobile:text-4xl landscape-mobile:p-2 bg-surface">Work</p>
      </div>
      <p class="px-4 portrait:text-md landscape:text-lg xl:text-xl">
        While some of my work remains confidential, I’ve had the opportunity to work
        extensively with <strong>React</strong> in front-end development and gain
        exposure to backend systems using <strong>Django</strong>. However, my
        strong suit would be <strong>Laravel</strong> . Although I’m still early in
        my development journey, I’ve built a strong understanding of
        <strong>Git</strong> for version control, with repositories hosted on
        platforms like <strong>Github</strong>. Below are some of the projects I’m
        able to share, where I applied and expanded my skill set:
      </p>
      <div x-data="workProjectsData" class="relative my-12 mx-4 sm:mx-6 lg:mx-8 h-2/3">
        <!-- Project Carousel Navigation -->
        <button
          @click="prevProject"
          class="absolute -left-5 xl:-left-10 top-1/2 z-10 p-2 rounded-full shadow-md transition-all hover:shadow-lg bg-base text-secondary hover:bg-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="xl:w-6 xl:h-6 w-4 h-4"
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
          class="hidden landscape-mobile:hidden md:flex absolute -bottom-10 left-1/2 z-20 mt-auto mb-2 space-x-2 -translate-x-1/2"
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
          class="absolute -right-5 xl:-right-10 top-1/2 z-10 p-2 rounded-full shadow-md transition-all hover:shadow-lg bg-base text-secondary hover:bg-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="xl:w-6 xl:h-6 w-4 h-4"
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
          <template x-for="(project, index) in projects" :key="index">
            <div
              x-show="currentProject === index"
              x-cloak
              x-transition:enter.duration.500ms
              x-transition:leave.duration.0ms
              class="rounded-lg shadow-lg bg-base shadow-primary h-fit"
            >
              <div class="landscape-mobile:p-2 p-4">
                <h2
                  class="text-2xl font-bold xl:text-3xl landscape-mobile:text-md"
                  x-text="project.title"
                ></h2>
              </div>
              <hr class="h-0.5 border-t-0 bg-primary/30" />
              <div class="landscape-mobile:p-2 p-4">
                <div class="flex flex-col gap-6 lg:flex-row">
                  <div class="flex-grow space-y-6 lg:w-2/3">
                    <div class="p-2 xl:p-4 rounded-lg bg-surface">
                      <h3 class="mb-2 text-lg xl:text-xl font-semibold">Tech Stack</h3>
                      <p class="text-md" x-text="project.stack"></p>
                    </div>
                    <div>
                      <h3 class="mb-2 text-lg xl:text-xl font-semibold">Project Overview</h3>
                      <p
                        class="text-sm leading-relaxed"
                        x-text="project.description"
                      ></p>
                    </div>
                    <div>
                      <h3 class="mb-2 text-xl font-semibold">
                        Technical Highlights
                      </h3>
                      <ul class="space-y-2 list-disc list-inside">
                        <template x-for="detail in project.details" :key="detail">
                          <li class="text-sm" x-text="detail"></li>
                        </template>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="hidden m-2 shadow-inner lg:w-1/3 landscape:lg:block"
                  >
                    <div
                      class="flex justify-center items-center"
                    >
                      <iframe
                        class="lg:w-full aspect-square lg:max-w-96"
                        :src="project.video + '&enablejsapi=1'"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
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
  customElements.define(COMPONENT_NAME, Work);
