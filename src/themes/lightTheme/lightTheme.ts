import { type ThemeOptions } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    common: {
      black: "#0f1b2c",
      white: "#f2f2f2",
    },
    primary: {
      main: "#222D3C",
      light: "#4e5763",
      dark: "#171f2a",
      contrastText: "#f2f2f2",
    },
    secondary: {
      main: "#008B88",
      light: "#33a29f",
      dark: "#00615f",
      contrastText: "#f2f2f2",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
      color: "#222D3C",
    },
  },
};

// MUI Default Theme: https://mui.com/material-ui/customization/default-theme/
