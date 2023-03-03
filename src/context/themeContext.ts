import { createContext, Dispatch, SetStateAction } from 'react'
import storage from 'src/utils/storage'

type ThemeContextType = {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: storage.isEqual('theme', 'dark'),
  setIsDark: () => {
    //
  },
})
