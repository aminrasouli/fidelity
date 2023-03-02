import * as React from 'react';
import { useEffect, useState } from 'react';
import storage from '../../../utils/storage';
import { useManyMovies } from '../../../api/movies/movies';
import { DataGrid } from '@mui/x-data-grid';
import movieColumns from './columns/movie.columns';

export default function WatchMoviesTable() {
	const [movieIds] = useState(storage.get('watch'));

	const { data, isFetching } = useManyMovies({ movieIds });

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<DataGrid
			loading={isFetching}
			rows={data?.items ?? []}
			columns={movieColumns}
			autoHeight
			rowHeight={185}
		/>
	);
}
