"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
}: FadeInProps) {
  const variants = {
    up: { y: 40 },
    left: { x: -40 },
    right: { x: 40 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...variants[direction],
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
