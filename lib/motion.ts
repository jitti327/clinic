/** Framer Motion presets — studio rhythm */
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const transition = {
  fast: { duration: 0.2, ease: easeOutExpo },
  medium: { duration: 0.4, ease: easeOutExpo },
  spring: { type: "spring" as const, stiffness: 380, damping: 28 },
  springSoft: { type: "spring" as const, stiffness: 260, damping: 32 },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOutExpo },
  },
};

/** Scroll-triggered blocks: fire a bit early so mobile users see motion, not “empty” sections. */
export const inViewViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -48px 0px",
} as const;
