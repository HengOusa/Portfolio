import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import Container from '../../../components/common/Container'
import Button from '../../../components/common/Button'
import SocialLinks from '../../../components/common/SocialLinks'
import { useTranslation } from '../../../hooks/useTranslation'
import { SECTION_IDS } from '../../../utils/constants'
import profile from '../../../data/profile.json'

export default function HeroSection() {
  const { t, language } = useTranslation()

  const scrollToProjects = () => {
    const el = document.getElementById(SECTION_IDS.PROJECTS)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCV = () => {
    const link = document.createElement('a')
    link.href = profile.cvPath
    link.download = 'Heng_Ousa_CV.pdf'
    link.click()
  }

  return (
    <section
      id={SECTION_IDS.HOME}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 -left-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium
              bg-primary/10 text-primary border border-primary/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {profile.availability[language] || profile.availability.en}
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text leading-tight mb-3 ${language === 'km' ? 'font-khmer' : ''}`}>
              {profile.greeting[language] || profile.greeting.en}
            </h1>

            <p className="text-xl sm:text-2xl text-primary font-semibold mb-4">
              {profile.title[language] || profile.title.en}
            </p>

            <p className={`text-light-secondary dark:text-dark-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-xl ${language === 'km' ? 'font-khmer' : ''}`}>
              {profile.bio[language] || profile.bio.en}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button onClick={scrollToProjects} size="lg">
                {t('hero.viewProjects')}
                <ArrowDown size={18} />
              </Button>
              <Button variant="secondary" size="lg" onClick={handleCV}>
                <Download size={18} />
                {t('hero.downloadCV')}
              </Button>
            </div>

            <SocialLinks links={profile.social} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl
                bg-gradient-to-br from-primary/20 to-primary/5
                border border-light-border dark:border-dark-border
                flex items-center justify-center overflow-hidden
                shadow-xl">
                <div className="w-full h-full flex items-center justify-center bg-light-surface dark:bg-dark-elevated">
                  <span className="text-6xl sm:text-7xl font-bold text-primary/40">HO</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-primary/5 border border-primary/10 -z-10" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
