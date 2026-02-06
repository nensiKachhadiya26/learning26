import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Netflix</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <Link class="nav-link" to="netflixhome"> Home</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to="netflixshows"> Shows</Link>
        </li>
         <li class="nav-item">
            <Link class="nav-link" to="netflixmovie"> Movie</Link>
        </li>
         <li class="nav-item">
            <Link class="nav-link" to="netflixseries"> Series</Link>
        </li>
         <li class="nav-item">
            <Link class="nav-link" to="netflixdrama"> Drama</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to="netflixpodcast"> Podcast</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to="team"> Team</Link>
        </li>
         <li class="nav-item">
            <Link class="nav-link" to="functiondemo1">FunctionDemo1</Link>
        </li>
         <li class="nav-item">
            <Link class="nav-link" to="usestatedemo1">UseSateDemo1</Link>
        </li>
        
        <li class="nav-item">
            <Link class="nav-link" to="usestatedemo2">UseSateDemo2</Link>
        </li>  
        <li class="nav-item">
            <Link class="nav-link" to="usestatedemo3">UseSateDemo3</Link>
        </li>
        </ul>
    
    </div>
</nav>
    </div>
  )
}
