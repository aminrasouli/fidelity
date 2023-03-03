import Grid from '@mui/material/Grid'
import { Button, ButtonGroup, Chip } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useSearchQueryParams from 'src/hooks/useSearchQueryParams'
import routes from 'src/routes'

export default function ButtonLists({
  showBackButton = false,
}: {
  showBackButton?: boolean
}): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()
  const { searchQuery, hasSearchQuery } = useSearchQueryParams()

  const onBackClick = () => {
    navigate('/')
  }

  const buildVariantButton = (path: string) => {
    return location.pathname === path ? 'contained' : 'outlined'
  }

  return (
    <Grid item>
      {showBackButton && (
        <Box mr={1} display='inline'>
          <Button
            onClick={onBackClick}
            color='primary'
            variant='outlined'
            startIcon={<ArrowBackIosIcon />}
          >
            Back
          </Button>
        </Box>
      )}
      {hasSearchQuery && (
        <Box mx={2} display='inline'>
          <Chip variant='outlined' label={searchQuery} color='primary' onDelete={onBackClick} />
        </Box>
      )}
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Divider
          sx={{
            height: '10px',
          }}
        />
      </Box>
      <ButtonGroup
        color='secondary'
        variant='outlined'
        sx={
          hasSearchQuery
            ? {}
            : {
                height: '100%',
              }
        }
      >
        <Button
          variant={buildVariantButton(routes.favorites.path)}
          component={Link}
          to={routes.favorites.path}
        >
          Favorite List
        </Button>
        <Button
          variant={buildVariantButton(routes.watchLater.path)}
          component={Link}
          to={routes.watchLater.path}
        >
          Watch Later List
        </Button>
      </ButtonGroup>
    </Grid>
  )
}
