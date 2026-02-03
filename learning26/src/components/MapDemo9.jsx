import React from 'react'
import inception from "../assets/images/inception.jpg"
import godfather from "../assets/images/godfather.jpg"
import parasite from  "../assets/images/parasite.jpg"
import endgame from  "../assets/images/endgame.jpg"
import TheDarkKnight from "../assets/images/TheDarkKnight.jpg"
import Interstellar from "../assets/images/Interstellar.jpg"
export const MapDemo9 = () => {
    const movies = [
        { mid: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8, year: 2010,  image:inception},
        { mid: 2, title: "The Godfather", genre: "Crime", rating: 9.2, year: 1972 ,image:godfather},
        { mid: 3, title: "Parasite", genre: "Thriller", rating: 8.6, year: 2019 , image:parasite},
        { mid: 4, title: "Avengers: Endgame", genre: "Action", rating: 8.4, year: 2019 ,image:endgame},
        { mid: 5, title: "The Dark Knight", genre: "Action", rating: 9.0, year: 2008,image:TheDarkKnight},
        { mid: 6, title: "Interstellar", genre: "Sci-Fi", rating: 8.6, year: 2014,image:Interstellar}
]

  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo 9</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>MOVIE ID</th>
                    <th>TITLE</th>
                    <th>GENRE</th>
                    <th>RATING</th>
                    <th>YEAR</th>
                    <th>IMAGE</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie)=>{
                        return <tr style={{color:movie.genre == "Action" && "red"}}>
                            <td>{movie.mid}</td>
                            <td style={{color:movie.title.toUpperCase().startsWith('I') && "burlywood"}}>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td style={{backgroundColor:movie.rating>=9 && "tomato"}}>{movie.rating}</td>
                            <td style={{backgroundColor:movie.year<=2015 && "maroon"}}>{movie.year}</td>
                            <td><img src={movie.image} style={{ width: "50px" }} /></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
