import { Button, Grid } from '@mui/material'
import storage from 'src/utils/storage/storage'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import { useState } from 'react'
import { useSnackbar } from 'notistack'
import { SavedList } from 'src/utils/storage/enum/savedList'
import ImagesModal from './ImagesModal'
import VideosModal from './VideosModal'

export function Action({ title, movieId }: { title: string; movieId: number }) {
  const { enqueueSnackbar } = useSnackbar()

  const [favorite, setFavorite] = useState(storage.isInArray(SavedList.Favorite, movieId))

  const [watch, setWatch] = useState(storage.isInArray(SavedList.Watch, movieId))

  const [openImageModel, setOpenImageModel] = useState(false)
  const [openVideoModal, setOpenVideoModal] = useState(false)

  const handleFavoriteClick = () => {
    const message = !favorite ? `${title} Added to Favorite` : `${title} Removed from Favorite`
    const variant = !favorite ? 'success' : 'error'
    enqueueSnackbar(message, { variant })
    setFavorite(!favorite)
    storage.addOrRemoveFromArray(SavedList.Favorite, movieId)
  }

  const handleWatchClick = () => {
    setWatch(!watch)
    const message = !watch ? `${title} Added to Watch Later` : `${title} Removed from Watch Later`
    const variant = !watch ? 'success' : 'error'
    enqueueSnackbar(message, { variant })
    storage.addOrRemoveFromArray(SavedList.Watch, movieId)
  }

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button
          variant='outlined'
          onClick={handleWatchClick}
          size='small'
          color='warning'
          startIcon={<WatchLaterIcon />}
        >
          {!watch ? 'Add' : 'Remove'} {' Watch Later'}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant='outlined'
          onClick={handleFavoriteClick}
          size='small'
          color='error'
          startIcon={<FavoriteIcon />}
        >
          {!favorite ? 'Add' : 'Remove'} {' Favorite'}
        </Button>
      </Grid>
      <Grid item>
        <Grid container spacing={1}>
          <Grid item>
            <Button
              variant='outlined'
              size='small'
              color='info'
              onClick={() => setOpenImageModel(true)}
              startIcon={<InsertPhotoIcon />}
            >
              Photos
            </Button>
          </Grid>
          <ImagesModal
            {...{
              movieId,
              open: openImageModel,
              setOpen: setOpenImageModel,
            }}
          />
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
        </Grid>
      </Grid>
    </Grid>
  )
}
