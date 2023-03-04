import { SavedListEnum } from 'src/hooks/useSavedList'
import SavedMoviesTable from 'src/components/MoviesTable/components/SavedMoviesTable/SavedMoviesTable'

const FavoriteMoviesTable = () => <SavedMoviesTable savedList={SavedListEnum.Watch} />
export default FavoriteMoviesTable
