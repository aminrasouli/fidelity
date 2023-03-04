import { FC } from 'react'
import { SearchMoviesTable } from 'src/components/MoviesTable'
import PageContainer from 'src/components/containers/PageContainer'

const Search: FC = () => {
  return (
    <PageContainer>
      <SearchMoviesTable />
    </PageContainer>
  )
}

export default Search
