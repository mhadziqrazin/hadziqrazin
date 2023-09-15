/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'light': '#EEEEEE',
        'primary': '#D65A31',
        'secondary': '#393E46',
        'dark': '#222831',
      }
    },
  },
  plugins: [],
}

