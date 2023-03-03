import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { FC, PropsWithChildren, useState } from 'react'
import { ThemeContext } from 'src/context/themeContext'
import storage from 'src/utils/storage'
import { PaletteMode } from '@mui/material'
import { Theme } from '@emotion/react'
import palette from 'src/config/palette'

const buildThemeByMode: (mode: PaletteMode) => Theme = (mode: PaletteMode) =>
  createTheme({
    palette: palette(mode),
  })

const getTheme: (isDarkMode: boolean) => Theme = (isDarkMode: boolean) =>
  buildThemeByMode(isDarkMode ? 'dark' : 'light')

const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(storage.isEqual('theme', 'dark'))

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
