import { FC, PropsWithChildren } from 'react'
import Grid from '@mui/material/Grid'
import { Header } from 'src/components/layout/Header'
import Box from '@mui/material/Box'
import ButtonLists from 'src/components/shared/ButtonLists'
import Footer from 'src/components/layout/Footer'
import BaseContainer from './BaseContainer'

const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BaseContainer maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
          <Box mb={3} display='flex' justifyContent='center'>
            <ButtonLists showBackButton />
          </Box>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </BaseContainer>
  )
}

export default PageContainer
