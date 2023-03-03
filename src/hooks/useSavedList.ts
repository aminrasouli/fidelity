import { useState } from 'react'
import storage from 'src/utils/storage'
import { useSnackbar } from 'notistack'

export enum SavedListEnum {
  Watch = 'watch',
  Favorite = 'favorite',
}

export const getTitleBySavedList = (savedList: SavedListEnum): string => {
  const items = {
    [SavedListEnum.Watch]: 'Watch Later',
    [SavedListEnum.Favorite]: 'Favorites',
  }

  return items[savedList] ?? 'Unknown List'
}

const useSavedList = ({
  savedList,
  movieTitle,
  movieId,
}: {
  savedList: SavedListEnum
  movieTitle: string
  movieId: number
}): [boolean, () => void] => {
  const [isSave, setIsSave] = useState<boolean>(storage.isInArray(savedList, movieId))
  const { enqueueSnackbar } = useSnackbar()
  const handleSaveClick = () => {
    const message = !isSave
      ? `${movieTitle} Added to ${getTitleBySavedList(savedList)}`
      : `${movieTitle} Removed from ${getTitleBySavedList(savedList)}`
    const variant = !isSave ? 'success' : 'error'
    enqueueSnackbar(message, { variant })
    setIsSave(!isSave)
    storage.addOrRemoveFromArray(savedList, movieId)
  }

  return [isSave, handleSaveClick]
}

export default useSavedList
