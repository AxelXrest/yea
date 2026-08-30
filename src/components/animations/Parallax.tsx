import { motion, useScroll, useTransform } from 'motion/react'
import type { ReactNode, RefObject } from 'react'
import { useRef } from 'react'

export function Parallax({ children, distance = 70, className, speed = 1 }: { children: ReactNode; distance?: number; className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement>,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, distance * speed])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
