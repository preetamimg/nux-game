/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme1': '#440091',
        'theme2': '#7c7cfe',
        'theme3': '#060048',
        'theme4': '#e8e5f4',
        'theme5': '#f5f5f7',
        
      },
      keyframes: {
        wiggle: {
          '0%,': { transform: 'rotate(-3deg)',
                        
           },
          '50%': { transform: 'translateX(10px)',
                    
           },
          '100%': { transform: 'rotate(6deg)',
                    
           },
        },
        marqueeHorizontal: {
          '0%': { 
            transform: 'translateZ(0)',
            visibility: 'visible',
          },
          '100%': { 
            transform: 'translate3d(-100%,0,0)'
          },
        },
        progress: {
          '0%': {
            '--progress': '0',
          },
          '100%': {
            '--progress': '1',
          }
        },
        fixedNav: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-60px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0px)' 
          },
        },
        fall: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(0)' 
          },
          '10%': { 
            opacity: '1'
          },
          '100%': { 
            opacity: '0.5',
            transform: 'translateY(100vh)' 
          },
        },
        diagonalfall: {
          '0%': { 
            opacity: '0',
            transform: 'translate(0, 0)' 
          },
          '10%': { 
            opacity: '1'
          },
          '100%': { 
            opacity: '0.25',
            transform: 'translate(10vw, 100vh)' 
          },
        }

      },
       animation: {
        'progress': 'progress 3s forwards',
        'fixed-nav': 'fixedNav 0.6s',
        'fall': 'fall 0.6s',
        'diagonalfall': 'diagonalfall 0.6s',
        'marquee-h': 'marqueeHorizontal 20s linear infinite'
       },
     
    },
  },
  plugins: [],
}