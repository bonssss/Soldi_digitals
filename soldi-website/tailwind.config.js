/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: '#FFD700', // Golden color
        black: '#000000', // Black color
        white: '#FFFFFF', // White color
        silver: '#C0C0C0', // Silver color
      },
    },
  },
  plugins: [],
};
