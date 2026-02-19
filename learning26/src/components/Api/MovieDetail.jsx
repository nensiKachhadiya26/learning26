import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=30e75603&i=${id}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{movie.Title}</h1>

      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x400"
        }
        alt={movie.Title}
        style={{
          width: "300px",
          height: "400px",
          objectFit: "cover",
        }}
      />

      <div style={{ marginTop: "20px" }}>
        {Object.entries(movie)
          .filter(([key]) => key !== "Poster")
          .map(([key, value]) => (
            <p key={key}>
              <b>{key}:</b>{" "}
              {Array.isArray(value) ? JSON.stringify(value) : value}
            </p>
          ))}
      </div>

      <button
        onClick={() => navigate("/moviegrid")}
        style={{
          marginTop: "20px",
          padding: "8px 15px",
          cursor: "pointer",
        }}
      >
        Back
      </button>
    </div>
  );
};
