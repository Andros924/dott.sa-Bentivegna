/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005f73', // Un blu professionale
          light: '#0a9396',   // Verde acqua chiaro per accenti
          dark: '#003545',    // Blu scuro per enfasi
        },
        secondary: {
          DEFAULT: '#94d2bd', // Verde chiaro per rilassare
          light: '#e9ecef',   // Bianco-grigio per lo sfondo
          dark: '#343a40',    // Grigio scuro per testi importanti
        },
        accent: {
          DEFAULT: '#ee9b00', // Un colore di accento arancione dorato
        },
        neutral: {
          DEFAULT: '#f5f5f5', // Grigio chiaro per sfondi
          dark: '#d1d5db',    // Grigio per contorni e bordi
        },
      },
    },
  },
  plugins: [],
}
