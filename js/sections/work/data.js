export default () => ({
  currentProject: 0,
  projects: [
    {
      title: "Between The Lines",
      stack: "LAMP (Linux, Apache, MySQL, PHP) + Vanilla JS with SASS",
      description:
        "Developed a crowdsourcing platform for transcribing handwritten notes from historical index cards of British Home Children.",
      details: [
        "Designed an interactive interface using Vanilla JS and SVG manipulation.",
        "Created a custom database schema and REST API endpoints.",
        "Implemented a responsive frontend using SASS.",
      ],
      video: "https://www.youtube.com/embed/QVvyTUMf4VA?si=AkWjDTNLsaoBJHKN",
    },
    {
      title: "Remembering Their Faces",
      stack: "TailwindCSS, AlpineJS, Laravel, Livewire",
      description:
        "Built a proof-of-concept CMS-like web application for an aviation museum to raise awareness of Canada's contributions during WWII.",
      details: [
        "Designed a custom database schema for user engagement features.",
        "Utilized a library for image optimization.",
        "Leveraged Livewire within the Laravel ecosystem.",
      ],
      video: "https://www.youtube.com/embed/JE40Vq7J8ZI?si=oq-hku79MixFQwX-",
    },
    {
      title: "RCNA.ca",
      stack: "TailwindCSS, AlpineJS, Laravel, Livewire",
      description:
        "Developed a proof-of-concept (POC) to modernize a legacy website, transitioning to a CMS for easier management of content.",
      details: [
        "Implemented Statamic, a Laravel-based CMS, using Antlers for adaptive forms.",
        "Enhanced multi-language support with Laravel Localization.",
        "Integrated Laravel Cashier and Stripe for payment processing.",
        "Simplified membership registration using FilamentPHP.",
      ],
      video: "https://www.youtube.com/embed/AXH5X7H2LE0?si=QrcMMrIpdOaSANDF",
    },
  ],
  nextProject() {
    //pauses current video if playing
    this.pauseCurrentProjectVideo();
    this.currentProject = (this.currentProject + 1) % this.projects.length;
  },
  prevProject() {
    //pauses current video if playing
    this.pauseCurrentProjectVideo();
    this.currentProject =
      (this.currentProject - 1 + this.projects.length) % this.projects.length;
  },
  goToProject(index) {
    if (index < 0 || index >= this.projects.length) return;

    //pauses current video if playing
    this.pauseCurrentProjectVideo();
    this.currentProject = index;
  },
  pauseCurrentProjectVideo() {
    const currentIFrame = document.querySelector(
      `iframe[src="${this.projects[this.currentProject].video}&enablejsapi=1"]`,
    ).contentWindow;
    currentIFrame.postMessage(
      JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
      "*",
    );
  },
});
