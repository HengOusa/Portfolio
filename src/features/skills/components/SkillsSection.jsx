import { motion } from 'framer-motion'
import Container from '../../../components/common/Container'
import SectionHeading from '../../../components/common/SectionHeading'
import SkillCard from './SkillCard'
import { useTranslation } from '../../../hooks/useTranslation'
import { SECTION_IDS } from '../../../utils/constants'
import skillsData from '../../../data/skills.json'

export default function SkillsSection() {
  const { t, language } = useTranslation()

  return (
    <section id={SECTION_IDS.SKILLS} className="py-16 md:py-24 bg-light-surface/50 dark:bg-dark-surface/30">
      <Container>
        <SectionHeading title={t('skills.title')} subtitle={t('skills.subtitle')} />

        <div className="space-y-10">
          {skillsData.categories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.05 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-light-secondary dark:text-dark-secondary mb-4">
                {cat.name[language] || cat.name.en}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, i) => (
                  <SkillCard key={skill} name={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
