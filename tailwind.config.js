/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    colors: {
      light: {
        text: "#000000",
        heading: "#1a202c",
        background: "#ffffff",
        primary: "#3182ce",
        secondary: "#2d3748",
      },
      dark: {
        text: "#ffffff",
        heading: "#f7fafc",
        background: "#1a202c",
        primary: "#9f7aea",
        secondary: "#2d3748",
      },
      space: {
        text: "#d1d5db",
        heading: "#f9fafb",
        background: "#1e3a8a",
        primary: "#6366f1",
        secondary: "#3b82f6",
      },
    },
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      bigshoulders: ["Big Shoulders Display", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [
    createThemes({
      halloween: {
        primary: "orange",
        secondary: "yellow",
      },
      summer: {
        primary: "pink",
        secondary: "red",
      },
      winter: {
        primary: "blue",
        secondary: "green",
      },
      party: {
        primary: "steelblue",
        secondary: "darkblue",
      },
    }),
  ],
};
