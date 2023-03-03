import * as React from 'react'
import { useState } from 'react'
import storage from 'src/utils/storage'
import { useManyMovies } from 'src/api/movies'
import { DataGrid } from '@mui/x-data-grid'
import movieColumns from '../../columns/movie.columns'
import { SavedListEnum } from 'src/hooks/useSavedList'
import { useSnackbar } from 'notistack'

export default function SavedMoviesTable({ savedList }: { savedList: SavedListEnum }) {
  const [movieIds, setMovieIds] = useState(storage.get(savedList))

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
        if (!storage.isInArray(savedList, params.id)) {
          setMovieIds(storage.get(savedList))
          refetch().then()
        }
      }}
    />
  )
}
