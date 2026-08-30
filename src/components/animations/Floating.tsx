import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function Floating({
  children,
  duration = 6,
  offsetY = 14,
  rotation = 3,
  className,
}: {
  children: ReactNode
  duration?: number
  offsetY?: number
  rotation?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -offsetY, 0], rotate: [0, rotation, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
