"use client"

import * as React from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({ children, defaultTheme = "dark" }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    console.log("[v0] Theme changed to:", theme)
    const root = window.document.documentElement
    console.log("[v0] Current classes before:", root.className)
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    console.log("[v0] Current classes after:", root.className)
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      console.log("[v0] setTheme called with:", newTheme)
      setTheme(newTheme)
    },
  }

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
