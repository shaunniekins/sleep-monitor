import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  colors: {
    custom: {
      primary_color: "#22222a",
      secondary_color: "#f2f2f2",
      dark_purple: "purple",
      light_purple: "#CBC3E3",
    },
  },
});

export default customTheme;
