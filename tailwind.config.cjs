/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "soft-red": "hsl(10, 79%, 65%)",
      cyan: "hsl(186, 34%, 60%)",
      "dark-brown": "hsl(25, 47%, 15%)",
      "medium-brown": "hsl(28, 10%, 53%)",
      cream: "hsl(27, 66%, 92%)",
      "very-pale-orange": "hsl(33, 100%, 98%)",
    },
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
    },
    fontSize: {
      DEFAULT: "18px",
    },
    extend: {},
  },
  plugins: [],
};
