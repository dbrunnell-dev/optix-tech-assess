import { useState } from "react";
import { Movie } from "./types";
import { useMovies } from "./hooks/useMovies";
import { useMovieCompanies } from "./hooks/useMovieCompanies";
import { MovieRefresh } from "./helpers/MovieRefresh";
import { MovieTable } from "./components/MovieTable/MovieTable";
import { MovieCounter } from "./components/MovieCounter/MovieCounter";
import { Title } from "./components/Title/Title";
import { MovieReview } from "./components/MovieReview/MovieReview";

export const App = () => {
  const [movies] = useMovies();
  const [movieCompanies] = useMovieCompanies();
  const [selectedMovie, setSelectedMovie] = useState({} as Movie);

  return (
    <div>
      <MovieRefresh refreshInterval={60000} onRefresh={useMovies} />
      <Title />
      <MovieCounter count={movies.length} />
      <br />
      <MovieTable
        movies={movies}
        movieCompanies={movieCompanies}
        setSelectedMovie={setSelectedMovie}
      />
      <br />
      <div>
        {selectedMovie.title && <MovieReview selectedMovie={selectedMovie} />}
      </div>
    </div>
  );
};
