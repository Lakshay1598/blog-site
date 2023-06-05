/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        // Define your color palette
        primary: '#FF0000',
        secondary: '#00FF00',
      },
    },
  },
  variants: {},
  plugins: [],
};

