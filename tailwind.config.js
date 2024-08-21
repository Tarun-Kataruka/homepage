/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        'custom-green': '#214236',
        'custom-green-light': '#56d8b1',
        'custom-gray': '#f7f7f7',
        'custom-green-dark':'#63c29f',
        'custom-count':'#56d8b1',
        'custom-green-cart':'#82b440',
      },
      textShadow: {
        outline: '0 0 2px black', // Adjust values as needed
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-outline': {
          'text-shadow': '0 0 2px black, 0 0 2px black',
        },
      });
    },
  ],
}

