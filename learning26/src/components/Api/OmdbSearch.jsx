import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const OmdbSearch = () => {

    const [movies, setMovies] = useState([])
   const [searchParam, setsearchParam] = useState("krish")

    const searchMovie  = async() =>{
        const response = await axios.get(`https://www.omdbapi.com/?apikey=30e75603&s=${searchParam}`)
       // const response = await axios.get("https://www.omdbapi.com/?apikey=30e75603&s=Jawan")
        console.log(response)
        console.log(response.data)
        console.log(response.data.Search)
        setMovies(response.data.Search)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>OmdbSearch</h1>
        <button onClick={()=>{searchMovie()}}>Add</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>OMDBID</th>
                    <th>TITLE</th>
                    <th>YEAR</th>
                    <th>POSTER</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie)=>{
                        return <tr>
                            <td>{movie.imdbID}</td>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>
                                <img src={movie.Poster} style={{height:'150px',width:'150px'}}></img>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
