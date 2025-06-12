import React from "react";

function Filter({ filterTitle, setFilterTitle, filterRating, setFilterRating }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Filter Movies</h3>
      <input
        type="text"
        placeholder="Search by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{ width: "60%", padding: "8px", marginRight: "10px" }}
      />
      <label>Minimum Rating:</label>
      <select
        value={filterRating}
        onChange={(e) => setFilterRating(Number(e.target.value))}
        style={{ padding: "8px", marginLeft: "10px" }}
      >
        <option value={0}>All</option>
        <option value={1}>1 ⭐</option>
        <option value={2}>2 ⭐</option>
        <option value={3}>3 ⭐</option>
        <option value={4}>4 ⭐</option>
        <option value={5}>5 ⭐</option>
      </select>
    </div>
  );
}

export default Filter;
