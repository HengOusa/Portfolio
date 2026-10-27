import { createContext, useEffect, useState, useCallback } from 'react'
import { getStoredLanguage, setStoredLanguage } from '../utils/storage'
import { LANGUAGES } from '../utils/constants'
import en from '../locales/en.json'
import km from '../locales/km.json'

const translations = { en, km }

export const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const stored = getStoredLanguage()
    return stored === LANGUAGES.KM ? LANGUAGES.KM : LANGUAGES.EN
  })

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang)
    setStoredLanguage(lang)
    document.documentElement.lang = lang
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const t = useCallback(
    (key) => {
      const keys = key.split('.')
      let value = translations[language]
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          // fallback to English
          value = translations.en
          for (const fk of keys) {
            if (value && typeof value === 'object' && fk in value) {
              value = value[fk]
            } else {
              return key
            }
          }
          return value
        }
      }
      return typeof value === 'string' ? value : key
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
