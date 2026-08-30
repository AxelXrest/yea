import { BookOpenCheck, Heart, Lightbulb, ShieldCheck, Smile, Star } from 'lucide-react'
import { AnimatedCard } from '../components/animations/AnimatedCard'
import { StaggerContainer } from '../components/animations/StaggerContainer'
import { StaggerItem } from '../components/animations/StaggerItem'

const items = [
  ['Qualified Caring Teachers', 'Warm, experienced educators who understand early development.', Heart],
  ['Modern Environment', 'Thoughtfully designed spaces made for movement and discovery.', ShieldCheck],
  ['Safe & Secure', 'Clear routines and safeguarding practices keep children protected.', ShieldCheck],
  ['Curiosity First', 'Questions, experiments and creative play are part of every day.', Lightbulb],
  ['Happy Community', 'Families and teachers work together to support every child.', Smile],
  ['Progress You Can See', 'Regular updates help parents understand each child’s growth.', BookOpenCheck],
] as const

export function TrustSection() {
  return (
    <section className="section-pad bg-[#ffffff]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why parents trust us</p>
          <h2 className="font-display text-4xl font-black text-[#17324d] md:text-5xl">Why parents choose Young Explorer Academy for early learning</h2>
          <p className="mt-4 text-sm leading-7 text-[#475569]">Everything is designed around one goal: helping children feel secure enough to explore and confident enough to shine.</p>
        </div>

        <StaggerContainer className="mt-12 grid items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, desc, Icon], i) => (
            <StaggerItem key={title}>
              <AnimatedCard delay={i * 0.05} className="rounded-[26px] border border-[#e6edf4] bg-[#ffffff] p-6 shadow-[0_18px_35px_rgba(23,50,77,0.06)] transition hover:-translate-y-1">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#fff2ef] text-[#ff756f] ring-1 ring-[#ffd7d2]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-sm font-black text-[#17324d]">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#475569]">{desc}</p>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3 text-xs font-bold text-[#17324d]/80">
          <span className="rounded-full bg-[#ffd00a]/25 px-4 py-2"><Star size={13} className="mr-1 inline fill-current" /> Parent approved</span>
          <span className="rounded-full bg-[#dff5e8] px-4 py-2">✓ Child-safe environment</span>
          <span className="rounded-full bg-[#eaf5ff] px-4 py-2">✓ Play-based learning</span>
        </div>
      </div>
    </section>
  )
}

