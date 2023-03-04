import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { useMovieVideos } from 'src/api/movies'
import YoutubeIframe from './components/YoutubeIframe'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  width: '65vw',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 8,
  pb: 2.5,
  px: 2.5,
}

export default function VideosModal({
  movieId,
  open,
  setOpen,
}: {
  movieId: number
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const { data } = useMovieVideos({ movieId })

  const handleClose = () => setOpen(false)

  const hasVideos = data?.length > 0

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute' as const,
            top: 16,
            right: 16,
          }}
        >
          <CloseIcon />
        </IconButton>
        {hasVideos ? <YoutubeIframe url={data[0]} /> : <h1>There is no videos</h1>}
      </Box>
    </Modal>
  )
}
