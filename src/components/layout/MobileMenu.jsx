import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileMenu({ open, onClose, items, activeSection, onNavigate, t }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw]
              bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-glass
              border-l border-light-border dark:border-dark-border shadow-xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between p-4 border-b border-light-border dark:border-dark-border">
              <span className="font-semibold text-light-text dark:text-dark-text">Menu</span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-light-secondary dark:text-dark-secondary hover:text-primary hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={t('common.close')}
              >
                <X size={20} />
              </button>
            </div>
            <ul className="p-4 space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                      ${activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-light-text dark:text-dark-text hover:bg-primary/5'
                      }
                    `}
                  >
                    {t(item.key)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
