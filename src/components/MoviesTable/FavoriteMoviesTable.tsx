import { SavedListEnum } from 'src/hooks/useSavedList'
import { SavedMoviesTable } from 'src/components/MoviesTable/components/SavedMoviesTable'

const FavoriteMoviesTable = () => <SavedMoviesTable savedList={SavedListEnum.Favorite} />
export default FavoriteMoviesTable
