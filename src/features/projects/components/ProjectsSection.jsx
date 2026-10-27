import { useState, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import Container from '../../../components/common/Container'
import SectionHeading from '../../../components/common/SectionHeading'
import ProjectCard from './ProjectCard'
import ProjectFilters from './ProjectFilters'
import { useTranslation } from '../../../hooks/useTranslation'
import { SECTION_IDS } from '../../../utils/constants'
import projectsData from '../../../data/projects.json'

export default function ProjectsSection() {
  const { t, language } = useTranslation()
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return projectsData.projects
    return projectsData.projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section id={SECTION_IDS.PROJECTS} className="py-16 md:py-24">
      <Container>
        <SectionHeading title={t('projects.title')} subtitle={t('projects.subtitle')} />

        <ProjectFilters
          categories={projectsData.categories}
          active={filter}
          onChange={setFilter}
          language={language}
        />

        {filtered.length === 0 ? (
          <p className="text-center text-light-secondary dark:text-dark-secondary py-12">
            {t('projects.noProjects')}
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  language={language}
                  t={t}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </Container>
    </section>
  )
}
