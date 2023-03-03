import moment from 'moment/moment'
import { GridColDef } from '@mui/x-data-grid'
import { Grid } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Action } from 'src/views/components/Actions'
import StyledRating from 'src/views/components/MoviesTable/components/StyledRating'

const movieColumns: GridColDef[] = [
  {
    field: 'poster',
    headerName: 'Poster',
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <img src={`${params.value}`} width='85px' loading='lazy' alt={params.row.title} />
    ),
    filterable: false,
  },
  {
    field: 'year',
    headerName: 'Year',
    width: 55,
  },
  {
    field: 'lang',
    headerName: 'Lang',
    width: 55,
    sortable: false,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 250,
    sortable: false,
  },
  {
    field: 'date',
    headerName: 'Release Date',
    valueFormatter: (params) => {
      if (!params.value) return ''
      return moment(params.value).format('LL')
    },
    width: 155,
    sortComparator: (v1, v2) => moment(v1).diff(v2),
  },
  {
    field: 'vote_average',
    headerName: 'Ratings',
    renderCell: (params) => (
      <Grid container>
        <Grid item xs={12}>
          <StyledRating
            readOnly
            icon={<FavoriteIcon fontSize='inherit' />}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
            value={params.row.voteAverage}
            size='small'
            max={10}
          />
        </Grid>
        <Grid item xs={12}>
          <strong>{params.row.voteAverage}/10</strong>
        </Grid>
        <Grid item xs={12}>
          Popularity: {params.row.popularity}
        </Grid>
      </Grid>
    ),
    filterable: false,
    width: 300,
    sortable: false,
  },

  {
    field: 'popularity',
    headerName: 'Actions',
    renderCell: ({ row }) => <Action title={row.title} movieId={row.id} />,
    sortable: false,
    width: 230,
    filterable: false,
  },
  {
    field: 'overview',
    headerName: 'Overview',
    renderCell: (params) => (
      <Typography
        variant='body2'
        color='text.secondary'
        noWrap
        sx={{
          whiteSpace: 'normal',
          wordWrap: 'break-word',
          display: '-webkit-box',
          '-webkit-line-clamp': '7',
          '-webkit-box-orient': 'vertical',
        }}
      >
        {params.value}
      </Typography>
    ),
    sortable: false,
    width: 300,
    filterable: false,
  },
]

export default movieColumns
