import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  darkMode: "class",

  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#65cc89",
          "primary-content": "#233e31",
          secondary: "#367bfb",
          "secondary-content": "#f9fafb",
          accent: "#e95234",
          "accent-content": "#f9fafb",
          neutral: "#333c4c",
          "neutral-content": "#f9fafb",
          "base-100": "#e9e7e7",
          "base-200": "#d7d5d5",
          "base-300": "#c7c2c2",
          "base-content": "#333c4c",
          info: "#3abef7",
          "info-content": "#012b3e",
          success: "#37d39a",
          "success-content": "#013321",
          warning: "#fabd22",
          "warning-content": "#382800",
          error: "#f87272",
          "error-content": "#470000",
        },
        dark: {
          primary: "#065f46",
          "primary-content": "#ffffff",
          secondary: "#0ea5e9",
          "secondary-content": "#bae6fd",
          accent: "#fb7185",
          "accent-content": "#ffffff",
          neutral: "#414557",
          "neutral-content": "#d6d7db",
          "base-100": "#262935",
          "base-200": "#181921",
          "base-300": "#09090d",
          "base-content": "#f8f8f1",
          info: "#8be8fd",
          "info-content": "#202e31",
          success: "#52f97c",
          "success-content": "#192e1c",
          warning: "#db7706",
          "warning-content": "#2d2e1e",
          error: "#ff5756",
          "error-content": "#311816",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
} as Config;
