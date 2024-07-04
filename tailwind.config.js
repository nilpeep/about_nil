/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

const { colors } = require("./src/data/colors");

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
      colors,
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
};
