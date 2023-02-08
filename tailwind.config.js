/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
        inter:['Inter', 'sans-serif'],

      },
      maxWidth:{
        1320:"82.5rem"
      },
      colors:{
        brand:{
          black:'#0D1317',
          gray:{
            500:'#394149',
            600:'#5B5B5B',
          },
          darkBlue:'#1D3444',
          darkBlue400:'#063255',
          skyBlue:'#DCEAF5',
          orange:'#F58A07',
        }
      },
      borderRadius:{
        '32px':"2rem",
      },
      spacing:{
        18:"1.125rem"
      },

      keyframes: {
        spin: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
       },
       animation: {
        spin: 'spin 10s linear infinite',
       }, 
    },
  },
  plugins: [],
}
