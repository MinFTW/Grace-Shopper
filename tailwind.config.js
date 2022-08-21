/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
      },
    },
  },
  plugins: [require('daisyui')],
};
