/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors :{
        'transparent': 'transparent',
        'white': '#ffffff',
        'primary': 'rgb(var(--color-primary))',
        'secondary':'rgb(var(--color-secondary))',
        'third' : 'rgb(var(--color-third))'
      }
    },
  },
  plugins: [],
}

