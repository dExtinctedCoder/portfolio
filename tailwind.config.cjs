module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'black': '#1B1B1B',
      'white': '#FFFFFF',
      'green-light': '#C8FF00',
      'gold-light': '#E89300',
      'pink': '#FF0048',
      'purple': '#B611EE'
    },
    fontFamily: {
      pry: [],
      sec: [],
    },
    extend: {
      animation: {
        spinner: 'spinner 3s ease-in-out infinite',
      },
      keyframes: {
        spinner: {
          '0%, 100%': { 
            transform: 'rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.175)',
          },
          '100%': {
             transform: 'rotate(360deg)'
           },
        }
      }
    },
  },
  plugins: [],
}