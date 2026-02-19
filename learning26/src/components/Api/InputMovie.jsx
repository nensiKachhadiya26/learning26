import React, { useState } from "react";
import axios from "axios";

export const InputMovie = () => {
  const [movieName, setMovieName] = useState(""); // store input
  const [movieData, setMovieData] = useState(null); // store API result
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(""); // error message

  const API_KEY = "30e75603";

  const handleSearch = async () => {
    if (!movieName.trim()) {
      alert("Please enter a movie name!");
      return;
    }

    setLoading(true);
    setError("");
    setMovieData(null);

    try {
      // Encode movie name for URL
      const url = `https://www.omdbapi.com/?t=${encodeURIComponent(
        movieName
      )}&apikey=${API_KEY}`;

      const res = await axios.get(url);
      console.log(res.data); // for debugging

      if (res.data.Response === "True") {
        setMovieData(res.data);
      } else {
        setError(res.data.Error || "Movie not found!");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching movie data!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Movie Search App</h1>

      <input
        type="text"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        placeholder="Enter movie name"
        style={{ padding: "10px", width: "250px", marginRight: "10px" }}
      />
      <button onClick={handleSearch} style={{ padding: "10px 20px" }}>
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {movieData && (
        <div style={{ marginTop: "30px" }}>
          <h2>{movieData.Title}</h2>
          {movieData.Poster && movieData.Poster !== "N/A" && (
            <img src={movieData.Poster} alt={movieData.Title} width="200" />
          )}
          <p>
            <strong>Year:</strong> {movieData.Year}
          </p>
          <p>
            <strong>Genre:</strong> {movieData.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movieData.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movieData.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movieData.Plot}
          </p>
        </div>
      )}
    </div>
  );
};
