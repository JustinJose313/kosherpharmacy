module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        large: "10rem",
      },
      colors: {
        brand: {
          100: "#48BCD1",
          200: "#348e9e",
          300: "#C0DCEC",
          400: "#3d4da4",
        },
      },
      fontFamily: {
        sans: ['"Montserrat"', "system-ui"],
        fancy: ['"Spartan"', "system-ui"],
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
      opacity: ["disabled"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
