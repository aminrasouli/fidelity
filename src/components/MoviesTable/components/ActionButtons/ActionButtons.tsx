import { Grid } from '@mui/material'
import WatchLaterButton from './components/WatchLaterButton'
import FavoriteButton from './components/FavoriteButton'
import ImageButton from './components/ImageButton'
import VideoButton from './components/VideoButton'

export default function ActionButtons({ title, movieId }: { title: string; movieId: number }) {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <WatchLaterButton {...{ title, movieId }} />
      </Grid>
      <Grid item>
        <FavoriteButton {...{ title, movieId }} />
      </Grid>
      <Grid item>
        <Grid container spacing={1}>
          <ImageButton {...{ movieId }} />
          <VideoButton {...{ movieId }} />
        </Grid>
      </Grid>
    </Grid>
  )
}
