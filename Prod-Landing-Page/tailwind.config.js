/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
// const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: {
          DEFAULT: "#fd7149", // Default button color
          active: "#fd5e32",  // Active state color
          hover: "#fc3a0a",   // Hover state color
          disabled: "#e3e8ef" // Disabled state color
        },
        primary: "#ee6047",    // Primary color
        secondary: "#1e2737",  // Secondary color
        heading: "#030a17",    // Heading text color
        content: "#586170",
        primary2: "#03142D",    // Primary color
        secondary2: "#5877A2", 
           
      },
      

      fontFamily: {
        sofia: ['Sofia Pro', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ee6047, #030a17)',
      },
    },
  },

};
