import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function Rotate({ children, duration = 18, className }: { children: ReactNode; duration?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: [0, 3, 0, -3, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
