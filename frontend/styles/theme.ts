import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

//serve para substituir os temas do chakra

export const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  colors: colors,
  styles: {
    global: {
      html: {
        padding: 0,
        margin: 0,
      },
      body: {
        padding: 0,
        margin: 0,
        bg: "gray.50",
        color: "gray.900",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      h1: {
        color: "gray.600",
      },
      h2: {
        color: "gray.600",
      },
      h3: {
        color: "gray.600",
      },
      h4: {
        color: "gray.600",
      },
      h5: {
        color: "gray.600",
      },
      strong: {
        color: "gray.600",
      },
    },
  },
});
