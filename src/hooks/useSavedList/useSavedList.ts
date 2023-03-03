import { SavedListEnum } from 'src/hooks/useSavedList'
import { useState } from 'react'
import storage from 'src/utils/storage'
import { useSnackbar } from 'notistack'

const useSavedList: ({
  savedList,
  savedListName,
  movieTitle,
  movieId,
}: {
  savedList: SavedListEnum
  savedListName: string
  movieTitle: string
  movieId: number
}) => [boolean, () => void] = ({
  savedList,
  savedListName,
  movieTitle,
  movieId,
}: {
  savedList: SavedListEnum
  savedListName: string
  movieTitle: string
  movieId: number
}) => {
  const [isSave, setIsSave] = useState<boolean>(storage.isInArray(savedList, movieId))
  const { enqueueSnackbar } = useSnackbar()
  const handleSaveClick = () => {
    const message = !isSave
      ? `${movieTitle} Added to ${savedListName}`
      : `${movieTitle} Removed from ${savedListName}`
    const variant = !isSave ? 'success' : 'error'
    enqueueSnackbar(message, { variant })
    setIsSave(!isSave)
    storage.addOrRemoveFromArray(savedList, movieId)
  }

  return [isSave, handleSaveClick]
}

export default useSavedList
