module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  screens: {
    xs: { max: "575px" }, // Mobile (iPhone 3 - iPhone XS Max).
    sm: { min: "576px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
    md: { min: "898px", max: "1199px" }, // Tablet (matches max: iPad Pro @ 1112px).
    lg: { min: "1200px" }, // Desktop smallest.
    xl: { min: "1159px" }, // Desktop wide.
    xxl: { min: "1359px" }, // Desktop widescreen.
  },
  plugins: [require("@tailwindcss/line-clamp", "@tailwindcss/aspect-ratio")],
};
