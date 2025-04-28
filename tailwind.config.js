/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316', // Tailwind orange-500
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        righteous: ['Righteous', 'cursive'],
        marker: ['Permanent Marker', 'cursive'],
      },
    },
  },
  plugins: [],
}
