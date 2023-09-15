/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'light': '#EEEEEE',
        'primary': '#FF8C32',
        'secondary': '#E84545',
        'dark': '#2B2E4A',
      }
    },
  },
  plugins: [],
}

