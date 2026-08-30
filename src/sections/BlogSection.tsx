import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../data/content'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function BlogSection() {
  return (
    <section className="section-pad bg-[#fffaf4]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Our blog" title="Latest tips for parents & early learning" text="Practical ideas from our teachers and learning team to support your child at home." action="View all articles" />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <article className="group overflow-hidden rounded-[28px] border border-[#e6edf4] bg-[#ffffff] shadow-[0_18px_32px_rgba(23,50,77,0.07)] transition hover:-translate-y-1">
                <div className="h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#1f78b9]">{post.category}</span>
                  <h3 className="mt-3 font-display text-xl font-black leading-tight text-[#17324d]">{post.title}</h3>
                  <a href="#" className="mt-5 inline-flex items-center gap-2 text-xs font-black text-[#17324d]">Read article <ArrowRight size={14} /></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
