import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Grid } from '@mui/material'

function Copyright(props: any): JSX.Element {
  return (
    <Grid container justifyContent='center'>
      <Typography
        variant='body2'
        color='text.secondary'
        align='center'
        sx={{ mt: 8, mb: 4 }}
        {...props}
      >
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

export default Copyright
