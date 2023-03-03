import { SearchMoviesTable } from 'src/pages/components/MoviesTable'
import PageWrapper from 'src/theme/layout/PageWrapper'

const Search: () => JSX.Element = () => {
  return (
    <PageWrapper>
      <SearchMoviesTable />
    </PageWrapper>
  )
}

export default Search
