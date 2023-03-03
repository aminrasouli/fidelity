import { SavedListEnum } from 'src/hooks/useSavedList'
import SavedMoviesTable from './components/SavedMoviesTable/SavedMoviesTable'

export default function FavoriteMoviesTable() {
  return <SavedMoviesTable savedList={SavedListEnum.Favorite} />
}
