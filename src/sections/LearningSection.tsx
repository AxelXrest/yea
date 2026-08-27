import { ArrowRight, BookOpen, Music2, Palette, Puzzle, Rocket, Sparkles } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { heroImages } from '../data/content'

const cards = [
  ['Creative Arts & Crafts', 'Art, music and movement help children express ideas and build confidence.', Palette],
  ['Storytelling & Reading', 'Stories and shared reading grow language, imagination and curiosity.', BookOpen],
  ['Outdoor Play & Games', 'Active play turns everyday challenges into joyful discoveries.', Rocket],
  ['Brain Games & Puzzles', 'Hands-on puzzles help children think creatively and work together.', Puzzle],
  ['Music & Movement', 'Rhythm, dance and play help children feel confident in their bodies.', Music2],
] as const

export function LearningSection() {
  return <section className="section-pad bg-white"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><div className="grid items-end gap-5 md:grid-cols-[1.05fr_1fr_auto]"><div><h2 className="max-w-md font-display text-3xl font-black leading-[1.05] text-[#202c4b] md:text-5xl">Learning Through Fun,<br/>Play, and Creativity</h2></div><p className="max-w-md text-sm leading-6 text-slate-500">We create joyful experiences where children learn naturally through engaging activities that spark imagination and curiosity.</p><a href="#programs" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#ff756f] px-6 py-3 text-xs font-extrabold text-white shadow-lg shadow-[#ff756f]/20 transition hover:-translate-y-1">Explore Programs <ArrowRight size={15}/></a></div></Reveal><div className="mt-8 grid gap-4 md:grid-cols-3 md:grid-rows-[220px_152px_152px]"><Reveal className="md:col-span-2 md:row-span-2"><div className="group relative h-full overflow-hidden rounded-[20px]"><img src={heroImages[2]} alt="Children learning together outdoors" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-[#17324d]/35 to-transparent"/></div></Reveal>{cards.map(([title, desc, Icon], index) => <Reveal key={title} delay={.08 + index * .06} className={`${index === 0 ? 'md:col-start-3 md:row-start-1' : ''} ${index === 1 ? 'md:col-start-3 md:row-start-2' : ''} ${index === 2 ? 'md:col-start-1 md:row-start-3' : ''} ${index === 3 ? 'md:col-start-2 md:row-start-3' : ''} ${index === 4 ? 'md:col-start-3 md:row-start-3' : ''}`}><article className={`flex h-full flex-col rounded-[16px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${index % 2 === 0 ? 'bg-[#ffdc70]' : 'bg-[#fffaf4]'}`}><span className="mb-4 text-[#ff756f]"><Icon size={24} strokeWidth={1.5}/></span><h3 className="text-base font-black text-[#202c4b]">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{desc}</p></article></Reveal>)}</div></div></section>
}
