import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import type { ReactNode } from 'react'

export function StaggerContainer({
  children,
  className,
  variants,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants ?? { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
