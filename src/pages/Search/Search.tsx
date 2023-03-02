import SearchMoviesTable from '../../views/components/MoviesTable/SearchMoviesTable';
import PageWrapper from '../../views/layout/PageWrapper';

const Search: () => JSX.Element = () => {
	return (
		<PageWrapper>
			<SearchMoviesTable />
		</PageWrapper>
	);
};

export default Search;
