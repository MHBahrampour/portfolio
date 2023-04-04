export const mainSectionsMotion = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
  },
  transition: { type: "tween", ease: "easeInOut" },
  viewport: { once: true, margin: "0px 0px -250px 0px" },
};

export const itemsDirectionMotion = (
  index: number,
  direction: "TB" | "BT" | "LR" | "RL",
) => {
  const position = {
    start:
      direction === "TB"
        ? { y: -20 }
        : direction === "BT"
        ? { y: 20 }
        : direction === "LR"
        ? { x: -20 }
        : { x: 20 },
    end: direction === "TB" || direction === "BT" ? { y: 0 } : { x: 0 },
  };

  return {
    custom: { index },
    initial: { opacity: 0, ...position.start },
    animate: {
      opacity: 1,
      ...position.end,
      transition: {
        delay: index * 0.3,
      },
    },
  };
};
