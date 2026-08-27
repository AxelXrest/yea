import { ArrowRight } from 'lucide-react'

export function SectionHeading({ eyebrow, title, text, action }: { eyebrow: string; title: string; text?: string; action?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff6f6a]">{eyebrow}</p>
        <h2 className="font-display text-3xl font-black leading-tight text-[#202c4b] md:text-5xl">{title}</h2>
        {text && <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 md:text-base">{text}</p>}
      </div>
      {action && <a href="#contact" className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#202c4b]">{action}<ArrowRight size={16} className="transition group-hover:translate-x-1" /></a>}
    </div>
  )
}
