import { Github, Linkedin, Send } from 'lucide-react'

const icons = {
  github: Github,
  linkedin: Linkedin,
  telegram: Send,
}

export default function SocialLinks({ links, className = '', size = 20 }) {
  if (!links) return null

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Object.entries(links).map(([key, url]) => {
        if (!url) return null
        const Icon = icons[key]
        if (!Icon) return null
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={key}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl
              bg-light-surface/80 dark:bg-dark-elevated/80 border border-light-border dark:border-dark-border
              text-light-secondary dark:text-dark-secondary
              hover:text-primary hover:border-primary hover:bg-primary/10
              transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Icon size={size} />
          </a>
        )
      })}
    </div>
  )
}
