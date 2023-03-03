import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
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

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => storage.isEqual('theme', 'dark'))

  useEffect(() => storage.set('theme', isDark ? 'dark' : 'light'), [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <MuiThemeProvider theme={getTheme(isDark)}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
