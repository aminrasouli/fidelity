import { Button, Grid } from '@mui/material'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import VideosModal from '../../VideosModal/VideosModal'
import { useState } from 'react'
import { useMovieVideos } from 'src/api/movies'

const VideoButton = ({ movieId }: { movieId: number }) => {
  const [openVideoModal, setOpenVideoModal] = useState(false)

  const { data } = useMovieVideos({ movieId })

  const hasVideos = data?.length > 0

  return (
    <>
      <Grid item>
        <Button
          disabled={!hasVideos}
          variant='outlined'
          size='small'
          color='primary'
          onClick={() => setOpenVideoModal(true)}
          startIcon={<SlideshowIcon />}
        >
          Trailer
        </Button>
      </Grid>
      <VideosModal
        {...{
          movieId,
          open: openVideoModal,
          setOpen: setOpenVideoModal,
        }}
      />
    </>
  )
}
export default VideoButton
