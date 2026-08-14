/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 60px -20px rgba(49, 89, 255, 0.35)',
      },
    },
  },
  plugins: [],
}
