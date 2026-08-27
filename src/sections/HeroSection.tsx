import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import { heroImages } from '../data/content'

export function HeroSection() {
  const [activeImage, setActiveImage] = useState(0)
  const [paused, setPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (paused || prefersReducedMotion) return
    const timer = window.setInterval(() => setActiveImage(current => (current + 1) % heroImages.length), 4500)
    return () => window.clearInterval(timer)
  }, [paused, prefersReducedMotion])

  return <section id="home" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="hero-pattern relative overflow-hidden bg-[#202c4b] text-white">
    <AnimatePresence initial={false} mode="wait"><motion.div key={`background-${activeImage}`} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.8}} className="absolute inset-0"><img src={heroImages[activeImage]} alt="" aria-hidden="true" className="h-full w-full scale-105 object-cover opacity-65 blur-[1px]"/><div className="absolute inset-0 bg-[#202c4b]/35"/></motion.div></AnimatePresence>
    <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-10 px-5 pb-20 pt-32 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
      <div className="relative z-10 max-w-xl">
        <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#ffcf58]">A place to grow at every age</motion.p>
        <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.08}} className="font-display text-5xl font-black leading-[.98] tracking-tight sm:text-6xl lg:text-7xl">Helping young explorers <span className="text-[#ffcf58]">grow</span> with confidence.</motion.h1>
        <motion.p initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.16}} className="mt-6 max-w-lg text-sm leading-7 text-white/65 md:text-base">Purposeful learning, meaningful friendships and after-school experiences for students aged 3–17.</motion.p>
        <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.24}} className="mt-8 flex flex-wrap gap-3"><a href="#contact" className="rounded-full bg-[#ff756f] px-6 py-3 text-sm font-extrabold shadow-xl shadow-[#ff756f]/20 transition hover:-translate-y-1">Visit Our School</a><a href="#programs" className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold backdrop-blur transition hover:bg-white/10"><Play size={15} fill="currentColor"/> Explore Programs</a></motion.div>
        <div className="mt-10 grid max-w-md grid-cols-3 gap-3"><div className="rounded-2xl border border-white/10 bg-white/5 p-4"><b className="text-xl">550+</b><span className="mt-1 block text-[10px] text-white/50">Happy families</span></div><div className="rounded-2xl border border-white/10 bg-[#ffcf58] p-4 text-[#202c4b]"><b className="text-xl">30+</b><span className="mt-1 block text-[10px] opacity-60">Learning activities</span></div><div className="rounded-2xl border border-white/10 bg-white/5 p-4"><b className="text-xl">12+</b><span className="mt-1 block text-[10px] text-white/50">Years of care</span></div></div>
      </div>
      <div className="relative flex min-h-[430px] items-end justify-center lg:min-h-[560px]">
        <motion.div initial={{opacity:0,scale:.85,y:30}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.8,delay:.2,type:'spring'}} className="relative z-10 w-full max-w-[510px]">
          <div className="blob-image relative aspect-square overflow-hidden rounded-[32px] border-8 border-white/15 bg-[#42b866] shadow-2xl"><AnimatePresence mode="wait"><motion.img key={activeImage} initial={{opacity:0,x:35}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-35}} transition={{duration:.55}} className="h-full w-full object-cover" src={heroImages[activeImage]} alt="Children learning and exploring together" /></AnimatePresence><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#202c4b]/75 to-transparent px-6 pb-6 pt-20"><span className="text-xs font-bold text-white/80">Young Explorer Academy field notes</span><div className="mt-1 font-display text-xl font-black">Growing through every experience.</div></div></div>
          <motion.div animate={{y:[0,-10,0],rotate:[-2,2,-2]}} transition={{duration:4,repeat:Infinity}} className="absolute -bottom-4 -left-2 rounded-3xl bg-white p-4 text-[#202c4b] shadow-2xl sm:left-0"><div className="text-xs font-black text-[#1f78b9]">Little explorer</div><div className="mt-1 text-sm font-bold">Learning through play</div></motion.div>
          <motion.div animate={{y:[0,8,0]}} transition={{duration:3.5,repeat:Infinity}} className="absolute right-0 top-16 rounded-3xl bg-[#ffcf58] px-5 py-4 text-center text-[#202c4b] shadow-xl"><div className="text-2xl font-black">30+</div><div className="text-[10px] font-bold">activities</div></motion.div>
        </motion.div>
      </div>
    </div>
    <div className="wave-bottom" />
  </section>
}
