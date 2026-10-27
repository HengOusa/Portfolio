import { useLanguage } from './useLanguage'

export function useTranslation() {
  const { t, language, setLanguage } = useLanguage()
  return { t, language, setLanguage }
}
