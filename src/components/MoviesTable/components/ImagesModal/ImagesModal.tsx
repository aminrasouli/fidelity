import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import ImagesList from './components/ImagesList'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const ImagesModal = ({
  movieId,
  open,
  setOpen,
}: {
  movieId: number
  open: boolean
  setOpen: (open: boolean) => void
}) => {
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <IconButton aria-label='close' onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <ImagesList {...{ movieId }} />
        </Box>
      </Modal>
    </div>
  )
}
export default ImagesModal
