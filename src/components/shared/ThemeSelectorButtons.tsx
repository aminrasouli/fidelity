import { FC } from 'react'
import Grid from '@mui/material/Grid'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useTheme } from 'src/hooks'

export const ThemeSelectorButtons: FC = () => {
  const { isDark, setIsDark } = useTheme()

  return (
    <Grid item>
      <ToggleButtonGroup
        color='secondary'
        value={isDark ? 'dark' : 'light'}
        exclusive
        onChange={() => setIsDark(!isDark)}
      >
        <ToggleButton value='dark'>Dark</ToggleButton>
        <ToggleButton value='light'>Light</ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  )
}
