import React from "react";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "200px",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "4px" }}
      />
      <h4>{movie.title}</h4>
      <p style={{ fontSize: "14px", height: "60px", overflow: "hidden" }}>
        {movie.description}
      </p>
      <p>Rating: {movie.rating} ⭐</p>
    </div>
  );
}

export default MovieCard;
