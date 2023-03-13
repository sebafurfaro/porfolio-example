/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/forms'),
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          transition: 'all .4s ease-in-out'
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
        '.bg-gradient-sky': {
          backgroundSize: '100% 100%',
          backgroundPosition: '0px 0px,0px 0px,0px 0px,0px 0px,0px 0px',
          backgroundImage: 'radial-gradient(49% 81% at 45% 47%, #03C2FF45 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, #00C1FFFF 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #9900FFFF 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, #9900FFFF 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, #00CDFFFF 0%, #1100FFFF 100%)'
        },
        '.column-8': {
          width: '60vw'
        },
        '.column-4': {
          width:'40vw'
        }
      })
    })
  ],
}
