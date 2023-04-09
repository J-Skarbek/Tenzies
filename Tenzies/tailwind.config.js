/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
    },
    colors: {
      'bright-yellow': '#FAF535',
      'dark-purple': '#4500AD',
      'mid-purple': '#6907FA',
      'light-purple': '#7a21ff',
      'dark-blue': '#1D00AD',
      'mid-blue': '#3712FA',
      'light-blue': '#4F2BFF',
      'off-white-yellow': '#F7F3DF',
      'off-white-blue': '#DDDEFE',
    },
    extend: {},
  },
  plugins: [],
}

