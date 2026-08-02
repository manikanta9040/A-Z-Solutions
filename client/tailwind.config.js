/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#1b65ff',
        accentDark: '#0f3ec9',
        gold: '#e0b24d',
        surface: '#0f172a',
      },
      boxShadow: {
        card: '0 24px 80px rgba(15, 23, 42, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
