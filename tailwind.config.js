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
        'primary': '#4f46e5',
        'secondary':'rgb(var(--color-secondary))',
        'third' : 'rgb(var(--color-third))'
      }
    },
  },
  plugins: [],
}

