/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      colors: {
        common: { black: "#0f1b2c", white: "#f2f2f2" },
        lt: {
          primary: { main: "#222D3C", light: "#4e5763", dark: "#171f2a" },
          secondary: { main: "#008B88", light: "#33a29f", dark: "#00615f" },
        },
        dt: {
          primary: { main: "#B5C5D7", light: "#CAD5E2", dark: "#A2B7CD" },
          secondary: { main: "#00A19D", light: "#33B3B0", dark: "#00706D" },
        },
      },
      boxShadow: {},
    },
  },
  corePlugins: {
    preflight: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/container-queries")],
};
