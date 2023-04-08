/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'inconsolata': ['Inconsolata', 'monospace'],
      'spacemono': ['Space Mono', 'monospace'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'scarecrow-gray': '#333333',
        'scarecrow-gray-light': '#4F4F4F',
        'scarecrow-gray-credits': '#BDBDBD',
      }
    },
  },
  plugins: [],
}

