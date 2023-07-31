/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#cc3',
        secondary: '#261161',
        temp: '#FE6150',
        light: "#f1e1df",
        lighter: "rgb(238, 238, 221)",
        darker: "#00000010"
      },
      fontFamily: {
        header: ['Acme', 'sans-serif'],
        textfont: ['Ysabeau Infant', 'sans-serif'],
      }
    },
  },
  plugins: [],
  
}
