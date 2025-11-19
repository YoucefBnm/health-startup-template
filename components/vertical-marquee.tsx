"use client";
import {
  motion,
  HTMLMotionProps,
  ValueKeyframesDefinition,
} from "motion/react";

interface VerticalMarqueeProps extends HTMLMotionProps<"div"> {
  from?: ValueKeyframesDefinition;
  to?: ValueKeyframesDefinition;
}

export function VerticalMarquee({
  from = "0%",
  to = "-100%",
  transition,
  ...props
}: VerticalMarqueeProps) {
  return (
    <motion.div
      initial={{ y: from }}
      animate={{ y: to }}
      transition={{
        duration: transition?.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        ...transition,
      }}
      {...props}
    />
  );
}
