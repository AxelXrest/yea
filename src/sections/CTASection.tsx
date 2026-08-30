import { ArrowRight } from 'lucide-react'
import { Blob } from '../components/decorations/Blob'
import { FloatingShape } from '../components/decorations/FloatingShape'
import { FadeUp } from '../components/animations/FadeUp'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#17324d] py-20 text-white">
      <Blob className="absolute -left-8 top-8 h-48 w-48 bg-[#ffd00a]/15 blur-2xl" duration={13} />
      <Blob className="absolute -right-12 bottom-10 h-56 w-56 bg-[#ff756f]/15 blur-2xl" duration={15} />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,#ffd00a_0,transparent_25%),radial-gradient(circle_at_80%_60%,#ff756f_0,transparent_25%)]" />

      <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
        <FadeUp className="relative">
          <p className="text-xs font-black uppercase tracking-[.25em] text-[#ffd00a]">Give your child the best start in life</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-6xl">A happy childhood is where great learning begins.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base">Come see our classrooms, meet our teachers and discover how your child can learn, play and grow with us.</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff756f] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(255,117,111,0.28)]">Book a Visit <ArrowRight size={17} /></a>
        </FadeUp>
      </div>

      <FloatingShape className="absolute left-10 top-6 hidden rounded-full border border-white/20 bg-white/5 p-3 text-[#ffd00a] md:block" duration={6} offsetY={12} rotate={4}>
        ✦
      </FloatingShape>
      <FloatingShape className="absolute bottom-6 right-12 hidden rounded-full border border-white/20 bg-white/5 p-3 text-[#ffd00a] md:block" duration={7} offsetY={10} rotate={-4}>
        ✦
      </FloatingShape>
    </section>
  )
}
