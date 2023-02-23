import { type ReactNode, useMemo, useState } from "react";

import {
  CssBaseline,
  type PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import { ColorContext } from "../ColorContext";
import { darkTheme } from "../darkTheme/darkTheme";
import { lightTheme } from "../lightTheme/lightTheme";

export type ThemeWrapperProps = {
  children: ReactNode;
};

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light",
        );
      },
    }),
    [],
  );

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode],
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />

        {children}
      </ThemeProvider>
    </ColorContext.Provider>
  );
}
