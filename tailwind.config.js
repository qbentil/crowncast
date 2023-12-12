/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6941C6",
        "primary-700": "#6941C6",
        "primary-50": "#F9F5FF",
        "primary-100": "#F4EBFF",
        hover: "#7F56D9",
      },
    },
    display: ["group-hover"],
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}