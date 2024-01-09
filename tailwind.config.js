/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        poppins:["Poppins", "sans-serif"],
        inter:["Inter", "sans-serif"]
        }
      ,colors: {
      menu:{
        100:'#343B53',
        200:'#1E2640',
    },
    searchbg:'#F2F2F2',
    card:{
      200:'#146EB4',
      100:'#0E4F82',

    }
  },},
  plugins: [],
}
}

