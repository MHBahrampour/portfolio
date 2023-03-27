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
      main: "#0f1b2c",
      light: "#3f4856",
      dark: "#0a121e",
      contrastText: "#f2f2f2",
    },
    secondary: {
      main: "#008B88",
      light: "#33a29f",
      dark: "#00615f",
      contrastText: "f2f2f2",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
      color: "#0f1b2c",
    },
  },
};

// MUI Default Theme: https://mui.com/material-ui/customization/default-theme/
