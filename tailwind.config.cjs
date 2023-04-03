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
          primary: { main: "#e9eeff", light: "#edf1ff", dark: "#a3a6b2" },
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
