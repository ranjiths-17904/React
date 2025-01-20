/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryPurple: '#9f42ff',
        secondaryPurple: '#d3a8ff',
        darkGray: '#2e2e2e',
        lightGray: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
