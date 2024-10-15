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
      backgroundImage: {
        'dual-cloud-gradient': 'radial-gradient(circle at top left, #7cd0db 30%, transparent 50%), radial-gradient(circle at bottom right, #7cd0db 10%, transparent 50%)',
        'dual-gradient': 'radial-gradient(circle at bottom left, #7cd0db 30%, transparent 50%),radial-gradient(circle at top right ,#7cd0db 10%, transparent 50% )',
        'dark-cloud-gradient': 'radial-gradient(circle at top left, #7cd0db 30%, transparent 50%), radial-gradient(circle at bottom right, #7cd0db 30%, #000 50%)',
      },
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
        slide: "slide 35s infinite linear",
        switch:"switch 5s infinite linear",
        cloud: "cloudMove 10s infinite ease-in-out ",
      },
      keyframes:{
        slideInFromLeft:{
          "0%":{transform: "translateX(-100%)"},
          "100%":{transform: "translateX(0%)"},
        },
        slide:{
          "from":{transform: "translateX(0)"},
          "to":{transform: "translateX(-100%)"}
        },
        switch:{
          "0%":{background: " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"},
          "50%":{background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"},
          "100%":{background: "linear-gradient(90deg, rgba(73,224,177,1) 0%, rgba(85,29,253,1) 50%, rgba(252,69,106,1) 100%)"}
        },
        cloudMove: {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      }
    }
            
      
    }, // Comma removed here


}
