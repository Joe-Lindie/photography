/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: '#ddd5d0', //brown
        'light-brown': '#f5f2f1', //light-brown
        'dark-cream': '#dddad1', //dark-cream
        'black-rgba': 'rgba(0, 0, 0, 0.7)', //opaque-black
        'white-rgba': 'rgba(255, 255, 255, 0.7)', //opaque-white,
      },
      screens: {
        xs: '360px', //Extra small screens
        sm: '640px', //Small screens
        md: '768px', //Medium screens
        lg: '1024px', //Large screens
        xl: '1280px', //Extra-large screens
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-top': 'slide-in-top 0.5s ease-in',
      },
      keyframes: {
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-in-top': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
