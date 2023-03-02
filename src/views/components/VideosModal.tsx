import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useMovieVideos } from "../../api/movies/movies";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: "65vw",
  height: "75vh",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  px: 7,
  py: 7,
};

export default function VideosModal({
  movieId,
  open,
  setOpen,
}: {
  movieId: number;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const { data } = useMovieVideos({ movieId });

  const handleClose = () => setOpen(false);

  const hasVideos = data?.length > 0;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute" as "absolute",
            top: 16,
            right: 16,
          }}
        >
          <CloseIcon />
        </IconButton>
        {hasVideos ? (
          <iframe
            width="100%"
            height="100%"
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src={`${data[0]?.replace("watch?v=", "embed/")}?autoplay=1`}
          />
        ) : (
          <h1>There is no videos</h1>
        )}
      </Box>
    </Modal>
  );
}
