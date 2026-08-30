import { motion } from 'motion/react'
import type { CSSProperties, ReactNode } from 'react'

export function ImageReveal({
  src,
  alt,
  direction = 'left',
  className,
  overlayClassName,
  imageClassName,
  children,
}: {
  src: string
  alt?: string
  direction?: 'left' | 'right' | 'up' | 'down'
  className?: string
  overlayClassName?: string
  imageClassName?: string
  children?: ReactNode
}) {
  const directionMap = {
    left: { initial: { clipPath: 'inset(0 100% 0 0)' }, whileInView: { clipPath: 'inset(0 0% 0 0)' } },
    right: { initial: { clipPath: 'inset(0 0 0 100%)' }, whileInView: { clipPath: 'inset(0 0 0 0)' } },
    up: { initial: { clipPath: 'inset(100% 0 0 0)' }, whileInView: { clipPath: 'inset(0 0 0 0)' } },
    down: { initial: { clipPath: 'inset(0 0 100% 0)' }, whileInView: { clipPath: 'inset(0 0 0 0)' } },
  }

  const style: CSSProperties = { clipPath: 'inset(0 0 0 0)' }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
      style={{ overflow: 'hidden' }}
    >
      <motion.div
        variants={directionMap[direction]}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className={overlayClassName}
        style={style}
      >
        <img src={src} alt={alt ?? ''} className={imageClassName} />
        {children}
      </motion.div>
    </motion.div>
  )
}
