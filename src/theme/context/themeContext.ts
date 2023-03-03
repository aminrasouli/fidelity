import { createContext } from 'react'
import storage from 'src/utils/storage'

export const ThemeContext = createContext({
  isDark: storage.isEqual('theme', 'dark'),
  setIsDark: (isDark: boolean) => {
    storage.set('theme', isDark ? 'dark' : 'light')
  },
})
