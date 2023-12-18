/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily:{
        GeistMono500 : ['GeistMono500'],
        GeistMono600 : ['GeistMono600'],
        Fixel400 : ['Fixel400'],
      },

    },
  },
  plugins: [],
};
