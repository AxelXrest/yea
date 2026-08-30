import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function AnimatedCard({
  children,
  className,
  hoverY = -8,
  scale = 1.03,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  hoverY?: number
  scale?: number
  delay?: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: hoverY, scale }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.article>
  )
}
