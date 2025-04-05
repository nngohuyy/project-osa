'use client';
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type MotionCardProps = {
  children: ReactNode;
  customDelay?: number
  className?: string
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export const MotionCard = ({ children, customDelay = 0, className }: MotionCardProps) => {
  return (
    <motion.div
      custom={customDelay}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{
        scale: 1.05,
        y: 0,
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
      }}
      transition={{ type: "spring", stiffness: 500 }}
      whileTap={{ scale: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const MotionBlogCard = ({ children, customDelay = 0, className }: MotionCardProps) => {
  return (
    <motion.div
      custom={customDelay}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 500 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
