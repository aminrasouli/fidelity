import { FC } from 'react'
import WatchMoviesTable from 'src/components/MoviesTable/WatchMoviesTable'
import PageContainer from 'src/components/containers/PageContainer'

const WatchLater: FC = () => {
  return (
    <PageContainer>
      <WatchMoviesTable />
    </PageContainer>
  )
}

export default WatchLater
