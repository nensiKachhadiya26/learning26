import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const InputMovie = () => {

  const [movies, setMovies] = useState([])
  const [searchParam, setSearchParam] = useState("")
  const [error, setError] = useState("")

  const movieSearch = async () => {

    if (!searchParam.trim()) {
      setError("Please enter a movie name")
      setMovies([])
      return
    }

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=30e75603&s=${searchParam}`
      )

      if (response.data.Response === "False") {
        setError(response.data.Error)
        setMovies([])
      } else {
        setMovies(response.data.Search)
        setError("")
      }

    } catch (err) {
      setError("Something went wrong!")
      setMovies([])
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" , backgroundColor:"aquamarine"}}>

      <h1>Movie Search</h1>

      <input
        type="text"
        placeholder="Enter movie name..."
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") movieSearch()
        }}
        style={{ padding: "8px", width: "250px" }}
      />

      <button
        onClick={movieSearch}
        style={{ marginLeft: "10px", padding: "8px" }}
      >
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          marginTop: "30px"
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              width: "250px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px"
            }}
          >

            <h3>{movie.Title}</h3>

            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/250x350"}
              alt={movie.Title}
              style={{ width: "100%", height: "350px", objectFit: "cover" }}
            />

            <Link to={`/movie/${movie.imdbID}`}>
              <button style={{ marginTop: "10px", padding: "6px 10px" }}>
                Details
              </button>
            </Link>

          </div>
        ))}
      </div>

    </div>
  )
}

export default InputMovie