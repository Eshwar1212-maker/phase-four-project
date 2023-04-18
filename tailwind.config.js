/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(calc(100vw - 3.75rem), 0)' },
          '50%': { transform: 'translate(calc(100vw - 3.75rem), calc(100vh - 3.75rem))' },
          '75%': { transform: 'translate(0, calc(100vh - 3.75rem))' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}