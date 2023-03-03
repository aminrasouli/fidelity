import { useContext, useLayoutEffect } from 'react'
import storage from '../utils/storage'
import { ThemeContext } from '../context/themeContext'

const useTheme = () => {
  const { isDark, setIsDark } = useContext(ThemeContext)

  useLayoutEffect(() => {
    const existingPreference = storage.get('theme')
    existingPreference && setIsDark(storage.isEqual('theme', 'dark'))
  }, [setIsDark])

  const handleThemeChange = () => {
    const newTheme = isDark ? 'light' : 'dark'
    storage.set('theme', newTheme)
    setIsDark(!isDark)
  }

  const isLight = !isDark

  return { isDark, isLight, handleThemeChange }
}

export default useTheme
