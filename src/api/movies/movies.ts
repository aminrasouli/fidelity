import { QueryFunction, useQuery } from 'react-query'
import { UseManyMovies, UseMovies, UseSingleMovies } from './movies.types'
import { queryFn } from 'src/api/utils/queryFn'
import { parallelQueryFn } from 'src/api/utils/parallelQueryFn'
import { movieTransformer } from './movie.transformer'
import { QueryObserverOptions } from 'react-query/types/core/types'

export const useMovies = ({ query, page = 1, ...params }: UseMovies) => {
  const endpoint = '/search/movie'
  const queryParams = {
    query: query,
    page: page,
    language: 'en-US',
    include_adult: 'false',
  }

  return useQuery({
    queryKey: [endpoint, queryParams],
    select: movieTransformer,
    queryFn: queryFn as QueryFunction<any, any>,
    keepPreviousData: !!query,
    ...(params as QueryObserverOptions<any, any>),
  })
}

export const useManyMovies = ({ movieIds, ...params }: UseManyMovies) => {
  const endpoint = 'movie'
  return useQuery({
    queryKey: [endpoint, movieIds],
    select: movieTransformer,
    queryFn: parallelQueryFn,
    ...(params as QueryObserverOptions<any, any>),
  })
}

export const useMovieImages = ({ movieId, ...params }: UseSingleMovies) => {
  const endpoint = `/movie/${movieId}/images`

  return useQuery({
    queryKey: [endpoint],
    select: (data: any) => {
      return (data?.posters ?? [])
        .concat(data?.backdrops ?? [])
        .map((item: any) => `https://image.tmdb.org/t/p/original${item?.file_path}`)
    },
    queryFn: queryFn,
    ...(params as QueryObserverOptions<any, any>),
  })
}

export const useMovieVideos = ({ movieId, ...params }: UseSingleMovies) => {
  const endpoint = `/movie/${movieId}/videos`

  return useQuery({
    queryKey: [endpoint],
    select: (data) =>
      data?.results
        ?.filter?.((item: any) => item.key && item?.site === 'YouTube')
        ?.map?.((item: any) => `https://www.youtube.com/watch?v=${item.key}`) ?? [],
    queryFn: queryFn,
    ...(params as QueryObserverOptions<any, any>),
  })
}
