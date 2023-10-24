/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: "#e1dfd8",
        "verge-black": "#131313",
      }
    },
  },
  plugins: [],
}