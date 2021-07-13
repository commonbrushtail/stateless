module.exports = {
  purge: {
    content: ["./dist/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: [".75rem"],
      sm: [".875rem"],
      tiny: [".875rem"],
      base: ["1rem"],
      lg: ["1.125rem"],
      xl: ["1.25rem"],
      "2xl": ["1.5rem"],
      "3xl": ["1.875rem"],
      "4xl": ["2.25rem"],
      "5xl": ["3rem"],
      "6xl": ["4rem"],
      "7xl": ["5rem"],
    },
    extend: {
      height: {
        "1p": "1px",
        "2p": "2px",
        "3p": "3px",
        "1/12": " 8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": " 33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      width: {
        "1p": "1px",
        "2p": "2px",
        "3p": "3px",
      },
      maxHeight: {
        700: "700px",
      },
      fontSize: {
        xxs: ["10px"],
      },
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        sanBold: ["sanBold"],
        sanReg: ["sanReg"],
        heaven: ["heaven"],
      },
      colors: {
        lightYellow: "#FEF5E1",
        yellow: "#fdb913",
        green: "#009444",
        "dark-green": "#002a28",
        white: "#fffbf3",
        black: "#002a28",
      },
      backgroundImage: (theme) => ({
        "quater-circle": "url('../dist/assets/quater-circle.png')",
        "half-circle": "url('../dist/assets/half-circle.png')",
        circle: "url('../dist/assets/circle.png')",
      }),
    },
    screens: {
      xs: "375px",
      sm: "500px",
      md: "768px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
      ipad: { raw: "only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
