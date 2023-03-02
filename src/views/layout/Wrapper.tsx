import { FC, PropsWithChildren } from 'react'
import Grid from '@mui/material/Grid'
import { Header } from './Header'
import Box from '@mui/material/Box'
import { ButtonLists } from '../components/ButtonLists'
import Copyright from './Copyright'
import BaseContainer from './BaseContainer'

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
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
          <Copyright />
        </Grid>
      </Grid>
    </BaseContainer>
  )
}

export default PageWrapper
