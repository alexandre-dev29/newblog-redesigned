import { createTheme } from "@nextui-org/react";

export const LightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      selection: "$blue200",
      link: "$blue800",
      codeBackGround: "$gray900",
    },
    fonts: {
      sans: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
    },
    fontSizes: {
      "4xl": "25px",
    },
  },
});
