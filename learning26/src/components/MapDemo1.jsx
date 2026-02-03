import React from 'react'

export const MapDemo1 = () => {

    let cars = ["audi","bmw","scoda","kia","creta"]

  return (
    <div style={{textAlign:"center"}}>
        <u><h1>Map Demo 1</h1></u>
        {
            cars.map((car)=>{
                return <h1>{car}</h1>
            })
        }
    </div>
  )
}
