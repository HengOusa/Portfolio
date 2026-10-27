import { Helmet } from 'react-helmet-async'
import MainLayout from '../components/layout/MainLayout'
import HeroSection from '../features/home/components/HeroSection'
import AboutSection from '../features/about/components/AboutSection'
import SkillsSection from '../features/skills/components/SkillsSection'
import ProjectsSection from '../features/projects/components/ProjectsSection'
import ExperienceSection from '../features/experience/components/ExperienceSection'
import EducationSection from '../features/education/components/EducationSection'
import ContactSection from '../features/contact/components/ContactSection'
import { useTranslation } from '../hooks/useTranslation'

export default function PortfolioPage() {
  const { language } = useTranslation()

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>Heng Ousa | Portfolio</title>
        <meta
          name="description"
          content="Heng Ousa - Aspiring Mobile App Developer & IT Student at Royal University of Phnom Penh."
        />
      </Helmet>
      <MainLayout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </MainLayout>
    </>
  )
}
