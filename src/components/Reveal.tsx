import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right";
  distance?: number;
  duration?: number;
}

interface InViewRevealProps extends RevealProps {
  once?: boolean;
  amount?: number;
  translateY?: boolean;
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const getInitialPosition = (
  from: "up" | "left" | "right",
  distance: number,
) => {
  if (from === "left") return { opacity: 0, x: -distance };
  if (from === "right") return { opacity: 0, x: distance };
  return { opacity: 0, y: distance };
};

export const FadeInOnLoad = ({
  children,
  className,
  delay = 0,
  from = "up",
  distance = 10,
  duration = 0.55,
}: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? { opacity: 1 } : getInitialPosition(from, distance)}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInInView = ({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
  from = "up",
  distance = 12,
  duration = 0.62,
  translateY = true,
}: InViewRevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : translateY
            ? getInitialPosition(from, distance)
            : { opacity: 0 }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
};
