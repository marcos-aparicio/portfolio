import Alpine from "alpinejs";
import data from "./data.js";

// starting alpine
Alpine.data("projectsData", data);

// functionality
import "./other/theme-switcher.js";
import "./other/parallax-effect.js";

import "./sections";
// last web component to be imported should be the navbar
import "./components/navbar.js";

// starting alpine
window.Alpine = Alpine;
Alpine.start();
