import { useState } from 'react'
import { Settings, X, Sun, Moon, Monitor } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { useTranslation } from '../../hooks/useTranslation'
import { THEMES, LANGUAGES } from '../../utils/constants'

export default function FloatingSettings() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { t, language, setLanguage } = useTranslation()

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              w-64 rounded-2xl p-4
              bg-light-surface/80 dark:bg-dark-elevated/80
              backdrop-blur-glass border border-light-border/60 dark:border-dark-border/60
              shadow-glass dark:shadow-glass-dark
            "
            role="dialog"
            aria-label={t('settings.title')}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-sm text-light-text dark:text-dark-text">
                {t('settings.title')}
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg text-light-secondary dark:text-dark-secondary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={t('common.close')}
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-light-secondary dark:text-dark-secondary mb-2">
                  {t('settings.language')}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage(LANGUAGES.EN)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                      ${language === LANGUAGES.EN
                        ? 'bg-primary text-white'
                        : 'bg-light-bg dark:bg-dark-bg text-light-secondary dark:text-dark-secondary border border-light-border dark:border-dark-border hover:border-primary'
                      }`}
                  >
                    {t('settings.english')}
                  </button>
                  <button
                    onClick={() => setLanguage(LANGUAGES.KM)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                      ${language === LANGUAGES.KM
                        ? 'bg-primary text-white'
                        : 'bg-light-bg dark:bg-dark-bg text-light-secondary dark:text-dark-secondary border border-light-border dark:border-dark-border hover:border-primary'
                      }`}
                  >
                    {t('settings.khmer')}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-light-secondary dark:text-dark-secondary mb-2">
                  {t('settings.theme')}
                </p>
                <div className="flex gap-2">
                  {[
                    { value: THEMES.LIGHT, icon: Sun, label: t('settings.light') },
                    { value: THEMES.DARK, icon: Moon, label: t('settings.dark') },
                    { value: THEMES.SYSTEM, icon: Monitor, label: t('settings.system') },
                  ].map(({ value, icon: Icon, label }) => (
                    <button
                      key={value}
                      onClick={() => setTheme(value)}
                      className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                        ${theme === value
                          ? 'bg-primary text-white'
                          : 'bg-light-bg dark:bg-dark-bg text-light-secondary dark:text-dark-secondary border border-light-border dark:border-dark-border hover:border-primary'
                        }`}
                      aria-label={label}
                    >
                      <Icon size={14} />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        className="
          w-12 h-12 rounded-full flex items-center justify-center
          bg-primary text-white shadow-lg shadow-primary/30
          hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          dark:focus-visible:ring-offset-dark-bg
        "
        aria-label={t('settings.title')}
        aria-expanded={open}
      >
        <Settings size={20} />
      </motion.button>
    </div>
  )
}
