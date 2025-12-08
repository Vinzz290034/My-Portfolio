/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',    // Black
        secondary: '#FFFFFF',  // White
        pop: '#00FFFF',        // Electric Blue
        'pop-dark': '#00CCCC', // Darker Electric Blue for hover states
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}