import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import type { ReactNode } from 'react'

export function StaggerItem({ children, className, variants }: { children: ReactNode; className?: string; variants?: Variants }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={variants ?? { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } }} className={className}>
      {children}
    </motion.div>
  )
}
