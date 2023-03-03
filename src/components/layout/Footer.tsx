import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Grid } from '@mui/material'

function Footer(): JSX.Element {
  return (
    <Grid container justifyContent='center'>
      <Typography variant='body2' color='text.secondary' align='center' sx={{ mt: 8, mb: 4 }}>
        {'Copyright © '}
        <Link color='inherit' href='/'>
          Fidelity
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Grid>
  )
}

export default Footer
