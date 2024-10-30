/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(-151deg, rgba(226, 20, 104, 1) 0%, rgba(105, 5, 46, 1) 93%)',
      },
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
      fontFamily: {
        custom: ['ThreatExp', 'sans-serif'],
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
        '.clip-about-sharp': {
          clipPath: 'polygon(0 24%, 100% 0, 100% 100%, 0 100%)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
