import { createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'
import { Theme } from '@emotion/react'
import palette from './palette'

const buildThemeByMode: (mode: PaletteMode) => Theme = (mode: PaletteMode) =>
  createTheme({
    palette: palette(mode),
  })

const getTheme: (isDarkMode: boolean) => Theme = (isDarkMode: boolean) =>
  buildThemeByMode(isDarkMode ? 'dark' : 'light')

export default getTheme
