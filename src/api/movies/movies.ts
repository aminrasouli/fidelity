import { QueryFunction, useQuery } from "react-query";
import { UseMovies } from "./movies.types";
import { parallelQueryFn, queryFn } from "../libs/queryFn";
import { movieTransformer } from "../transform/movie.transformer";

export function useMovies({ query, page = 1 }: UseMovies) {
  const endpoint = "/search/movie";
  const queryParams = {
    query: query,
    page: page,
    language: "en-US",
    include_adult: "false",
  };

  return useQuery({
    queryKey: [endpoint, queryParams],
    select: movieTransformer,
    queryFn: queryFn as QueryFunction<any, any>,
    keepPreviousData: !!query,
  });
}

export function useManyMovies({ movieIds }: { movieIds: any }) {
  const endpoint = `movie`;
  return useQuery({
    queryKey: [endpoint, movieIds],
    select: movieTransformer,
    queryFn: parallelQueryFn,
  });
}

export function useMovieImages({ movieId }: { movieId: any }) {
  const endpoint = `/movie/${movieId}/images`;

  return useQuery({
    queryKey: [endpoint],
    select: (data: any) => {
      return (data?.posters ?? [])
        .concat(data?.backdrops ?? [])
        .map(
          (item: any) => `https://image.tmdb.org/t/p/original${item?.file_path}`
        );
    },
    queryFn: queryFn,
  });
}

export function useMovieVideos({ movieId }: { movieId: any }) {
  const endpoint = `/movie/${movieId}/videos`;

  return useQuery({
    queryKey: [endpoint],
    select: (data) =>
      data?.results
        ?.filter?.((item: any) => item.key && item?.site === "YouTube")
        ?.map?.((item: any) => `https://www.youtube.com/watch?v=${item.key}`) ??
      [],
    queryFn: queryFn,
  });
}
