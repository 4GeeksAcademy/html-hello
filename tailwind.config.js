/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./index.html",
    "./home.html",
    "./catalogo.html",
    "./producto.html",
    "./carrito.html",
    "./checkout.html",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores principal de VELUNE
        velune: {
          noir: '#171315',   // Noir Velours: Principal estructura
          rouge: '#8F243C',  // Rouge Désir: Acento sensualidad
          ivoire: '#F1E9E2', // Ivoire Peau: Fondo calidez
          gris: '#D7C8BC',   // Gris Soie: Neutro transición[cite: 1]
          blanc: '#FFFFFF',  // Blanc Lumière: Contraste claridad[cite: 1]
        }
      },
      fontFamily: {
        // Tipografía editorial y funcional[cite: 1]
        sans: ['Inter', 'sans-serif'], // Sistema funcional (navegación, producto, UI)[cite: 1]
        serif: ['Cormorant', 'Didot', 'serif'], // Mood editorial expresivo[cite: 1]
      },
      spacing: {
        // Espaciados amplios para mantener el "espacio negativo" y el encuadre íntimo[cite: 1]
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
}