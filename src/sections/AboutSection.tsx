import { HeartHandshake, ShieldCheck, Sparkles, UsersRound } from 'lucide-react'
import { ImageReveal } from '../components/animations/ImageReveal'
import { FadeUp } from '../components/animations/FadeUp'
import { StaggerContainer } from '../components/animations/StaggerContainer'
import { StaggerItem } from '../components/animations/StaggerItem'

const aboutImage = new URL('../assets/Gallery/778794224_17977998066087640_8387950399133694154_n..jpg', import.meta.url).href

const points = [
  ['Safe & Supportive', 'A caring environment where children can be themselves.', ShieldCheck],
  ['Parent-Trusted', 'Clear communication and a strong home-school connection.', UsersRound],
  ['Curious Minds', 'Hands-on experiences that make learning feel exciting.', Sparkles],
  ['Kind & Caring', 'Teachers who notice, listen and encourage every child.', HeartHandshake],
] as const

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-[#ffffff]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <FadeUp className="relative mx-auto max-w-[480px]">
          <div className="relative">
            <ImageReveal src={aboutImage} alt="Children learning together" direction="left" className="blob-photo overflow-hidden rounded-[32px]" imageClassName="h-[500px] w-full object-cover" />
            <div className="absolute -bottom-5 right-0 rounded-3xl bg-[#ffd00a] px-6 py-4 shadow-[0_20px_40px_rgba(255,208,10,0.25)]">
              <b className="block text-2xl text-[#17324d]">12+</b>
              <span className="text-xs font-bold text-[#17324d]/70">years of learning</span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="relative">
          <div>
            <p className="eyebrow">About Young Explorer Academy</p>
            <h2 className="font-display text-4xl font-black leading-tight text-[#17324d] md:text-5xl">Nurturing young minds through play and discovery.</h2>
            <p className="mt-5 text-sm leading-7 text-[#475569] md:text-base">We believe early learning should feel joyful. Our classrooms combine thoughtful routines, creative exploration and plenty of opportunities for children to ask questions, make friends and discover what they can do.</p>

            <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map(([title, desc, Icon]) => (
                <StaggerItem key={title} className="rounded-[22px] border border-[#e6edf4] bg-[#fffaf4] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(23,50,77,0.08)]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#ffffff] text-[#1f78b9] shadow-sm ring-1 ring-[#e6edf4]"><Icon size={17} /></span>
                    <b className="text-sm text-[#17324d]">{title}</b>
                  </div>
                  <p className="mt-2 pl-12 text-xs leading-5 text-[#475569]">{desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <a href="#contact" className="mt-8 inline-flex items-center rounded-full bg-[#ff756f] px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(255,117,111,0.22)] transition hover:-translate-y-0.5">Learn More</a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
