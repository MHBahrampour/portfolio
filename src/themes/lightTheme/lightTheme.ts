import { type ThemeOptions } from "@mui/material";

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
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
};

// MUI Default Theme: https://mui.com/material-ui/customization/default-theme/
