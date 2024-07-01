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
          highlight: "#FF5277",
        },
        light: {
          bg: "#F6F6EF",
          text: "#000000",
          primary: "#FFF",
          secondary: "#828282",
          accent: "#eee",
          highlight: "#FF6600",
        },
        space: {
          bg: "#13032A",
          text: "#FEFF00",
          primary: "#13032A",
          secondary: "#311B46",
          accent: "#4e4e8f",
          highlight: "#48F5F7",
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
