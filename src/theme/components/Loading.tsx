import Box from '@mui/material/Box'
import { Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

export const Loading = () => (
  <Box display='flex' justifyContent='center' alignItems='center'>
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
      <CircularProgress color='inherit' />
    </Backdrop>
  </Box>
)
