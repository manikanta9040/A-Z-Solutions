import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type ThemeMode = 'light' | 'dark'

interface ThemeContextValue {
  mode: ThemeMode
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('dark')

  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as ThemeMode | null
    if (stored) {
      setMode(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
    document.documentElement.dataset.theme = mode
    window.localStorage.setItem('theme', mode)
  }, [mode])

  const value = useMemo(() => ({ mode, toggleMode: () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark')) }), [mode])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
