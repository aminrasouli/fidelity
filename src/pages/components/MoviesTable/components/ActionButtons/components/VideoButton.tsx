import { useState } from 'react'
import { Button, Grid } from '@mui/material'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import VideosModal from '../../VideosModal/VideosModal'

export default function VideoButton({ movieId }: { movieId: number }) {
  const [openVideoModal, setOpenVideoModal] = useState(false)

  return (
    <>
      <Grid item>
        <Button
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
