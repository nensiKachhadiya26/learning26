import React from 'react'
import { useParams } from 'react-router-dom'


export const Show = () => {

    const seriesName = useParams().name
    

  return (
    <div style={{textAlign:"center"}}>
        <h1>Your Favourite Series is..{seriesName}</h1>
    </div>
  )
}
