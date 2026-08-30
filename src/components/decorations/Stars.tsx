import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function Stars({ children, className, duration = 7 }: { children?: ReactNode; className?: string; duration?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ opacity: [0.45, 1, 0.5], scale: [1, 1.08, 1] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
