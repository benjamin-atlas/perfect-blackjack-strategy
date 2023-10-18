/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-sans": ["IBM Plex Sans", "sans"]
      },
    },
  },
  plugins: [],
};
