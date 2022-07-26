/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //custom break points
    extend: {
      screens:{
        "3xl":"2000px",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
  //you have to do yarn add the plugin
}
