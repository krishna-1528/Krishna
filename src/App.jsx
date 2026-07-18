import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function TypewriterHeading() {
  const textIndex = useMotionValue(0);
  const baseText = "hi, krishna here.";
  
  // This creates the typing effect
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[var(--lightest-slate)] mb-8">
      <motion.span>{displayText}</motion.span>
      {/* Blinking Cursor */}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
        className="inline-block w-[6px] h-[0.9em] bg-white ml-2 align-baseline"
      />
    </h1>
  );
}