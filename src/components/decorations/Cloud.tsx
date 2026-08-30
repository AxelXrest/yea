import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function Cloud({ children, className, duration = 8 }: { children?: ReactNode; className?: string; duration?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ x: [0, 12, 0, -8, 0], y: [0, -10, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
