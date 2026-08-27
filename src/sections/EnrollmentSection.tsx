import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const enrollmentImage = new URL('../assets/Gallery/777982909_17977998930087640_2962719499811987181_n..jpg', import.meta.url).href

const fields = [
  ['Parent name', 'Your name', 'text'],
  ['Email address', 'you@example.com', 'email'],
  ["Child's age", 'Age in years', 'text'],
  ['Preferred program', 'Choose a program', 'text'],
] as const

export function EnrollmentSection() {
  return <section id="contact" className="section-pad bg-white"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8"><Reveal><div className="relative mx-auto max-w-md"><div className="overflow-hidden rounded-[32px] shadow-[0_25px_70px_rgba(31,120,185,.16)]"><img src={enrollmentImage} alt="Happy child learning" className="h-[560px] w-full object-cover"/></div><div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur"><p className="text-xs font-black text-[#202c4b]">Come visit us</p><p className="mt-1 text-xs text-slate-500">See the classrooms, meet the team and ask anything.</p></div></div></Reveal><Reveal delay={.1}><div className="rounded-[28px] border border-[#d9e5ef] bg-[#f8fbff] p-6 shadow-[0_18px_50px_rgba(23,50,77,.07)] md:p-8"><p className="eyebrow">Start today</p><h2 className="font-display text-4xl font-black text-[#202c4b] md:text-5xl">Start your child’s learning journey today.</h2><p className="mt-4 text-sm leading-7 text-slate-500">Tell us a little about your family and our admissions team will get back to you with available programs and visit times.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{['Personal school tour','Meet the teachers','Program guidance','Simple enrolment'].map(x=><div key={x} className="flex items-center gap-2 text-sm font-bold text-[#202c4b]"><CheckCircle2 size={17} className="text-[#ff756f]"/>{x}</div>)}</div><form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={e=>e.preventDefault()}>{fields.map(([label, placeholder, type])=><label key={label} className="grid gap-2 text-xs font-extrabold text-[#17324d]">{label}<input className="field" type={type} placeholder={placeholder}/></label>)}<label className="grid gap-2 text-xs font-extrabold text-[#17324d] sm:col-span-2">How can we help?<textarea className="field min-h-28" placeholder="Tell us what you are looking for..."/></label><button className="rounded-xl bg-[#ff756f] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#ff756f]/20 transition hover:-translate-y-1 sm:col-span-2">Request a Visit</button></form></div></Reveal></div></section>
}
