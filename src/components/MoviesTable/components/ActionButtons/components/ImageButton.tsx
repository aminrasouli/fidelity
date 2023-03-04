import { useState } from 'react'
import { Button, Grid } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import ImagesModal from '../../ImagesModal/ImagesModal'

const ImageButton = ({ movieId }: { movieId: number }) => {
  const [openImageModel, setOpenImageModel] = useState(false)

  return (
    <>
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
    </>
  )
}
export default ImageButton
