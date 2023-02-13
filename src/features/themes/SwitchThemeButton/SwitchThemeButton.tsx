import { useContext } from "react";

import DarkIcon from "@mui/icons-material/Brightness4";
import LightIcon from "@mui/icons-material/Brightness7";
import { IconButton, useTheme } from "@mui/material";

import { ColorContext } from "../ColorContext";

export const SwitchThemeButton = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorContext);

  return (
    <IconButton onClick={colorMode.toggleColorMode} className="text-inherit">
      {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
    </IconButton>
  );
};
