import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useMovies } from 'src/api/movies'
import useSearchQueryParams from 'src/hooks/useSearchQueryParams'
import movieColumns from './columns/movie.columns'

export default function SearchMoviesTable() {
  const { searchQuery } = useSearchQueryParams()

  const [page, setPage] = useState<number>(0)

  const { data, isFetching } = useMovies({
    query: searchQuery,
    page: page + 1,
  })

  useEffect(() => setPage(0), [searchQuery])

  const totalCount = data?.meta?.totalCount ?? 1
  const totalPage = data?.meta?.totalPage ?? 1

  const pageSize = Math.ceil(totalCount / totalPage)

  return (
    <DataGrid
      paginationMode='server'
      loading={isFetching}
      rows={data?.items || []}
      columns={movieColumns}
      page={page}
      onPageChange={async (page) => {
        await setPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.scrollTo(0, 0)
      }}
      pageSize={pageSize}
      rowCount={totalCount ?? 20}
      autoHeight
      rowHeight={185}
    />
  )
}
