import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Blob } from '../components/decorations/Blob'
import { Cloud } from '../components/decorations/Cloud'
import { FloatingShape } from '../components/decorations/FloatingShape'
import { ImageReveal } from '../components/animations/ImageReveal'
import { Parallax } from '../components/animations/Parallax'
import { heroImages } from '../data/content'

export function HeroSection() {
  const [activeImage, setActiveImage] = useState(0)
  const [slideDirection, setSlideDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (paused || prefersReducedMotion) return
    const timer = window.setInterval(() => setActiveImage(current => {
      const next = (current + 1) % heroImages.length
      setSlideDirection(next > current ? 1 : -1)
      return next
    }), 4000)
    return () => window.clearInterval(timer)
  }, [paused, prefersReducedMotion])

  return (
    <section id="home" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="hero-pattern relative overflow-hidden bg-[#17324d] text-white">
      <Blob className="absolute -left-16 top-16 h-40 w-40 bg-[#ffd00a]/15 blur-2xl" duration={11} />
      <Parallax distance={28} speed={0.8} className="absolute left-8 top-20 z-0 hidden md:block">
        <Cloud className="flex h-12 w-28 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm" duration={9}>
          <div className="h-8 w-12 rounded-full bg-white/15" />
        </Cloud>
      </Parallax>
      <Parallax distance={36} speed={1.2} className="absolute right-10 top-28 z-0 hidden md:block">
        <Cloud className="flex h-12 w-28 items-center justify-center rounded-full bg-[#ff756f]/15 backdrop-blur-sm" duration={10}>
          <div className="h-8 w-12 rounded-full bg-[#ff756f]/15" />
        </Cloud>
      </Parallax>

      <AnimatePresence initial={false} mode="wait">
        <motion.div key={`background-${activeImage}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
          <img src={heroImages[activeImage]} alt="" aria-hidden="true" className="h-full w-full scale-105 object-cover opacity-70 blur-[1px]" />
          <div className="absolute inset-0 bg-[#17324d]/40" />
        </motion.div>
      </AnimatePresence>

      <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-10 px-5 pb-20 pt-32 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div className="relative z-10 max-w-xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#ffd00a]">A place to grow at every age</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="font-display text-5xl font-black leading-[.98] tracking-tight sm:text-6xl lg:text-7xl">Helping young explorers <span className="text-[#ffd00a]">grow</span> with confidence.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="mt-6 max-w-lg text-sm leading-7 text-white/75 md:text-base">Purposeful learning, meaningful friendships and after-school experiences for students aged 3–17.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.65, delay: 0.24 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-[#ff756f] px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(255,117,111,0.35)] transition hover:-translate-y-1">Visit Our School</a>
            <a href="#programs" className="flex items-center gap-2 rounded-full border border-white/20 bg-white/6 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/12"><Play size={15} fill="currentColor" /> Explore Programs</a>
          </motion.div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm"><b className="text-xl text-white">550+</b><span className="mt-1 block text-[10px] text-white/60">Happy families</span></div>
            <div className="rounded-2xl border border-white/10 bg-[#ffd00a] p-4 text-[#17324d]"><b className="text-xl">30+</b><span className="mt-1 block text-[10px] opacity-70">Learning activities</span></div>
            <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm"><b className="text-xl text-white">12+</b><span className="mt-1 block text-[10px] text-white/60">Years of care</span></div>
          </div>
        </div>

        <div className="relative flex min-h-[430px] items-end justify-center lg:min-h-[560px]">
          <motion.div initial={{ opacity: 0, scale: 0.85, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, type: 'spring' }} className="relative z-10 w-full max-w-[510px]">
            <div className="blob-image relative aspect-square overflow-hidden rounded-[32px] border-8 border-white/15 bg-[#42b866] shadow-[0_28px_70px_rgba(23,50,77,0.26)]">
              <ImageReveal src={heroImages[activeImage]} alt="Children learning and exploring together" direction="left" className="h-full w-full" imageClassName="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17324d]/80 to-transparent px-6 pb-6 pt-20">
                <span className="text-xs font-bold text-white/80">Young Explorer Academy field notes</span>
                <div className="mt-1 font-display text-xl font-black">Growing through every experience.</div>
              </div>
            </div>

            <FloatingShape className="absolute -bottom-4 -left-2 rounded-3xl bg-white p-4 text-[#17324d] shadow-[0_20px_45px_rgba(23,50,77,0.12)] sm:left-0" duration={4} offsetY={10} rotate={2}>
              <div className="text-xs font-black text-[#1f78b9]">Little explorer</div>
              <div className="mt-1 text-sm font-bold">Learning through play</div>
            </FloatingShape>

            <FloatingShape className="absolute right-0 top-16 rounded-3xl bg-[#ffd00a] px-5 py-4 text-center text-[#17324d] shadow-[0_20px_45px_rgba(255,208,10,0.32)]" duration={3.5} offsetY={8} rotate={3}>
              <div className="text-2xl font-black">30+</div>
              <div className="text-[10px] font-bold">activities</div>
            </FloatingShape>
          </motion.div>
        </div>
      </div>
      <div className="wave-bottom" />
    </section>
  )
}
