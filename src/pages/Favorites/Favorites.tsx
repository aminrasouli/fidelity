import { FavoriteMoviesTable } from 'src/pages/components/MoviesTable'
import PageWrapper from 'src/theme/layout/PageWrapper'

const WatchLater: () => JSX.Element = () => {
  return (
    <PageWrapper>
      <FavoriteMoviesTable />
    </PageWrapper>
  )
}

export default WatchLater
