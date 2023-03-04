import { FavoriteMoviesTable } from 'src/components/MoviesTable'
import PageContainer from 'src/components/containers/PageContainer'
import { FC } from 'react'

const Favorites: FC = () => {
  return (
    <PageContainer>
      <FavoriteMoviesTable />
    </PageContainer>
  )
}

export default Favorites
