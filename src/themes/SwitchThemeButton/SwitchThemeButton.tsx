import { useContext } from "react";

import { RiMoonFoggyFill, RiSunFoggyFill } from "react-icons/ri";

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
    <IconButton onClick={handleClick} className="text-inherit left-2">
      {theme.palette.mode === "dark" ? <RiSunFoggyFill /> : <RiMoonFoggyFill />}
    </IconButton>
  );
}
