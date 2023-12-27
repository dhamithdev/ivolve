/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily:{
        GeistMono400 : ['GeistMono400'],
        GeistMono500 : ['GeistMono500'],
        GeistMono600 : ['GeistMono600'],
        Fixel400 : ['Fixel400'],
        Fixel500 : ['Fixel500'],
        Fixel600 : ['Fixel600'],
        PlusJakartaSans : ['PlusJakartaSans'],
        CerebriSans : ['CerebriSans'],
        Poppins400 : ['Poppins400'],
        Poppins600 : ['Poppins600'],
      },

    },
  },
  plugins: [],
};
