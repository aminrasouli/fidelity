import { Button } from '@mui/material'
import { getTitleBySavedList, SavedListEnum } from 'src/hooks/useSavedList'
import useSavedList from 'src/hooks/useSavedList/useSavedList'
import WatchLaterIcon from '@mui/icons-material/WatchLater'

export default function WatchLaterButton({ title, movieId }: { title: string; movieId: number }) {
  const savedList = SavedListEnum.Watch

  const [watch, handleWatchClick] = useSavedList({
    savedList,
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
      {` ${getTitleBySavedList(savedList)}`}
    </Button>
  )
}
