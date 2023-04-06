export const directionMotion = (
  index: number,
  direction: "TB" | "BT" | "LR" | "RL",
) => {
  const position = {
    start:
      direction === "TB"
        ? { y: -16 }
        : direction === "BT"
        ? { y: 16 }
        : direction === "LR"
        ? { x: -16 }
        : { x: 16 },
    end: direction === "TB" || direction === "BT" ? { y: 0 } : { x: 0 },
  };

  return {
    custom: { index },
    initial: { opacity: 0, ...position.start },
    whileInView: {
      opacity: 1,
      ...position.end,
      transition: {
        delay: index * 0.3,
        duration: 0.5,
      },
    },
    viewport: { once: false, margin: "0px 0px -48px 0px" },
  };
};

export const getVariantsMotion = (
  delayChildren: number = 0.3,
  staggerChildren: number = 0.2,
) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delayChildren * 0.3,
        staggerChildren: staggerChildren,
      },
    },
  };

  const items = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  const containerProps = {
    initial: "hidden",
    whileInView: "visible",
    variants: { container },
  };

  const itemsProps = { variants: { items } };

  return {
    container,
    containerProps,
    items,
    itemsProps,
  };
};
