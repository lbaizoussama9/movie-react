import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  if (movies.length === 0) return <p>No movies to show.</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
