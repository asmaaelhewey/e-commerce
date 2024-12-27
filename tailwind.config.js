/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    container: {
      center: true
    },
    extend: {
      colors: {
         purple:{
        50:"dfcdd7",
        100:"d0b5c3",
        200:"c09caf",
        300:"b0839c",
        400:"a06a88",
        500:"905174",
        600:"813960",
        700:"71204c",
        800:"610738",
        900:"3a0422",
        950:"270316",
}
    },
    fontFamily: {
      cairo: 'Cairo Variable',
    },
    screens: {
      "2xl": "1320px"
    }
    },
  },
  plugins: [],
}

