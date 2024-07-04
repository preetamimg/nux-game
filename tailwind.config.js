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
        }
      }
    },
  },
  plugins: [],
}