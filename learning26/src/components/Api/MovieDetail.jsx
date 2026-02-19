import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const MovieDetail = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);

 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=825a53ff&i=${id}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{movie.Title}</h1>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x400"}
        alt={movie.Title}
        style={{ width: "300px", height: "400px", objectFit: "cover" }}
      />
      <p><b>Year:</b> {movie.Year}</p>
      <p><b>Genre:</b> {movie.Genre}</p>
      <p><b>Director:</b> {movie.Director}</p>
      <p><b>Actors:</b> {movie.Actors}</p>
      <p><b>Plot:</b> {movie.Plot}</p>

      
    </div>
  );
};
