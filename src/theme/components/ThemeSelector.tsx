import Grid from '@mui/material/Grid'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

export function ThemeSelectorButtons({
  dark,
  onChange,
}: {
  dark: boolean
  onChange: () => void
}): JSX.Element {
  return (
    <Grid item>
      <ToggleButtonGroup
        color='secondary'
        value={dark ? 'dark' : 'light'}
        exclusive
        onChange={onChange}
      >
        <ToggleButton value='dark'>Dark</ToggleButton>
        <ToggleButton value='light'>Light</ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  )
}
