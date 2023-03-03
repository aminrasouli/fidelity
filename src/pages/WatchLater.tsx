import WatchMoviesTable from 'src/components/MoviesTable/WatchMoviesTable'
import PageContainer from 'src/components/containers/PageContainer'

const WatchLater: () => JSX.Element = () => {
  return (
    <PageContainer>
      <WatchMoviesTable />
    </PageContainer>
  )
}

export default WatchLater
