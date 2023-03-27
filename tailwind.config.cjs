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
          primary: { main: "#0f1b2c", light: "#3f4856", dark: "#0a121e" },
          secondary: { main: "#008B88", light: "#33a29f", dark: "#00615f" },
        },
        dt: {
          primary: { main: "f2f2f2", light: "#f4f4f4", dark: "#a9a9a9" },
          secondary: { main: "#00a19d", light: "#33b3b0", dark: "#00706d" },
        },
      },
      boxShadow: {
        cLight: "1px 4px 12px 1px rgba(18, 18, 18, 0.1)",
        cDark: "1px 4px 12px 1px rgba(0, 0, 0, 1)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
