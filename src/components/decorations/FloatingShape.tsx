import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function FloatingShape({
  children,
  duration = 6,
  offsetY = 18,
  offsetX = 0,
  rotate = 5,
  className,
}: {
  children: ReactNode
  duration?: number
  offsetY?: number
  offsetX?: number
  rotate?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -offsetY, 0], x: [0, offsetX, 0], rotate: [0, rotate, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
