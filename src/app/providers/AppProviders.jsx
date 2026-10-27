import { ThemeProvider } from '../../contexts/ThemeContext'
import { LanguageProvider } from '../../contexts/LanguageContext'
import { HelmetProvider } from 'react-helmet-async'

export default function AppProviders({ children }) {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
