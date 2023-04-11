import { MutableRefObject, useEffect, useState } from "react";

import { useInView } from "framer-motion";

import { useTheme } from "@mui/material";

export function useHighlightMenuItem(
  sectionRef: MutableRefObject<null>,
  elemenetId: string,
) {
  // Calculate the viewport height
  const [viewportHeight, setViewportHeight] = useState<number>(200);
  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateViewportHeight);
    updateViewportHeight();

    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  // The value subtracted from the viewportHeight is the sum of the top offset and the gap between each section
  const margin = `-100px 0px -${viewportHeight - 180}px 0px`;

  const isInView = useInView(sectionRef, {
    margin: margin,
  });
  const themeMode = useTheme().palette.mode;

  useEffect(() => {
    const menuItem = document.querySelector(`#${elemenetId}`);
    isInView
      ? menuItem?.classList.add("active-menu")
      : menuItem?.classList.remove("active-menu");
  }, [isInView, themeMode, elemenetId]);
}
