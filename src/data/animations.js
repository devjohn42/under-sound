export const animations = {
  leftToRight: {
    initial: { opacity: 0, x: -250 },
    transition: { delay: 0.5, duration: 0.7 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  },
  rightToLeft: {
    initial: { opacity: 0, x: 250 },
    transition: { delay: 0.5, duration: 0.7 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  },
};
