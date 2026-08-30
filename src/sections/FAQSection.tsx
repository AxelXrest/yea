import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/content'
import { Reveal } from '../components/Reveal'

export function FAQSection() {
  return (
    <section className="section-pad bg-[#ffffff]">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Need to know</p>
            <h2 className="font-display text-4xl font-black text-[#17324d] md:text-5xl">Frequently asked questions</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#475569]">A few answers to the questions families ask most often.</p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * 0.05}>
              <details className="group rounded-[22px] border border-[#e6edf4] bg-[#f8fbff] p-5 shadow-[0_12px_28px_rgba(23,50,77,0.04)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold text-[#17324d]">
                  <span>{q}</span>
                  <ChevronDown size={18} className="transition group-open:rotate-180 text-[#1f78b9]" />
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-[#475569]">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
