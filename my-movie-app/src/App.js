import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Filter from "./Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through dreams.",
      posterURL: "https://m.media-amazon.com/images/I/51s+e13UDEL._AC_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Explorers travel through a wormhole in space.",
      posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>My Movie App</h1>
              <Filter
                filterTitle={filterTitle}
                setFilterTitle={setFilterTitle}
                filterRating={filterRating}
                setFilterRating={setFilterRating}
              />
              <MovieList movies={filteredMovies} />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
