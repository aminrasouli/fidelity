import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ImagesList from "./ImagesList";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ImagesModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ImagesList />
        </Box>
      </Modal>
    </div>
  );
}
