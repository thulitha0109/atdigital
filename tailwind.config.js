/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8A2BE2',
        secondary: '#F28D35',
        danger: '#e3342f',
      },
    },
  },
  plugins: [],
}

