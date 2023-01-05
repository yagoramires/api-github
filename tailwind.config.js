/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      '2xl': { max: '1400px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1200px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '991px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '575px' },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      primary: '#2ECC71',
      secundary: '#ECF0F1',
      danger: '#F37272',
      light: '#ECF0F1',
      dark: '#233240',
      background: '#191919',
      text: '#FFF',
      link: '#3498DB',
      container: '#2D2D2D',
      white: '#ffffff',
      black: '#000000',
      turquese: '#1abc9c',
      turqueseDark: '#16a085',
      green: '#2ecc71',
      greenDark: '#27ae60',
      blue: '#3498db',
      blueDark: '#2980b9',
      violet: '#9b59b6',
      violetDark: '#8e44ad',
      yellow: '#f1c40f',
      yellowDark: '#f39c12',
      orange: '#e67e22',
      orangeDark: '#d35400',
      red: '#e74c3c',
      redDark: '#c0392b',
      champagne: '#ecf0f1',
      champagneDark: '#bdc3c7',
      metal: '#95a5a6',
      metalDark: '#7f8c8d',
      asphalt: '#34495e',
      asphaltDark: '#2c3e50',
      carbon: '#555459',
      carbonDark: '#3b3a3e',
    },
    fontSize: {
      small: '.8rem',
      normal: '1rem',
      large: '1.2rem',
      title: '1.3rem',
      subtitle: '1.25rem',
    },
  },
  plugins: [],
};
