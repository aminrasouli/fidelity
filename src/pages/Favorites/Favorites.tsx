import FavoriteMoviesTable from '../../views/components/MoviesTable/FavoriteMoviesTable';
import PageWrapper from '../../views/layout/PageWrapper';

const WatchLater: () => JSX.Element = () => {
	return (
		<PageWrapper>
			<FavoriteMoviesTable />
		</PageWrapper>
	);
};

export default WatchLater;
