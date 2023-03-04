import { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import SearchInput from 'src/components/shared/SearchInput'
import Footer from 'src/components/layout/Footer'
import { Header } from 'src/components/layout/Header'
import { ThemeSelectorButtons } from 'src/components/shared/ThemeSelectorButtons'
import ButtonLists from 'src/components/shared/ButtonLists'
import BaseContainer from 'src/components/containers/BaseContainer'

const Home: FC = () => {
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
        <ThemeSelectorButtons />
        <ButtonLists />
      </Grid>
      <Footer />
    </BaseContainer>
  )
}

export default Home
