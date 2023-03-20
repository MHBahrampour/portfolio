import { useContext } from "react";

import DarkIcon from "@mui/icons-material/Brightness4";
import LightIcon from "@mui/icons-material/Brightness7";
import { IconButton, useTheme } from "@mui/material";

import { ColorContext } from "../ColorContext";

export function SwitchThemeButton() {
  const theme = useTheme();
  const colorMode = useContext(ColorContext);

  const handleClick = () => {
    colorMode.toggleColorMode();
    document.querySelector("html")?.classList.toggle("dark");
  };

  return (
    <IconButton onClick={handleClick} className="text-inherit">
      {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
    </IconButton>
  );
}
