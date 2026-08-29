import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#05d9e8] origin-left z-[99999] pointer-events-none shadow-[0_0_10px_rgba(5,217,232,0.9)]"
    />
  );
};

export default ScrollProgress;
