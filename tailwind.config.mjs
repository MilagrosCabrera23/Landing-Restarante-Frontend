/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       luxury: {
          gold: "#D4AF37",    
          ivory: "#F9F9F7", 
          charcoal: "#1A1A1A",
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'], 
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
