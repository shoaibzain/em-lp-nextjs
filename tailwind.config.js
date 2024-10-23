/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        primary: "#e21468",
        secondary: "#000000",
        accent: "#e21468",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      rotate: {
        '356': '356deg',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px #ffffff', // Adjust as needed
          'color': 'transparent',
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke': '2px #ffffff',
          'color': 'transparent',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke': '3px #ffffff',
          'color': 'transparent',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
