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
        'primary-gradient': 'linear-gradient(-151deg, #bc8e41 0%, #014a59 93%)',
      },
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        primary: "#014a59",
        secondary: "#d5a457",
        three: "#bc8e41",
        accent: "#014a59",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      rotate: {
        '356': '356deg',
      },
      fontFamily: {
        custom: ['ThreatExp', 'sans-serif'],
        glancyr: ['Glancyr', 'sans-serif'],
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
        '.webkit-box': {
          display: '-webkit-box',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
