/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFBE33',
        'secondary': '#222831',
      },
      container: {
        screens: {
          'xs' : '375px',
          'sm' : '640px',
          'md' : '768px',
          'lg' : '1024px',
          'xl' : '1140px',
          '2xl' : '1140px',
        },
      },
      fontFamily : {
        'dancing': ['Dancing Script', 'cursive'],
        'open': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
