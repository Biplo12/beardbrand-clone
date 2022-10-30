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
      },
      fontFamily: {
        'space-grotesk': 'Space Grotesk, sans-serif',
        zurich: 'Zurich BdEx L2',
        sans: ['Space Grotesk, sans-serif'],
      },
      fontSize: {
        xsm: '.75rem',
        sm: '.9rem',
        md: '1.1rem',
        lg: '1.6rem',
        xl: '1.9rem',
        xxl: '2.25rem',
        xxxl: '4rem',
      },
      screens: {
        // => @media (min-width: 640px) { ... }
        mxsm: { max: '640px' },
        // => @media (min-width: 768px) { ... }
        mxmd: { max: '768px' },
        // => @media (min-width: 1024px) { ... }
        mxlg: { max: '1024px' },
        // => @media (min-width: 1280px) { ... }
        mxxl: { max: '1280px' },
      },
    },
  },
  plugins: [],
};
