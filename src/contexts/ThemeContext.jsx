import { createContext, useEffect, useState, useCallback } from 'react'
import { getStoredTheme, setStoredTheme } from '../utils/storage'
import { THEMES } from '../utils/constants'

export const ThemeContext = createContext(null)

function getSystemTheme() {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEMES.DARK
  }
  return THEMES.LIGHT
}

function applyTheme(theme) {
  const root = document.documentElement
  const resolved = theme === THEMES.SYSTEM ? getSystemTheme() : theme
  root.classList.remove('light', 'dark')
  root.classList.add(resolved)
  root.setAttribute('data-theme', resolved)
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    const stored = getStoredTheme()
    return stored || THEMES.SYSTEM
  })

  const setTheme = useCallback((next) => {
    setThemeState(next)
    setStoredTheme(next)
    applyTheme(next)
  }, [])

  useEffect(() => {
    applyTheme(theme)

    if (theme === THEMES.SYSTEM) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = () => applyTheme(THEMES.SYSTEM)
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }
  }, [theme])

  // Prevent flash
  useEffect(() => {
    document.documentElement.style.colorScheme = theme === THEMES.DARK || (theme === THEMES.SYSTEM && getSystemTheme() === THEMES.DARK) ? 'dark' : 'light'
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme: theme === THEMES.SYSTEM ? getSystemTheme() : theme }}>
      {children}
    </ThemeContext.Provider>
  )
}
