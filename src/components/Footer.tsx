import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react'
import { motion } from 'motion/react'

const logo = new URL('../assets/YEA_LOGO - (1).png', import.meta.url).href

export function Footer() {
  return (
    <footer className="bg-[#17324d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex rounded-2xl bg-white px-3 py-2 shadow-[0_20px_40px_rgba(23,50,77,0.18)]">
            <img src={logo} alt="Young Explorers Academy" className="h-12 w-[190px] object-contain" />
          </motion.div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">A bright, caring community where children feel safe, curious and excited to discover something new every day.</p>
          <div className="mt-6 flex gap-2">
            <a aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 transition hover:-translate-y-1 hover:bg-[#ffd00a] hover:text-[#17324d]" href="#"><Instagram size={17} /></a>
            <a aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 transition hover:-translate-y-1 hover:bg-[#ffd00a] hover:text-[#17324d]" href="#"><Facebook size={17} /></a>
            <a aria-label="Youtube" className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 transition hover:-translate-y-1 hover:bg-[#ffd00a] hover:text-[#17324d]" href="#"><Youtube size={17} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/65">Quick Links</h3>
          <div className="mt-5 space-y-3 text-sm text-white/55">{['About us', 'Our programs', 'Teachers', 'FAQ', 'Contact'].map(item => <a className="block transition hover:text-white" href="#" key={item}>{item}</a>)}</div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/65">Our Programs</h3>
          <div className="mt-5 space-y-3 text-sm text-white/55">{['Early Learners', 'Preschool', 'Pre-K Explorers', 'Creative Arts', 'Holiday Camp'].map(item => <a className="block transition hover:text-white" href="#programs" key={item}>{item}</a>)}</div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/65">Contact Info</h3>
          <div className="mt-5 space-y-4 text-sm text-white/55">
            <p className="flex gap-3"><Phone size={17} /> +1 555 123 4567</p>
            <p className="flex gap-3"><Mail size={17} /> hello@youngexplorer.com</p>
            <p>123 Sunshine Street<br />Your City, 10001</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">© 2026 Young Explorers Academy. All rights reserved.</div>
    </footer>
  )
}
