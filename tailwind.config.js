/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        bgdark: "url('./media/images/bgAevisio.png')",
      },
      colors: {
        whiteGray: '#DEDDDD',
        darkGray: '#0F1223',
        input: '#404040',
        lightblue: '#333A5E',
        customGreen: '#58926F',
        customRed: '#976C6C',
        customBlue: '#292D41',
      },
      boxShadow: {
        mainShadow: '5px 5px 10px rgba(0, 0, 0, 0.50)',
        inputShadow: '5px 5px 20px rgba(0, 0, 0, 0.6)',
        buttonShadow: '5px 5px 10px rgba(0, 0, 0, 0.20)',
      },
      gridTemplateRows: {
        desktop: '1fr 1fr',
        mobile: '130px 200px 420px 30px',
      },
      gridTemplateColumns: {
        desktop: '300px 1fr',
        phone: '1fr',
      },
      screens: {
        sm: '1200px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
