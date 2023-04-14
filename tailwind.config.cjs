const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#daa520',
        heading: '#daa520',
        lightHeading: '#ffffff',
        light:  '#ffffff',
        paragraph: '#8d8d8dff',
        lightParagraph: '#ffffff',
        hightlitenParagraph: '#7b6020',
        button: '#daa520',
        icon: '#daa520',
        lightBackground: '',
        background: '#1b1b1bff',
        navFocus: '#daa520',
        cardBackground: "#2b2b2b",
        table1: "#B9F2FF",
        table2: "#C2911D",
        table3: "#C6C6C6",
        table4: "#364649"
      },
      fontFamily:{
        cinzel: ['Cinzel']
      }
    },
  },
  
  plugins: [],
}
