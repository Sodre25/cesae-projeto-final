/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
      },
      backgroundImage: {
        "new-arrivals-comfort": "url('./new-arrivals-comfort.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};