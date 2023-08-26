/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '680px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
    },
  },
};
