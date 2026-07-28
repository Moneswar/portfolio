import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgressBar
 * A thin gradient bar under the navbar that fills as the user scrolls.
 * useSpring smooths the raw scroll value so it feels fluid, not jumpy.
 */
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-(--color-cyan) via-(--color-highlight) to-(--color-purple)"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;
