import { type ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    common: {
      black: "#0f1b2c",
      white: "#f2f2f2",
    },
    primary: {
      main: "#f2f2f2",
      light: "#f4f4f4",
      dark: "#a9a9a9",
      contrastText: "#0f1b2c",
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
