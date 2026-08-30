import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function Blob({ children, className, duration = 12 }: { children?: ReactNode; className?: string; duration?: number }) {
  return (
    <motion.div
      className={className}
      animate={{
        borderRadius: ['45% 55% 60% 40% / 50% 50% 50% 50%', '60% 40% 45% 55% / 55% 45% 55% 45%', '45% 55% 60% 40% / 50% 50% 50% 50%'],
        x: [0, 12, -10, 0],
        y: [0, -8, 10, 0],
        scale: [1, 1.04, 0.98, 1],
      }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  )
}
