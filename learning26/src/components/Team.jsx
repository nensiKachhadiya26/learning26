import React from 'react'
import { Link } from 'react-router-dom'

export const Team = () => {

  var teams = [
    {id:1,teamName:"Mumbai Indians"},
    {id:2,teamName:"Chennai Super Kings"},
    {id:3,teamName:"Royal Challengers Bangalore"},
    {id:4,teamName:"Kolkata Knights Riders"},
    {id:5,teamName:"Rajasthan Royal"},
    {id:6,teamName:"Delhi Capital"},
    {id:7,teamName:"Sunriser Hyderabad"},
    {id:8,teamName:"Punjab Kings"},
    {id:9,teamName:"Gujarat Titans"},
    {id:10,teamName:"Lucknow Super Giants"},
  ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Team</h1>
        {
          teams.map((team)=>{
            return <li>
              <Link to={`/teamdetail/${team.teamName}`}>{team.teamName}</Link>
            </li>
          })
        }
        
    </div>
  )
}
