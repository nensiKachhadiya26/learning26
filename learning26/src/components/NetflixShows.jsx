import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Netflix Shows</h1>
        
          <li>
            <Link to="/watch/moneyheist">Money Heist</Link>
          </li>
          <li>
            <Link to="/watch/brakingbad">Braking Bad </Link>
          </li>
          <li>
            <Link to="/watch/strangerthings">Stranger Things</Link>
          </li>
          
        
    </div>
  )
}
