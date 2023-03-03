import FavoriteMoviesTable from 'src/views/components/MoviesTable/FavoriteMoviesTable'
import PageWrapper from 'src/views/layout/PageWrapper'

const WatchLater: () => JSX.Element = () => {
  return (
    <PageWrapper>
      <FavoriteMoviesTable />
    </PageWrapper>
  )
}

export default WatchLater
