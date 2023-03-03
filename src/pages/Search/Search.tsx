import SearchMoviesTable from 'src/views/components/MoviesTable/SearchMoviesTable'
import PageWrapper from 'src/views/layout/PageWrapper'

const Search: () => JSX.Element = () => {
  return (
    <PageWrapper>
      <SearchMoviesTable />
    </PageWrapper>
  )
}

export default Search
