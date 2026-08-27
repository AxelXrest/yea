import { HeartHandshake, ShieldCheck, Sparkles, UsersRound } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const aboutImage = new URL('../assets/Gallery/778794224_17977998066087640_8387950399133694154_n..jpg', import.meta.url).href

const points = [
  ['Safe & Supportive', 'A caring environment where children can be themselves.', ShieldCheck],
  ['Parent-Trusted', 'Clear communication and a strong home-school connection.', UsersRound],
  ['Curious Minds', 'Hands-on experiences that make learning feel exciting.', Sparkles],
  ['Kind & Caring', 'Teachers who notice, listen and encourage every child.', HeartHandshake],
] as const

export function AboutSection() {
  return <section id="about" className="section-pad bg-white"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
    <Reveal><div className="relative mx-auto max-w-[480px]"><div className="blob-photo overflow-hidden rounded-[32px]"><img src={aboutImage} alt="Children learning together" className="h-[500px] w-full object-cover" /></div><div className="absolute -bottom-5 right-0 rounded-3xl bg-[#ffcf58] px-6 py-4 shadow-xl"><b className="block text-2xl text-[#202c4b]">12+</b><span className="text-xs font-bold text-[#202c4b]/60">years of learning</span></div></div></Reveal>
    <Reveal delay={.1}><div><p className="eyebrow">About Young Explorer Academy</p><h2 className="font-display text-4xl font-black leading-tight text-[#202c4b] md:text-5xl">Nurturing young minds through play and discovery.</h2><p className="mt-5 text-sm leading-7 text-slate-500 md:text-base">We believe early learning should feel joyful. Our classrooms combine thoughtful routines, creative exploration and plenty of opportunities for children to ask questions, make friends and discover what they can do.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{points.map(([title, desc, Icon], i) => <div key={title} className="rounded-2xl border border-slate-100 bg-[#fffaf4] p-4 transition hover:-translate-y-1 hover:shadow-lg"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[#ff756f] shadow-sm"><Icon size={17}/></span><b className="text-sm text-[#202c4b]">{title}</b></div><p className="mt-2 pl-12 text-xs leading-5 text-slate-500">{desc}</p></div>)}</div><a href="#contact" className="mt-8 inline-flex items-center rounded-full bg-[#ff756f] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#ff756f]/20">Learn More</a></div></Reveal>
  </div></section>
}
