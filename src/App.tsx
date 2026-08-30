import { MotionConfig } from 'motion/react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ProgramsSection } from './sections/ProgramsSection'
import { TrustSection } from './sections/TrustSection'
import { CTASection } from './sections/CTASection'
import { LearningSection } from './sections/LearningSection'
import { TeachersSection } from './sections/TeachersSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { FAQSection } from './sections/FAQSection'
import { EnrollmentSection } from './sections/EnrollmentSection'
import { BlogSection } from './sections/BlogSection'
import { GallerySection } from './sections/GallerySection'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <div className="min-h-screen overflow-x-hidden bg-[#f7fafc] text-[#17324d]">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ProgramsSection />
            <TrustSection />
            <CTASection />
            <LearningSection />
            <GallerySection />
            <TeachersSection />
            <TestimonialsSection />
            <FAQSection />
            <EnrollmentSection />
            <BlogSection />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </MotionConfig>
  )
}
