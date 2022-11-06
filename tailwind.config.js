/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Poppins', 'sans-serif'],
    },
    minHeight: {
      'mainCalc': 'calc(100vh - 160px)',
    },
    minWidth: {
      'card': '240px',
    },    
    extend: {
      gridTemplateColumns: {
        'gridCard': 'repeat(auto-fill, minmax(260px, 1fr))',
        'gridCardCategory': 'repeat(auto-fill, minmax(180px, 1fr))',
      },
      maxHeight: {
        'shoppingCart': 'calc(100vh - 325px)',
      }
    },
  },
  plugins: [],
}