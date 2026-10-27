import { motion } from 'framer-motion'
import Container from '../../../components/common/Container'
import SectionHeading from '../../../components/common/SectionHeading'
import { useTranslation } from '../../../hooks/useTranslation'
import { SECTION_IDS } from '../../../utils/constants'
import profile from '../../../data/profile.json'
import education from '../../../data/education.json'

export default function AboutSection() {
  const { t, language } = useTranslation()
  const edu = education.entries[0]

  return (
    <section id={SECTION_IDS.ABOUT} className="py-16 md:py-24">
      <Container>
        <SectionHeading title={t('about.title')} subtitle={t('about.subtitle')} />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className={`text-light-secondary dark:text-dark-secondary leading-relaxed ${language === 'km' ? 'font-khmer' : ''}`}>
              {profile.about[language] || profile.about.en}
            </p>

            <div>
              <h3 className="font-semibold text-light-text dark:text-dark-text mb-2">
                {t('about.goals')}
              </h3>
              <p className={`text-light-secondary dark:text-dark-secondary text-sm leading-relaxed ${language === 'km' ? 'font-khmer' : ''}`}>
                {profile.careerGoals[language] || profile.careerGoals.en}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-light-text dark:text-dark-text mb-3">
                {t('about.interests')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(profile.interests[language] || profile.interests.en).map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-medium
                      bg-primary/10 text-primary border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl p-6 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm">
              <h3 className="font-semibold text-light-text dark:text-dark-text mb-4">
                {t('about.education')}
              </h3>
              <div className="space-y-1">
                <p className="font-medium text-primary">
                  {edu.institution[language] || edu.institution.en}
                </p>
                <p className="text-sm text-light-text dark:text-dark-text">
                  {edu.degree[language] || edu.degree.en}
                </p>
                <p className="text-sm text-light-secondary dark:text-dark-secondary">
                  {edu.level[language] || edu.level.en} · {edu.period[language] || edu.period.en}
                </p>
                <p className={`text-sm text-light-secondary dark:text-dark-secondary mt-3 leading-relaxed ${language === 'km' ? 'font-khmer' : ''}`}>
                  {edu.description[language] || edu.description.en}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
