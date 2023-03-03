import WatchMoviesTable from 'src/views/components/MoviesTable/WatchMoviesTable'
import PageWrapper from 'src/views/layout/PageWrapper'

const WatchLater: () => JSX.Element = () => {
  return (
    <PageWrapper>
      <WatchMoviesTable />
    </PageWrapper>
  )
}

export default WatchLater
