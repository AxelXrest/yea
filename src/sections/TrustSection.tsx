import { BookOpenCheck, Heart, Lightbulb, ShieldCheck, Smile, Star } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const items = [
  ['Qualified Caring Teachers', 'Warm, experienced educators who understand early development.', Heart],
  ['Modern Environment', 'Thoughtfully designed spaces made for movement and discovery.', ShieldCheck],
  ['Safe & Secure', 'Clear routines and safeguarding practices keep children protected.', ShieldCheck],
  ['Curiosity First', 'Questions, experiments and creative play are part of every day.', Lightbulb],
  ['Happy Community', 'Families and teachers work together to support every child.', Smile],
  ['Progress You Can See', 'Regular updates help parents understand each child’s growth.', BookOpenCheck],
] as const

export function TrustSection() { return <section className="section-pad bg-white"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Why parents trust us</p><h2 className="font-display text-4xl font-black text-[#202c4b] md:text-5xl">Why parents choose Young Explorer Academy for early learning</h2><p className="mt-4 text-sm leading-7 text-slate-500">Everything is designed around one goal: helping children feel secure enough to explore and confident enough to shine.</p></div></Reveal><div className="mt-12 grid items-center gap-8 md:grid-cols-2 lg:grid-cols-3">{items.map(([title, desc, Icon], i) => <Reveal key={title} delay={i*.05}><div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_10px_35px_rgba(32,44,75,.06)] transition hover:-translate-y-1"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#fff2ee] text-[#ff756f]"><Icon size={20}/></span><h3 className="mt-4 text-sm font-black text-[#202c4b]">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{desc}</p></div></Reveal>)}</div><Reveal delay={.15}><div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3 text-xs font-bold text-[#202c4b]/70"><span className="rounded-full bg-[#ffcf58]/30 px-4 py-2"><Star size={13} className="mr-1 inline fill-current"/> Parent approved</span><span className="rounded-full bg-[#dff5e8] px-4 py-2">✓ Child-safe environment</span><span className="rounded-full bg-[#e8efff] px-4 py-2">✓ Play-based learning</span></div></Reveal></div></section> }
