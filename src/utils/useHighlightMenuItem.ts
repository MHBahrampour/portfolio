import { MutableRefObject, useEffect } from "react";

import { useInView } from "framer-motion";

import { useTheme } from "@mui/material";

export function useHighlightMenuItem(
  sectionRef: MutableRefObject<null>,
  elemenetId: string,
) {
  const isInView = useInView(sectionRef, { margin: "-20% 0% -70% 0%" });
  const themeMode = useTheme().palette.mode;

  useEffect(() => {
    const menuItem = document.querySelector(`#${elemenetId}`);
    isInView
      ? menuItem?.classList.add("active-menu")
      : menuItem?.classList.remove("active-menu");
  }, [isInView, themeMode, elemenetId]);
}
