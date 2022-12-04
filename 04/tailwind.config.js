/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#21744f',
        'light-green': '#65f9b7',
        green: '#42b883',
        'gray-dark': '#0f172a',
      },
    },
  },
}
