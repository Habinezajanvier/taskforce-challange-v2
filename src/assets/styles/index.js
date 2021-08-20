import { createTheme } from "@material-ui/core/styles";

const appTheme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#2FC8B8",
    },
    tertiary: {
      main: "#2FC8B8",
    },
    error: {
      main: "#FF4141",
    },
    text: {
      primary: "#000",
      secondary: "#2FC8B8",
      tertiary: "#FFF"
    },
    background: {
      default: "#FFFFFF",
      primary: "#2FC8B8",
      secondary: "#1E776E"
    },
  },
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

export default appTheme;