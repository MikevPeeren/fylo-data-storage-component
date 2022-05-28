module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradientFrom: "hsl(6, 100 %, 80 %)",
        gradientTo: "hsl(335, 100%, 65%)",
        paleBlue: "hsl(243, 100%, 93%)",
        grayBlue: "hsl(229, 7%, 55%)",
        darkBlue: "hsl(228, 56%, 26%)",
        veryDarkBlue: "hsl(229, 57%, 11%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
