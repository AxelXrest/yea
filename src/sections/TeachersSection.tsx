import { AnimatedCard } from '../components/animations/AnimatedCard'
import { StaggerContainer } from '../components/animations/StaggerContainer'
import { StaggerItem } from '../components/animations/StaggerItem'
import { SectionHeading } from '../components/SectionHeading'
import { teachers } from '../data/content'

export function TeachersSection() {
  return (
    <section id="teachers" className="section-pad bg-[#fffaf4]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Our teachers" title="Caring & passionate teachers" text="People who make children feel seen, supported and excited to come back tomorrow." />

        <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {teachers.map((teacher, i) => (
            <StaggerItem key={teacher.name}>
              <AnimatedCard className="group rounded-[26px] border border-[#e6edf4] bg-[#ffffff] p-4 text-center shadow-[0_18px_35px_rgba(23,50,77,0.06)]" delay={i * 0.08} hoverY={-10} scale={1.02}>
                <div className="mx-auto aspect-square max-w-[190px] overflow-hidden rounded-full border-8 border-[#f3f8ff] shadow-[0_18px_30px_rgba(23,50,77,0.08)]">
                  <img src={teacher.image} alt={teacher.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <h3 className="mt-5 text-sm font-black text-[#17324d]">{teacher.name}</h3>
                <p className="mt-1 text-xs text-[#475569]">{teacher.role}</p>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

