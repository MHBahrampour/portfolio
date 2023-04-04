export const mainSectionsMotion = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
  },
  transition: { type: "tween", ease: "easeInOut" },
  viewport: { once: true, margin: "-200px" },
};
