module.exports = {
  purge: {
    content: ["./dist/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sanBold: ["sanBold"],
        sanReg: ["sanReg"],
      },
      colors: {
        yellow: "#fdb913",
        green: "#009444",
        "dark-green": "#002a28",
        white: "#fffbf3",
        black: "#002a28",
      },
    },
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
