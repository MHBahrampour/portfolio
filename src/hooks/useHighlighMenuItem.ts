import { MutableRefObject, useEffect, useState } from "react";

import { useInView } from "framer-motion";

import { setActiveMenuItem } from "@/redux/menuItemsSlice";

import { useAppDispatch } from "./redux";

export function useHighlightMenuItem(sectionRef: MutableRefObject<null>) {
  const dispatch = useAppDispatch();

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

  // Get section id from the ref
  const section = sectionRef?.current;
  const sectionId = section ? section["id"] : "";

  // Set the active menu item
  useEffect(() => {
    isInView && dispatch(setActiveMenuItem(sectionId));
  }, [isInView]);
}
