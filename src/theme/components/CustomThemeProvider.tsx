import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { FC, PropsWithChildren, useState } from 'react'
import { ThemeContext } from '../context/themeContext'
import getTheme from '../theme'

const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(true)

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={getTheme(isDark)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomThemeProvider
