/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
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
           
      },
      fontFamily: {
        sofia: ['Sofia Pro', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ee6047, #030a17)',
      },
    },
  },

  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        // '@font-face': [
        //   {
        //     fontFamily: 'Sofia Pro',
        //     fontStyle: 'normal',
        //     fontDisplay: 'swap',
        //     fontWeight: '400',
        //     src: "url(/src/assets/fonts/SofiaPro-400.otf') ",
        //   },
        //   {
        //     fontFamily: 'Sofia Pro',
        //     fontStyle: 'normal',
        //     fontDisplay: 'swap',
        //     fontWeight: '500',
        //     src: "url(/src/assets/fonts/SofiaPro-500.otf') ",
        //   },
        //   {
        //     fontFamily: 'Sofia Pro',
        //     fontStyle: 'normal',
        //     fontDisplay: 'swap',
        //     fontWeight: '600',
        //     src: "url(/src/assets/fonts/SofiaPro-600.otf') ",
        //   },
        //   {
        //     fontFamily: 'Sofia Pro',
        //     fontStyle: 'normal',
        //     fontDisplay: 'swap',
        //     fontWeight: '700',
        //     src: "url(/src/assets/fonts/SofiaPro-700.otf') ",
        //   },
        // ],
        '@font-face' : [
          {fontFamily: 'Sofia Pro',
          src:
              "url('https://design-system-qa.go-yubi.in/fonts/SofiaPro-400.woff2') format('woff2')",
          fontWeight: '400',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          },
        ]
     

        
      });
    }),
  ],
};
