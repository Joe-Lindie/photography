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
        brown: '#c8b3a2', // HEX brown
        lightBrown: '#ddd5d0', // HEX light brown
        darkCream: '#dddad1', // HEX dark cream
      },
      screens: {
        xs: '360px', // Extra small screens
        sm: '640px', // Small screens
        md: '768px', // Medium screens
        lg: '1024px', // Large screens
        xl: '1280px', // Extra-large screens
      },
    },
  },
  plugins: [],
};
