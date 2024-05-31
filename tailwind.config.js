/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      colors: {
        colorFirst: '#333333',
        colorSecond: '#707070'
      }
    },
  },
  plugins: [],
}

