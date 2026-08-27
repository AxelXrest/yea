import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const logo = new URL('../assets/YEA_LOGO - (1).png', import.meta.url).href

const links = [['Home', '#home'], ['About', '#about'], ['Programs', '#programs'], ['Teachers', '#teachers'], ['Contact', '#contact']]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <a href="#home" className="flex items-center rounded-xl bg-white px-2 py-1 shadow-sm">
          <img src={logo} alt="Young Explorers Academy" className="h-12 w-[190px] object-contain" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm font-bold text-white/90 transition hover:text-white">{label}</a>)}
          <a href="#contact" className="rounded-full bg-[#ff756f] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#ff756f]/20 transition hover:-translate-y-0.5">Enrol Now</a>
        </nav>
        <button aria-label="Toggle navigation" onClick={() => setOpen(v => !v)} className="rounded-xl border border-white/15 p-2 text-white md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <div className="mx-4 rounded-2xl bg-[#202c4b] p-4 shadow-xl md:hidden">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-white/80 hover:bg-white/5 hover:text-white">{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-[#ff756f] px-4 py-3 text-center text-sm font-extrabold text-white">Enrol Now</a>
      </div>}
    </header>
  )
}
