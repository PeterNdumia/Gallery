/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs':'320px',
      'xsm':'450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl':'1680px',
      '4xl':'1786px',
   
    },
    colors: {
      'primary': '#240898',
      'white':'#FFFFFF',
      'black':'#000000',
      'grey':"#D9D9D9"
    },
    extend: {    
    },
  },
  plugins: [],
}