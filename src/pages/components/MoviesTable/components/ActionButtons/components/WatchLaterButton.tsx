import { Button } from '@mui/material'
import { SavedListEnum } from 'src/hooks/useSavedList'
import useSavedList from 'src/hooks/useSavedList/useSavedList'
import WatchLaterIcon from '@mui/icons-material/WatchLater'

export default function WatchLaterButton({ title, movieId }: { title: string; movieId: number }) {
  const name = 'Watch Later'

  const [watch, handleWatchClick] = useSavedList({
    savedList: SavedListEnum.Watch,
    savedListName: name,
    movieTitle: title,
    movieId: movieId,
  })

  return (
    <Button
      variant='outlined'
      onClick={handleWatchClick}
      size='small'
      color='warning'
      startIcon={<WatchLaterIcon />}
    >
      {!watch ? 'Add' : 'Remove'}
      {` ${name}`}
    </Button>
  )
}
