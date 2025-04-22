/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'expensify-blue': '#1778FB',
        'expensify-green': '#2ECB6E',
        'expensify-dark': '#17253D',
        'expensify-light': '#F8FAFB',
        'expensify-gray': '#8B9CB1',
      },
    },
  },
  plugins: [],
}