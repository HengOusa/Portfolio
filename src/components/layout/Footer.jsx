import Container from '../common/Container'
import SocialLinks from '../common/SocialLinks'
import { useTranslation } from '../../hooks/useTranslation'
import { SECTION_IDS } from '../../utils/constants'
import profile from '../../data/profile.json'

const quickLinks = [
  { id: SECTION_IDS.HOME, key: 'nav.home' },
  { id: SECTION_IDS.ABOUT, key: 'nav.about' },
  { id: SECTION_IDS.PROJECTS, key: 'nav.projects' },
  { id: SECTION_IDS.CONTACT, key: 'nav.contact' },
]

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
      <Container className="py-10 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-bold text-lg text-light-text dark:text-dark-text mb-2">
              Heng <span className="text-primary">Ousa</span>
            </p>
            <p className="text-sm text-light-secondary dark:text-dark-secondary mb-4">
              {t('footer.tagline')}
            </p>
            <SocialLinks links={profile.social} />
          </div>

          <div>
            <p className="font-semibold text-light-text dark:text-dark-text mb-3 text-sm uppercase tracking-wide">
              Quick Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-light-secondary dark:text-dark-secondary hover:text-primary transition-colors"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm text-light-secondary dark:text-dark-secondary">
              © {year} Heng Ousa. {t('footer.rights')}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
