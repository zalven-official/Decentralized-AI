import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  safelist: ['dark'],

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}'
  ],

  theme: {},
  plugins: [
    animate,
    require('daisyui') // eslint-disable-line no-undef
  ],
  daisyui: {
    themes: ['dim', 'dark', 'cupcake']
  }
};
