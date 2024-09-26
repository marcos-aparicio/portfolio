import Alpine from "alpinejs";
import data from "./data.js";

// functionality
import "./other/theme-switcher.js";

import "./sections/hero.js";
// last web component to be imported should be the navbar
import "./components/navbar.js";

window.Alpine = Alpine;
Alpine.data("projectsData", data);

Alpine.start();
