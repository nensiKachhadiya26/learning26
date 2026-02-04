import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovie = () => {

  var movies = [
    {movieId:1,movieName:"Dhurandhar"},
    {movieId:2,movieName:"Kantara"},
    {movieId:3,movieName:"Kill"}
  ];
  return (
    <div style={{textAlign:"center"}}>
        <h1>Netflix Movie</h1>
          {
            movies.map((movie)=>{
              return <li>
                <Link to={`/watch/${movie.movieName}`}>{movie.movieName}</Link>
              </li>
            })
          }
       

    </div>
  )
}
