import { Button } from '@mui/material'
import useSavedList, { getTitleBySavedList, SavedListEnum } from 'src/hooks/useSavedList'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function FavoriteButton({ title, movieId }: { title: string; movieId: number }) {
  const savedList = SavedListEnum.Favorite

  const [watch, handleWatchClick] = useSavedList({
    savedList: SavedListEnum.Favorite,
    movieTitle: title,
    movieId: movieId,
  })

  return (
    <Button
      variant='outlined'
      onClick={handleWatchClick}
      size='small'
      color='error'
      startIcon={<FavoriteIcon />}
    >
      {!watch ? 'Add' : 'Remove'}
      {` ${getTitleBySavedList(savedList)}`}
    </Button>
  )
}
