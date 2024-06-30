/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-dark-primary",
    "text-dark-secondary",
    "bg-dark-accent",
    "text-dark-highlight",
    "bg-light-primary",
    "text-light-secondary",
    "bg-light-accent",
    "text-light-highlight",
    "bg-space-primary",
    "text-space-secondary",
    "bg-space-accent",
    "text-space-highlight",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#000",
          text: "#fff",
          primary: "#333",
          secondary: "#444",
          accent: "#555",
          highlight: "#666",
        },
        light: {
          bg: "#89CFF0",
          text: "#000",
          primary: "#B3E5FC",
          secondary: "#ddd",
          accent: "#eee",
          highlight: "#fff",
        },
        space: {
          bg: "#1e1e2f",
          text: "#a0a0c0",
          primary: "#2e2e4f",
          secondary: "#3e3e6f",
          accent: "#4e4e8f",
          highlight: "#5e5eaf",
        },
      },
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
