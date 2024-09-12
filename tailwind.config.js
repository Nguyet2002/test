/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "registerBanner": "url('/src/assets/img/register/responBanner.png')"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
