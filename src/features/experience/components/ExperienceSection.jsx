import { motion } from 'framer-motion'
import Container from '../../../components/common/Container'
import SectionHeading from '../../../components/common/SectionHeading'
import { useTranslation } from '../../../hooks/useTranslation'
import { SECTION_IDS } from '../../../utils/constants'
import experienceData from '../../../data/experience.json'

export default function ExperienceSection() {
  const { t, language } = useTranslation()

  return (
    <section id={SECTION_IDS.EXPERIENCE} className="py-16 md:py-24 bg-light-surface/50 dark:bg-dark-surface/30">
      <Container>
        <SectionHeading title={t('experience.title')} subtitle={t('experience.subtitle')} />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-light-border dark:bg-dark-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {experienceData.entries.map((entry, idx) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative flex items-start gap-6 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="absolute left-4 w-3 h-3 rounded-full bg-primary border-2 border-light-bg dark:border-dark-bg md:left-1/2 md:-translate-x-1.5 mt-1.5 z-10" />

                <div className={`ml-10 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                  <div className="rounded-2xl p-5 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm">
                    <p className="text-xs font-medium text-primary mb-1">
                      {entry.period[language] || entry.period.en}
                    </p>
                    <h3 className="font-semibold text-light-text dark:text-dark-text mb-0.5">
                      {entry.title[language] || entry.title.en}
                    </h3>
                    <p className="text-sm text-light-secondary dark:text-dark-secondary mb-2">
                      {entry.organization[language] || entry.organization.en}
                    </p>
                    <p className={`text-sm text-light-secondary dark:text-dark-secondary leading-relaxed ${language === 'km' ? 'font-khmer' : ''}`}>
                      {entry.description[language] || entry.description.en}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
