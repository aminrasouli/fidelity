import { SearchMoviesTable } from 'src/components/MoviesTable'
import PageContainer from 'src/components/containers/PageContainer'

const Search: () => JSX.Element = () => {
  return (
    <PageContainer>
      <SearchMoviesTable />
    </PageContainer>
  )
}

export default Search
