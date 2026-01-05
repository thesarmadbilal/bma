
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="mr-2 rounded-full w-9 h-9 transition-all duration-300"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-bma-dark-gray transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
