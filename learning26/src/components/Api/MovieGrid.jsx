import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"


export const MovieGrid = () => {
  const [movies, setMovies] = useState([])

  const movieSearch = async () => {
    try 
    {
      const response = await axios.get("https://www.omdbapi.com/?apikey=825a53ff&s=Animal")
      setMovies(response.data.Search || [])
    } 
    catch (error) 
    {
      console.log("Error fetching movies", error)
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MOVIES</h1>
      <button onClick={movieSearch}>SEARCH</button>

      <div
        className="movie-container"
        style={{display: "flex",flexWrap: "wrap",justifyContent: "center",gap: "50px"}}>

        {movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID} 
          style={{
              width: "300px",
              marginTop: "10px",
              textAlign: "center"
            }}>


            <h2>{movie.Title}</h2>

            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x400"}
                alt={movie.Title}
                style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
              <Link to={`/movie/${movie.imdbID}`}>
                <button style={{ marginTop: "10px" }}>Details</button>
              </Link>
          </div>
        ))}
      </div>
      

    </div>
  )
}
