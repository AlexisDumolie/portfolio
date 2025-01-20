/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#EEF0F2',
        secondary: '#C6C7C4',
        accent: '#A2999E',
        primary: '#846A6A',
        text: '#353B3C',
      },
      backgroundColor: {
        'primary-light': 'rgba(132, 106, 106, 0.1)',
        'primary-hover': 'rgba(132, 106, 106, 0.9)',
      },
    },
  },
  plugins: [],
}
