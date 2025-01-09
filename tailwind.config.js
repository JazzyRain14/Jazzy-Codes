/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#18315A",
        'secondary': "#FB4059",
        'primary-button': "#294672",
        'secondary-button': "#FE3E57",
      },
      screens: {
        'sm': '450px',
        'md': '750px',
        'lg': '1024px',
      },
    },
  },
  plugins: [],
}