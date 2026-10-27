import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Copy, Check, Send, Github, Linkedin } from 'lucide-react'
import Container from '../../../components/common/Container'
import SectionHeading from '../../../components/common/SectionHeading'
import Button from '../../../components/common/Button'
import { useTranslation } from '../../../hooks/useTranslation'
import { SECTION_IDS } from '../../../utils/constants'
import profile from '../../../data/profile.json'

export default function ContactSection() {
  const { t, language } = useTranslation()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  const contacts = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: profile.email,
      href: `mailto:${profile.email}`,
      action: copyEmail,
      actionLabel: copied ? t('contact.copied') : t('contact.copyEmail'),
      actionIcon: copied ? Check : Copy,
    },
    {
      icon: Send,
      label: t('contact.telegram'),
      value: 'Telegram',
      href: profile.social.telegram,
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'GitHub',
      href: profile.social.github,
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'LinkedIn',
      href: profile.social.linkedin,
    },
  ]

  return (
    <section id={SECTION_IDS.CONTACT} className="py-16 md:py-24 bg-light-surface/50 dark:bg-dark-surface/30">
      <Container>
        <SectionHeading title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className={`text-light-secondary dark:text-dark-secondary mb-10 leading-relaxed ${language === 'km' ? 'font-khmer' : ''}`}>
            {t('contact.invite')}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {contacts.map((item) => (
              <div
                key={item.label}
                className="
                  flex items-center gap-4 p-4 rounded-2xl text-left
                  bg-light-surface dark:bg-dark-surface
                  border border-light-border dark:border-dark-border
                  hover:border-primary/40 transition-colors
                "
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <item.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-light-secondary dark:text-dark-secondary">{item.label}</p>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium text-light-text dark:text-dark-text hover:text-primary truncate block"
                  >
                    {item.value}
                  </a>
                </div>
                {item.action && (
                  <button
                    onClick={item.action}
                    className="p-2 rounded-lg text-light-secondary dark:text-dark-secondary hover:text-primary hover:bg-primary/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={item.actionLabel}
                  >
                    <item.actionIcon size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              onClick={() => window.location.href = `mailto:${profile.email}`}
            >
              <Mail size={18} />
              {t('contact.email')}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
