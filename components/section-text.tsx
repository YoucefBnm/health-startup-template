"use client";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion, MotionConfig, stagger } from "motion/react";
import { ANIMATION_VARIANTS } from "./systaliko-ui/utils/animation-variants";

export function SectionText({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn("w-4/5 mx-auto text-center", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delayChildren: stagger(0.3) }}
      {...props}
    >
      <MotionConfig transition={{ duration: 0.4, ease: "easeOut" }}>
        {children as React.ReactNode}
      </MotionConfig>
    </motion.div>
  );
}

export function SectionTextTitle({
  className,
  ...props
}: HTMLMotionProps<"h3">) {
  const variants = ANIMATION_VARIANTS["blur"];
  return (
    <motion.h3
      className={cn(
        "text-xs uppercase tracking-wide text-muted-foreground",
        className
      )}
      {...props}
      variants={variants}
    />
  );
}

export function SectionTextHeading({
  className,
  ...props
}: HTMLMotionProps<"h2">) {
  const variants = ANIMATION_VARIANTS["blur"];
  return (
    <motion.h2
      className={cn("text-4xl tracking-tight font-semibold", className)}
      {...props}
      variants={variants}
    />
  );
}

export function SectionTextLead({ className, ...props }: HTMLMotionProps<"p">) {
  const variants = ANIMATION_VARIANTS["blur"];
  return (
    <motion.p
      className={cn("mt-4 text-sm text-muted max-w-[45ch] mx-auto", className)}
      {...props}
      variants={variants}
    />
  );
}
