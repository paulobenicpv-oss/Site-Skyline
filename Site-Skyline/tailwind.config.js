/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyline: {
          black: "#000000",
          gold: "#C8A951",
          blue: "#0A74DA",
          white: "#FFFFFF"
        }
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui"],
        body: ["ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 50px rgba(200, 169, 81, 0.25)"
      }
    },
  },
  plugins: [],
};
