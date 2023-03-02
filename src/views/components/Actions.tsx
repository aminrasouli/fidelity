import { Button, Grid, Modal } from "@mui/material";
import storage from "../../utils/storage";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { SavedList } from "../../api/libs/savedList";
import ImagesModal from "./ImagesModal";

export function Action({ title, movieId }: { title: string; movieId: number }) {
  const { enqueueSnackbar } = useSnackbar();

  const [favorite, setFavorite] = useState(
    storage.isInArray(SavedList.Favorite, movieId)
  );

  const [watch, setWatch] = useState(
    storage.isInArray(SavedList.Watch, movieId)
  );

  const handleFavoriteClick = () => {
    const message = !favorite
      ? `${title} Added to Favorite`
      : `${title} Removed from Favorite`;
    const variant = !favorite ? "success" : "error";
    enqueueSnackbar(message, { variant });
    setFavorite(!favorite);
    storage.addOrRemoveFromArray(SavedList.Favorite, movieId);
  };

  const handleWatchClick = () => {
    setWatch(!watch);
    const message = !watch
      ? `${title} Added to Watch Later`
      : `${title} Removed from Watch Later`;
    const variant = !watch ? "success" : "error";
    enqueueSnackbar(message, { variant });
    storage.addOrRemoveFromArray(SavedList.Watch, movieId);
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button
          variant="outlined"
          onClick={handleWatchClick}
          size="small"
          color="warning"
          startIcon={<WatchLaterIcon />}
        >
          {!watch ? "Add" : "Remove"} {" Watch Later"}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          onClick={handleFavoriteClick}
          size="small"
          color="error"
          startIcon={<FavoriteIcon />}
        >
          {!favorite ? "Add" : "Remove"} {" Favorite"}
        </Button>
      </Grid>
      <Grid item>
        <Grid container spacing={1}>
          <Grid item>
            <Button
              variant="outlined"
              size="small"
              color="info"
              startIcon={<InsertPhotoIcon />}
            >
              Photos
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              startIcon={<SlideshowIcon />}
            >
              Trailer
            </Button>
          </Grid>
          <ImagesModal />
        </Grid>
      </Grid>
    </Grid>
  );
}
