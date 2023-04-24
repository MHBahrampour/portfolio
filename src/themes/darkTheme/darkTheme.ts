import { type ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    common: {
      black: "#0F1B2C",
      white: "#F2F2F2",
    },
    primary: {
      main: "#B5C5D7",
      light: "#CAD5E2",
      dark: "#A2B7CD",
      contrastText: "#0F1B2C",
    },
    secondary: {
      main: "#00A19D",
      light: "#33B3B0",
      dark: "#00706D",
      contrastText: "#0F1B2C",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
      color: "#B5C5D7",
    },
  },
};

// MUI Default Theme: https://mui.com/material-ui/customization/default-theme/
