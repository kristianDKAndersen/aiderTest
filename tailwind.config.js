/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        SG_Blue: '#002235',
        SG_LightGrey: '#E7ECED',
        SG_BrightBlue: '#4066F1',
        SG_DeepBlue: '#2545BB',
        SG_DeepPink: '#FF5574',
        SG_Peach: '#FCCCC0',
        SG_Orange: '#F37121',
        SG_lightOrange: '#F29622',
        SG_grey: {
          200: '#F4F4F4',
          300: '#E0E0E0',
          400: '#B6B6B6',
          500: '#A8A8A8',
          700: '#525252',
        },
        SG_toast: {
          info: '#4066F1',
          warning: '#F37121',
          error: '#FF5574',
          success: '#2545BB',
        },
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
      fontSize: {
        xsm: 'clamp(0.700rem, 5.554vw + -0.500rem, 0.7rem)',
        sm: 'clamp(0.627rem, 6.156vw + -0.606rem, 0.99rem)',
        s: 'clamp(0.625rem, 6.154vw + -0.606rem, 1rem)',
        m: 'clamp(0.625rem, 5.859vw + -2.187rem, 1.2rem)',
        base: 'clamp(0.625rem, 5.859vw + -2.187rem, 1.563rem)',
        lg: 'clamp(0.625rem, 9.615vw + -5.529rem, 3.125rem)',
      },
      lineheight: {
        lh_sm: 'clamp(0.75rem, 4.615vw + -0.173rem, 1.125rem)',
        lh_md: 'clamp(0.75rem, 5.078vw + -1.687rem, 1.563rem)',
        lh_lg: 'clamp(0.75rem, 9.135vw + -5.096rem, 3.125rem)',
      },
    },
  },
  plugins: [],
};
