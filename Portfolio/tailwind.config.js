/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive', 'EB Garamond',],
        montserrat: ['Montserrat'],
      },
      boxShadow: {
        'all-sides': '0 2px 20px rgba(0, 0, 0, 0.1), 0 2px 30px rgba(0, 0, 0, 0.1)',
      },
      textShadow: {
        glow: '0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 0.3)',
      },
      animation: {
        'font-smooth': 'fontChange 1s ease-in-out',
      },
      keyframes: {
        fontChange: {
          '0%': { fontFamily: 'Dancing Script, sans-serif' },
          '25%': { fontFamily: 'monospace, monospace' },
          '50%': { fontFamily: 'Montserrat, monospace' },
          '100%': { fontFamily: 'Dancing Script, sans-serif' },
        },
      }
    }
  },
  plugins: [
    // require('tailwindcss-textshadow') // Add this plugin
  ],
}

