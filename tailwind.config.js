/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'charleston-green': '#2B2E30',
        'max-green-yellow': '#D9F542',
        alabaster: '#F3EFE2',
        'dark-vanilla': '#DCCAA8',
        'whitest-white': '#F9F8F6',
        plateu: '#D1E8E3',
      },
      fontFamily: {
        'space-grotesk': 'Space Grotesk, sans-serif',
        zurich: 'Zurich BdEx L2',
        pano: 'Pano',
        sans: ['Space Grotesk, sans-serif'],
      },
      fontSize: {
        xsm: '.75rem',
        sm: '.9rem',
        md: '1.1rem',
        lg: '1.45rem',
        xl: '1.75rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '3.5rem',
      },
      screens: {
        // => @media (max-width: 480px) { ... }
        mxxsm: { max: '480px' },
        // => @media (max-width: 640px) { ... }
        mxsm: { max: '640px' },
        // => @media (max-width: 768px) { ... }
        mxmd: { max: '768px' },
        // => @media (max-width: 1024px) { ... }
        mxlg: { max: '1024px' },
        // => @media (max-width: 1280px) { ... }
        mxxl: { max: '1280px' },
      },
    },
  },
  plugins: [],
};
