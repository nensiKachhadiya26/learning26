import React from 'react'

export const MapDemo4 = () => {

    var cities = [
        {id:1,name:"ahemdabad",pop:1000000,aqi:302},
        {id:2,name:"delhi",pop:900000,aqi:252},
        {id:3,name:"dehradun",pop:800000,aqi:150},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo 4</h1>
        <table border="2" align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>POPULATION</th>
                    <th>AQI</th>
                </tr>
            </thead>
            <tbody>
                {
                    cities.map((city)=>
                    {
                       return <tr>
                            <td>{city.id}</td>
                            <td>{city.name}</td>
                            <td>{city.pop}</td>
                            <td>{city.aqi}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
