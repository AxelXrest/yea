import { ArrowUpRight } from 'lucide-react'
import { AnimatedCard } from '../components/animations/AnimatedCard'
import { ImageReveal } from '../components/animations/ImageReveal'
import { SectionHeading } from '../components/SectionHeading'
import { programs } from '../data/content'

export function ProgramsSection() {
  return (
    <section id="programs" className="section-pad relative overflow-hidden bg-[#fffaf4]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Our programs" title="Fun & engaging classes for every stage of early learning." text="Purposeful activities, friendly teachers and lots of room for children to learn at their own pace." action="View all programs" />

        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((program, i) => (
            <AnimatedCard key={program.title} delay={i * 0.08} className="group overflow-hidden rounded-[28px] border border-[#e6edf4] bg-[#ffffff] shadow-[0_18px_32px_rgba(23,50,77,0.08)]">
              <div className="grid sm:grid-cols-[.9fr_1.1fr]">
                <div className="h-56 overflow-hidden sm:h-full">
                  <ImageReveal src={program.image} alt={program.title} direction={i % 2 === 0 ? 'left' : 'right'} className="h-full w-full" imageClassName="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#eaf5ff] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#1f78b9]">{program.age}</span>
                    <ArrowUpRight size={20} className="text-[#ff756f] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-black text-[#17324d]">{program.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#475569]">{program.description}</p>
                  <a href="#contact" className="mt-6 inline-block text-xs font-black uppercase tracking-wider text-[#1f78b9]">Learn more</a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
