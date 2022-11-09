/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-pred-50':'#E7F6F6',
        'blue-pred-100':'#C6E1F7',
        'blue-pred-200':'#1D9CD4',
        'blue-pred-400':'#136AE4',
     
      }
    },
  },
  plugins: [],
}
