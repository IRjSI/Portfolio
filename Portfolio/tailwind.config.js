/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      
      fontFamily: {
        dancing: ['Dancing Script', 'cursive', 'EB Garamond'],
        montserrat: ['Montserrat'],
        poppins: ['Poppins'],
        raleway: ['Raleway'],
      },
      boxShadow: {
        'all-sides': '0 2px 20px rgba(0, 0, 0, 0.1), 0 2px 30px rgba(0, 0, 0, 0.1)',
      },
      textShadow: {
        glow: '0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 0.3)',
      },
      animation: {
        'font-smooth': 'fontChange 1s ease-in-out',
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        fontChange: {
          '0%': { fontFamily: 'Dancing Script, sans-serif' },
          '25%': { fontFamily: 'monospace, monospace' },
          '50%': { fontFamily: 'Montserrat, monospace' },
          '100%': { fontFamily: 'Dancing Script, sans-serif' },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};

