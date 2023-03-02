import * as React from "react";
import { useState } from "react";
import storage from "../../../utils/storage";
import { useManyMovies } from "../../../api/movies/movies";
import { DataGrid } from "@mui/x-data-grid";
import movieColumns from "./columns/movie.columns";
import { SavedList } from "../../../api/libs/savedList";

export default function FavoriteMoviesTable() {
  const [movieIds, setMovieIds] = useState(storage.get(SavedList.Favorite));

  const { data, isFetching, refetch } = useManyMovies({ movieIds });

  return (
    <DataGrid
      loading={isFetching}
      rows={data?.items ?? []}
      columns={movieColumns}
      autoHeight
      rowHeight={185}
      onRowClick={(params) => {
        if (!storage.isInArray(SavedList.Watch, params.id)) {
          setMovieIds(storage.get(SavedList.Watch));
          refetch().then(() => {});
        }
      }}
    />
  );
}
