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
    secondary: {
      main: "#00a19d",
      light: "#33b3b0",
      dark: "#00706d",
      contrastText: "f2f2f2",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
      color: "#f2f2f2",
    },
  },
};

// MUI Default Theme: https://mui.com/material-ui/customization/default-theme/
