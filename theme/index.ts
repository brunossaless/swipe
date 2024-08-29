// theme.ts
import { createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    background: "#ffffff",
    text: "#333333",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 20,
  },
  textVariants: {
    defaults: {
      fontSize: 14,
      color: "text",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      color: "text",
    },
    body: {
      fontSize: 16,
      color: "text",
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type BaseTheme = typeof theme; // Exporta o tipo BaseTheme
export default theme;
