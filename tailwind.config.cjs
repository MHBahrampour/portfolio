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
        cCommon: { black: "#0f1b2c", white: "#f2f2f2" },
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
