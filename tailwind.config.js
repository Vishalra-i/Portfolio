/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontFamily: {
        'poppins': ['"Poppins"'],
        'protest':['"Protest Riot"']
      },
      boxShadow: {
        '3xl': '50px 35px 60px 55px red',
      },
      animation:{
        slideInFromLeft: "slideInFromLeft  ease-in-out",
        slide: "slide 5s infinite linear"
      },
      keyframes:{
        slideInFromLeft:{
          "0%":{transform: "translateX(-100%)"},
          "100%":{transform: "translateX(0%)"},
        },
        slide:{
          "from":{transform: "translateX(0)"},
          "to":{transform: "translateX(-100%)"}
        }
      }
    }
            
      
    }, // Comma removed here


}
