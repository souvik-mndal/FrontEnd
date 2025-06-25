/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        softgray: '0 0 2rem #999',
      },
      screens: {
        'xd': '480px',        
      },
      width:{
        two:"47%",
        three:"30%"
      }
    },
  },
  plugins: [],
}