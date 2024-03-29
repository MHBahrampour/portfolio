// Use this function only when you want to have distinct animation
// To use this function, add the following to the element:
// {...directionMotion(direction, index)}
export const directionMotion = (
  direction: "TB" | "BT" | "LR" | "RL",
  index: number,
  marginBottom: number = 80,
) => {
  const { startPosition, endPosition } = getPositions(direction);
  const margin = `0px 0px -${marginBottom}px 0px`;

  return {
    initial: { opacity: 0, ...startPosition },
    whileInView: {
      opacity: 1,
      ...endPosition,
      transition: {
        delay: index * 0.3,
      },
    },
    viewport: { once: true, margin: margin },
  };
};

// Use this function only when you want the animation of all children to run when the parent enters the viewport.
// To use this function, follow these steps:
// 1. Get the requierd objects:
//    const { container, items } = getVariantsMotion(direction);
// 2. The parent should have these props:
//    initial="hidden" whileInView="visible" variants={container} viewport={{ once: true, margin: "0px 0px -80px 0px" }}
// 3. Childrens only need this prop:
//    variants={items}
export const getVariantsMotion = (
  direction: "TB" | "BT" | "LR" | "RL",
  delayChildren: number = 0.3,
  staggerChildren: number = 0.3,
) => {
  const { startPosition, endPosition } = getPositions(direction);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delayChildren * 0.3,
        staggerChildren: staggerChildren,
      },
    },
  };

  const items = {
    hidden: { opacity: 0, ...startPosition },
    visible: {
      opacity: 1,
      ...endPosition,
    },
  };

  return {
    container,
    items,
  };
};

// A utility function to calculate the start and end position
const getPositions = (direction: "TB" | "BT" | "LR" | "RL") => {
  const offset = 24;

  const startPosition =
    direction === "TB"
      ? { y: -offset }
      : direction === "BT"
      ? { y: offset }
      : direction === "LR"
      ? { x: -offset }
      : { x: offset };

  const endPosition =
    direction === "TB" || direction === "BT" ? { y: 0 } : { x: 0 };

  return {
    startPosition,
    endPosition,
  };
};
