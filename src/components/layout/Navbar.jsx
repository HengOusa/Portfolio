import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../common/Container'
import { useTranslation } from '../../hooks/useTranslation'
import { useTheme } from '../../hooks/useTheme'
import { SECTION_IDS, THEMES } from '../../utils/constants'
import MobileMenu from './MobileMenu'

const navItems = [
  { id: SECTION_IDS.HOME, key: 'nav.home' },
  { id: SECTION_IDS.ABOUT, key: 'nav.about' },
  { id: SECTION_IDS.SKILLS, key: 'nav.skills' },
  { id: SECTION_IDS.PROJECTS, key: 'nav.projects' },
  { id: SECTION_IDS.EXPERIENCE, key: 'nav.experience' },
  { id: SECTION_IDS.CONTACT, key: 'nav.contact' },
]

export default function Navbar() {
  const { t, language, setLanguage } = useTranslation()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(SECTION_IDS.HOME)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileOpen(false)
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
  }

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'km' : 'en')
  }

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-glass shadow-sm border-b border-light-border/50 dark:border-dark-border/50'
            : 'bg-transparent'
          }
        `}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-18" aria-label="Main navigation">
            <button
              onClick={() => scrollTo(SECTION_IDS.HOME)}
              className="font-bold text-lg text-light-text dark:text-dark-text hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-1"
            >
              Heng <span className="text-primary">Ousa</span>
            </button>

            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`
                      px-3 py-2 rounded-lg text-sm font-medium transition-colors
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                      ${activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-light-secondary dark:text-dark-secondary hover:text-primary hover:bg-primary/5'
                      }
                    `}
                  >
                    {t(item.key)}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1">
              <button
                onClick={toggleLang}
                className="hidden sm:inline-flex items-center px-2.5 py-1.5 rounded-lg text-xs font-semibold
                  border border-light-border dark:border-dark-border
                  text-light-secondary dark:text-dark-secondary
                  hover:border-primary hover:text-primary transition-colors
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Switch language"
              >
                {language === 'en' ? 'ខ្មែរ' : 'EN'}
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-light-secondary dark:text-dark-secondary hover:text-primary hover:bg-primary/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={resolvedTheme === THEMES.DARK ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {resolvedTheme === THEMES.DARK ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-lg text-light-secondary dark:text-dark-secondary hover:text-primary hover:bg-primary/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={t('common.menu')}
              >
                <Menu size={22} />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={navItems}
        activeSection={activeSection}
        onNavigate={scrollTo}
        t={t}
      />
    </>
  )
}
