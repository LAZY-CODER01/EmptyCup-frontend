/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
                chivo: ['Chivo', 'sans-serif'],

        lemonMilk: ['"Lemon Milk"', 'sans-serif'],
        

        manrope: ["Manrope", "sans-serif"],
        pacifico: ['Pacifico', 'cursive'],
        playfair: ["Playfair Display", "serif"],
        // Custom font family
        keyframes: {
          shine: {
            '0%': { transform: 'translateX(-150%)' },
            '100%': { transform: 'translateX(150%)' }
          }
        },
        animation: {
          shine: 'shine 1.5s ease-in-out infinite'
        }
      },
    },
  },
  plugins: [],
}
