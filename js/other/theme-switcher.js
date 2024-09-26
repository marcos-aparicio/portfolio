// extracted from https://www.youtube.com/watch?v=vIBKSmWAdIA&ab_channel=TomIsLoading
const selectedTheme = localStorage.getItem("theme");

if (selectedTheme) {
  document.body.classList.add(selectedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  localStorage.setItem("theme", "theme-dark");
  document.body.classList.add("theme-dark");
} else {
  localStorage.setItem("theme", "theme-light");
  document.body.classList.add("theme-light");
}
