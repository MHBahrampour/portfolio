import { useContext } from "react";

import { motion } from "framer-motion";
import { RiMoonFoggyFill, RiSunFoggyFill } from "react-icons/ri";

import { IconButton, useTheme } from "@mui/material";

import { directionMotion } from "@/utils/motions";

import { ColorContext } from "../ColorContext";

export function SwitchThemeButton() {
  const theme = useTheme();
  const colorMode = useContext(ColorContext);

  const handleClick = () => {
    colorMode.toggleColorMode();
    document.querySelector("html")?.classList.toggle("dark");
  };

  return (
    <IconButton
      edge="end"
      onClick={handleClick}
      className="text-inherit"
      component={motion.button}
      {...directionMotion(6, "RL")}
    >
      {theme.palette.mode === "dark" ? <RiSunFoggyFill /> : <RiMoonFoggyFill />}
    </IconButton>
  );
}
