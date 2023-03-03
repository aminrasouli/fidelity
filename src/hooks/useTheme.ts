import { useContext } from 'react'
import { ThemeContext } from 'src/context/themeContext'

const useTheme = () => {
  const { isDark, setIsDark } = useContext(ThemeContext)
  const isLight = !isDark

  return { isDark, isLight, setIsDark }
}

export default useTheme
