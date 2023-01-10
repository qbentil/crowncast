/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6941C6"
      },
    },
    display: ["group-hover"],
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}