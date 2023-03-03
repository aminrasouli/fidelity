import * as React from 'react'
import { useState } from 'react'
import storage from 'src/utils/storage/storage'
import { useManyMovies } from 'src/api/movies/movies'
import { DataGrid } from '@mui/x-data-grid'
import movieColumns from './columns/movie.columns'
import { SavedList } from 'src/utils/storage/enum/savedList'
import { useSnackbar } from 'notistack'

export default function FavoriteMoviesTable() {
  const [movieIds, setMovieIds] = useState(storage.get(SavedList.Favorite))

  const { enqueueSnackbar } = useSnackbar()

  const { data, isFetching, refetch } = useManyMovies({
    movieIds,
    onError: (error: any) => {
      enqueueSnackbar(error?.message, { variant: 'error' })
    },
  })

  return (
    <DataGrid
      loading={isFetching}
      rows={data?.items ?? []}
      columns={movieColumns}
      autoHeight
      rowHeight={185}
      onRowClick={(params) => {
        if (!storage.isInArray(SavedList.Watch, params.id)) {
          setMovieIds(storage.get(SavedList.Watch))
          refetch().then()
        }
      }}
    />
  )
}
