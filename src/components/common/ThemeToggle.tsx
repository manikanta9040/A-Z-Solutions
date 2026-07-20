import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="button button-secondary" type="button">
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}
