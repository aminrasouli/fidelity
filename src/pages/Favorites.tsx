import { FavoriteMoviesTable } from 'src/components/MoviesTable'
import PageContainer from 'src/components/containers/PageContainer'

const WatchLater: () => JSX.Element = () => {
  return (
    <PageContainer>
      <FavoriteMoviesTable />
    </PageContainer>
  )
}

export default WatchLater
