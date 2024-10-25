/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        secondary: "var(--secondary)",
        surface: "var(--surface)",
        base: "var(--base)",
      },
      fontSize: {
        md: "1rem",
      },
      screens: {
        "landscape-mobile": {
          raw: "only screen and ((orientation: landscape) and (max-width: 900px))",
        },
      },
    },
  },
  plugins: [],
};
