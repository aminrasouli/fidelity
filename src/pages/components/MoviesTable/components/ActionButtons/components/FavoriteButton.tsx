import { Button } from '@mui/material'
import { SavedListEnum } from 'src/hooks/useSavedList'
import useSavedList from 'src/hooks/useSavedList/useSavedList'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function FavoriteButton({ title, movieId }: { title: string; movieId: number }) {
  const name = 'Favorite'

  const [watch, handleWatchClick] = useSavedList({
    savedList: SavedListEnum.Favorite,
    savedListName: name,
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
      {` ${name}`}
    </Button>
  )
}
