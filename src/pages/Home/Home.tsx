import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import SearchInput from 'src/pages/components/SearchInput/SearchInput'
import Copyright from 'src/theme/components/Copyright'
import { useTheme } from 'src/hooks'
import { Header } from 'src/theme/components/Header'
import { ThemeSelectorButtons } from 'src/theme/components/ThemeSelector'
import ButtonLists from 'src/pages/components/ButtonLists'
import BaseContainer from 'src/theme/layout/BaseContainer'

const Home: () => JSX.Element = () => {
  const { isDark, handleThemeChange } = useTheme()

  return (
    <BaseContainer>
      <Header />
      <Box sx={{ mt: 2 }}>
        <SearchInput />
      </Box>
      <Grid
        container
        spacing={2}
        mt={1}
        sx={{
          justifyContent: 'center',
        }}
      >
        <ThemeSelectorButtons dark={isDark} onChange={handleThemeChange} />
        <ButtonLists />
      </Grid>
      <Copyright />
    </BaseContainer>
  )
}

export default Home
