// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      slidebg: "#070216",
      secondary: "#0d0723",
      danger: "#070216",
      green:'#4EBE75',
      bronw:'#c36113',
    }),
    textColor: {
      primary: "#070216",
      secondary: "#ffed4a",
      danger: "#e3342f",
      dicount: "#5b1600",
      rating: "#39c98a",
      orange: "#ff9f00",
      orange1: '#ffa500',
      blue: '#5A83DB',
      white:'white',
    },
  
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
};
