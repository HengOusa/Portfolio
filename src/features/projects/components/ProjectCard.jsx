import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, language, t }) {
  const name = project.name[language] || project.name.en
  const desc = project.description[language] || project.description.en
  const status = project.status[language] || project.status.en

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="
        group rounded-2xl overflow-hidden
        bg-light-surface dark:bg-dark-surface
        border border-light-border dark:border-dark-border
        hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5
        transition-all duration-300
      "
    >
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
        <span className="text-4xl font-bold text-primary/20 group-hover:scale-110 transition-transform duration-500">
          {name.charAt(0)}
        </span>
        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-primary text-white">
            {t('projects.featured')}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-light-text dark:text-dark-text leading-snug">
            {name}
          </h3>
        </div>

        <p className={`text-sm text-light-secondary dark:text-dark-secondary leading-relaxed mb-4 line-clamp-3 ${language === 'km' ? 'font-khmer' : ''}`}>
          {desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium
                bg-light-bg dark:bg-dark-bg text-light-secondary dark:text-dark-secondary
                border border-light-border dark:border-dark-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-primary font-medium">{status}</span>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-light-secondary dark:text-dark-secondary hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={t('projects.viewGithub')}
              >
                <Github size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-light-secondary dark:text-dark-secondary hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={t('projects.viewDemo')}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
