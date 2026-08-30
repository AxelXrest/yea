import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { AnimatedCard } from '../components/animations/AnimatedCard'
import { SectionHeading } from '../components/SectionHeading'
import { galleryImages } from '../data/content'

const galleryMotion = [
  { initial: { opacity: 0, x: -36 }, whileInView: { opacity: 1, x: 0 } },
  { initial: { opacity: 0, y: 36, rotate: -4 }, whileInView: { opacity: 1, y: 0, rotate: 0 } },
  { initial: { opacity: 0, scale: 0.82 }, whileInView: { opacity: 1, scale: 1 } },
  { initial: { opacity: 0, x: 36, rotate: 4 }, whileInView: { opacity: 1, x: 0, rotate: 0 } },
]

export function GallerySection() {
  return (
    <section id="gallery" className="section-pad overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Life at YEA" title="A little look at big days." text="From first discoveries to muddy-kneed adventures, these are the moments that make learning feel alive." action="Come see us" />

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#e6edf2] bg-[#f8fbff] p-4"><span className="text-2xl">01</span><p className="mt-2 text-xs font-bold text-slate-500">Celebrate milestones</p></div>
          <div className="rounded-2xl border border-[#e6edf2] bg-[#fffaf4] p-4"><span className="text-2xl">02</span><p className="mt-2 text-xs font-bold text-slate-500">Explore our culture</p></div>
          <div className="rounded-2xl border border-[#e6edf2] bg-[#f4fbf5] p-4"><span className="text-2xl">03</span><p className="mt-2 text-xs font-bold text-slate-500">Learn by doing</p></div>
        </div>

        <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4 sm:gap-4">
          {galleryImages.map((item, index) => {
            const animation = galleryMotion[index % galleryMotion.length]
            return (
              <motion.figure
                key={item.image}
                initial={animation.initial}
                whileInView={animation.whileInView}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                drag
                dragConstraints={{ top: -18, bottom: 18, left: -18, right: 18 }}
                dragElastic={0.2}
                whileTap={{ scale: 0.98, cursor: 'grabbing' }}
                whileHover={{ y: -8, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
                className={`group relative h-full cursor-grab overflow-hidden rounded-[24px] bg-[#1f78b9] shadow-sm transition-shadow hover:shadow-xl ${index === 0 ? 'col-span-2 row-span-2' : index === 3 ? 'row-span-2' : ''}`}
              >
                <img src={item.image} alt={item.alt} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17324d]/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <p className="text-[10px] font-black uppercase tracking-[.15em] text-white/70">{item.label}</p>
                  {item.event && <p className="mt-1 text-xs font-bold text-[#ffd00a]">{item.event}</p>}
                </div>
              </motion.figure>
            )
          })}
        </div>

        <AnimatedCard className="mt-8 flex justify-end">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#202c4b]">
            Come see us <ArrowUpRight size={16} />
          </a>
        </AnimatedCard>
      </div>
    </section>
  )
}
