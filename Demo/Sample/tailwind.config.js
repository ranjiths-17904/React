export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    animation: {
      slide: "slide 10s linear infinite", 
    },
    keyframes: {
      slide: {
        "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
      },
    },
  },
};
export const plugins = [];
