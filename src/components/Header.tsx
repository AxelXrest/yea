import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const logo = new URL('../assets/YEA_LOGO - (1).png', import.meta.url).href

const links = [['Home', '#home'], ['About', '#about'], ['Programs', '#programs'], ['Gallery', '#gallery'], ['Teachers', '#teachers'], ['Contact', '#contact']]

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 pt-5 lg:px-8">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-[0_18px_45px_rgba(23,50,77,0.12)] backdrop-blur-xl md:px-4">
          <a href="#home" onClick={() => setActive('#home')} className="flex items-center rounded-full bg-white/90 p-2 shadow-[0_12px_30px_rgba(23,50,77,0.15)] ring-1 ring-[#e6edf4] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(23,50,77,0.18)]">
            <img src={logo} alt="Young Explorers Academy" className="h-10 w-[170px] object-contain md:h-12 md:w-[190px]" />
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {links.map(([label, href]) => {
              const isActive = active === href
              return (
                <a
                  key={label}
                  href={href}
                  onClick={() => setActive(href)}
                  className={`group relative rounded-full px-4 py-2 text-sm font-bold transition duration-300 ease-out ${isActive ? 'bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]' : 'text-white/80 hover:-translate-y-0.5 hover:bg-white/8 hover:text-white active:scale-[0.98]'} `}
                >
                  <span className="relative z-10">{label}</span>
                </a>
              )
            })}
            <a href="#contact" onClick={() => setActive('#contact')} className="ml-1 rounded-full bg-[#ff756f] px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_10px_28px_rgba(255,117,111,0.28)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_16px_32px_rgba(255,117,111,0.32)]">Enrol Now</a>
          </nav>

          <button aria-label="Toggle navigation" onClick={() => setOpen(v => !v)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/15 md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-4 mt-3 rounded-[22px] border border-white/10 bg-[#17324d]/95 p-4 shadow-[0_20px_45px_rgba(23,50,77,0.22)] backdrop-blur-xl md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => {
                setActive(href)
                setOpen(false)
              }}
              className={`block rounded-2xl px-4 py-3 text-sm font-bold transition duration-300 ${active === href ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}
            >
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => { setActive('#contact'); setOpen(false) }} className="mt-2 block rounded-2xl bg-[#ff756f] px-4 py-3 text-center text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(255,117,111,0.28)] transition duration-300 hover:-translate-y-0.5">Enrol Now</a>
        </div>
      )}
    </header>
  )
}
