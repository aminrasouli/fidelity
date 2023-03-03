import { SavedListEnum } from 'src/hooks/useSavedList'
import { SavedMoviesTable } from 'src/components/MoviesTable/components/SavedMoviesTable'

export default function FavoriteMoviesTable() {
  return <SavedMoviesTable savedList={SavedListEnum.Favorite} />
}
