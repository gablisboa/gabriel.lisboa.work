const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './index.html',
  ], 
  darkMode: 'class',
  
  theme: {
    extend:{
      colors: {
        link: colors.blue[300]
      },
      backgroundImage: {
        'working': "url('../src/assets/img/working.png')",
      },

      animation: { 
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        'sans': ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        'mono': ['"IBM Plex Mono"', ...defaultTheme.fontFamily.sans],
      }
    }
  }
  
}
