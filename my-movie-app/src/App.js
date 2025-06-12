import React, { useState } from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";

const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets...",
    posterURL: "https://m.media-amazon.com/images/I/51s+e13UDEL._AC_.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole...",
    posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    rating: 4,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1>My Movie App</h1>

      <Filter
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
      />

      <AddMovieForm addMovie={addMovie} />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterURL || rating <= 0) {
      alert("Please fill all fields correctly");
      return;
    }
    addMovie({ title, description, posterURL, rating: Number(rating) });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px", marginBottom: "20px" }}>
      <h3>Add a New Movie</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <input
        type="number"
        placeholder="Rating from 1 to 5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <button type="submit" style={{ padding: "10px 20px" }}>Add Movie</button>
    </form>
  );
}

export default App;
