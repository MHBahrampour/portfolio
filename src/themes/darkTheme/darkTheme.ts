import { type ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    common: {
      black: "#0f1b2c",
      white: "#f2f2f2",
    },
    primary: {
      main: "#e9eeff",
      light: "#edf1ff",
      dark: "#a3a6b2",
      contrastText: "#0f1b2c",
    },
    secondary: {
      main: "#00a19d",
      light: "#33b3b0",
      dark: "#00706d",
      contrastText: "#0f1b2c",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
      color: "#e9eeff",
    },
  },
};

// MUI Default Theme: https://mui.com/material-ui/customization/default-theme/
