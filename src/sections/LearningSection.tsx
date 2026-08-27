import { Palette, Puzzle, Rocket, Sparkles } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { programs } from '../data/content'

const cards = [
  ['Creative discovery', 'Art, music and movement help children express ideas and build confidence.', Palette],
  ['Curious problem solving', 'Games and hands-on challenges turn everyday questions into adventures.', Puzzle],
  ['Play with purpose', 'Free play gives children the space to imagine, collaborate and make choices.', Sparkles],
  ['Ready for tomorrow', 'Every experience strengthens communication, independence and resilience.', Rocket],
] as const

export function LearningSection() {
  return <section className="section-pad bg-white"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8"><Reveal><div className="grid grid-cols-2 gap-3"><img className="h-56 w-full rounded-[30px] object-cover" src={programs[0].image} alt="Children outdoors"/><img className="mt-10 h-56 w-full rounded-[30px] object-cover" src={programs[1].image} alt="Children playing"/><img className="-mt-10 h-56 w-full rounded-[30px] object-cover" src={programs[2].image} alt="Child learning"/><img className="h-56 w-full rounded-[30px] object-cover" src={programs[3].image} alt="Creative activity"/></div></Reveal><Reveal delay={.1}><div><p className="eyebrow">Learning through fun</p><h2 className="font-display text-4xl font-black text-[#202c4b] md:text-5xl">Learning through fun, play and creativity.</h2><p className="mt-4 text-sm leading-7 text-slate-500">Our approach is simple: children learn best when they are interested, involved and having fun. We turn ordinary moments into meaningful learning opportunities.</p><div className="mt-7 grid gap-3">{cards.map(([title,desc,Icon])=><div key={title} className="flex gap-4 rounded-2xl bg-[#fffaf4] p-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#ff756f] shadow-sm"><Icon size={18}/></span><div><h3 className="text-sm font-black text-[#202c4b]">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p></div></div>)}</div></div></Reveal></div></section>
}
