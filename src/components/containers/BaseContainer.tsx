import { FC, PropsWithChildren } from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { Breakpoint } from '@mui/system'

type BaseContainerType = {
  maxWidth?: Breakpoint | false
}

const BaseContainer: FC<PropsWithChildren<BaseContainerType>> = ({ children, maxWidth = 'sm' }) => {
  return (
    <Container
      component='main'
      maxWidth={maxWidth}
      sx={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <CssBaseline />
      {children}
    </Container>
  )
}

export default BaseContainer
