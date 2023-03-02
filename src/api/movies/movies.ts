import { useQuery } from "react-query";
import {
  MoviesResponse,
  MoviesResponseTransformed,
  UseMovies,
} from "./movies.types";
import { parallelQueryFn } from "../libs/queryFn";

export const transformMovies = (
  data: MoviesResponse
): MoviesResponseTransformed => {
  const items = data?.results?.map((item) => {
    return {
      id: item?.id,
      title: item?.title,
      poster: item?.poster_path
        ? `https://image.tmdb.org/t/p/w200/${item?.poster_path}`
        : "/assets/img/cover.jpg",
      year: parseInt(item?.release_date?.split("-")?.[0]) || null,
      date: item?.release_date,
      overview: item?.overview,
      lang: item?.original_language,
      voteAverage: item?.vote_average,
      voteCount: item?.vote_count,
      popularity: item?.popularity,
      adult: !!item?.adult,
    };
  });

  const meta = {
    page: data?.page,
    totalCount: data?.total_results,
    totalPage: data?.total_pages,
  };

  return { items, meta };
};

export function useMovies({ query, page = 1, ...params }: UseMovies) {
  const endpoint = "/search/movie";
  const queryParams = {
    query: query,
    page: page,
    language: "en-US",
    include_adult: "false",
  };

  return useQuery({
    queryKey: [endpoint, queryParams],
    select: transformMovies,
    keepPreviousData: !!query,
  });
}

export function useManyMovies({ movieIds }: { movieIds: any }) {
  const endpoint = `movie`;
  return useQuery({
    queryKey: [endpoint, movieIds],
    select: transformMovies,
    queryFn: parallelQueryFn,
  });
}
