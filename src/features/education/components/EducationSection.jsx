import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import Container from '../../../components/common/Container'
import SectionHeading from '../../../components/common/SectionHeading'
import { useTranslation } from '../../../hooks/useTranslation'
import { SECTION_IDS } from '../../../utils/constants'
import educationData from '../../../data/education.json'

export default function EducationSection() {
  const { t, language } = useTranslation()

  return (
    <section id={SECTION_IDS.EDUCATION} className="py-16 md:py-24">
      <Container>
        <SectionHeading title={t('education.title')} subtitle={t('education.subtitle')} />

        <div className="max-w-2xl mx-auto">
          {educationData.entries.map((entry, idx) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl p-6 sm:p-8 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-light-text dark:text-dark-text">
                  {entry.institution[language] || entry.institution.en}
                </h3>
                <p className="text-primary font-medium mt-0.5">
                  {entry.degree[language] || entry.degree.en}
                </p>
                <p className="text-sm text-light-secondary dark:text-dark-secondary mt-1">
                  {entry.level[language] || entry.level.en} · {entry.period[language] || entry.period.en}
                </p>
                <p className={`text-sm text-light-secondary dark:text-dark-secondary mt-3 leading-relaxed ${language === 'km' ? 'font-khmer' : ''}`}>
                  {entry.description[language] || entry.description.en}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
