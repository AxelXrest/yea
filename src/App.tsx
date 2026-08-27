import { Header } from './components/Header'
import { Footer } from './components/Footer'
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

export default function App() {
  return <div className="min-h-screen overflow-x-hidden bg-white text-slate-700">
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TrustSection />
      <CTASection />
      <LearningSection />
      <TeachersSection />
      <TestimonialsSection />
      <FAQSection />
      <EnrollmentSection />
      <BlogSection />
    </main>
    <Footer />
  </div>
}
