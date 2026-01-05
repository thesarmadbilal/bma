
import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    // Check system preference or stored preference on initial load
    const savedTheme = localStorage.getItem('theme') as Theme || 
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('light-mode', savedTheme === 'light')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('light-mode', theme === 'light')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
