import { createTheme } from "@nextui-org/react";

export const DarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      selection: "$blue200",
      link: "$cyan500",
      codeBackGround: "$gray50",
    },
    fonts: {
      sans: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
    },
    fontSizes: {
      "4xl": "25px",
    },
    breakpoints: {},
  },
});
