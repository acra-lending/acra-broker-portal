/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.js',
    './pages/**/*.js',
    './components/*.js',
    './components/MultiStepForm/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
