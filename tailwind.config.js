const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '450px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        dark: '#F3F4F6B2',
        DEFAULT: '#FFFFFF',
      },
      gray: {
        darkest: '#898583',
        dark: '#C4C4C4',
        DEFAULT: '#EFEEEE',
        light: '#AFAAA833',
        lightest: '#35100C80',
      },
      green: {
        light: '#32C25233',
        DEFAULT: '#1D9A39',
      },
      yellow: {
        light: '#FF963533',
        DEFAULT: '#FF9635',
      },
      red: {
        light: '#F931311A',
        DEFAULT: '#F93131',
      },
      purple: {
        DEFAULT: '#120C35'
      },
      black: {
        lightest: '#AFAAA8',
        DEFAULT: '#35100C'
      }
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'xl': '18px',
      '2xl': '24px',
      '3xl': '32px'
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
