/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06753D',
          dark: '#00361B',
        },
        secondary: {
          light: '#F0F9FF',
          DEFAULT: '#C3E5F8',
          dark: '#7CD1FD',
        },
        accent: {
          light: '#FDDBAB',
          DEFAULT: '#F6811F',
        },
        link: '#065786',
        surface: {
          white: '#F5F6F5',
          light: '#E6E7E6',
          dark: '#282A29',
          darkest: '#CFD2D0',
        },

      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};