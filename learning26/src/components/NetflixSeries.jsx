import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixSeries = () => {
 var series = [
  {id:1, seriesName:"Meri Zindagi Hai tu"},
  {id:2, seriesName:"MisMatched"},
  {id:3, seriesName:"Highway Love"},
  {id:4, seriesName:"Ishq Express"},
 ]
  return (
    <div style={{textAlign:'center'}}>
        <h1>Netflix Series</h1>
        {
          series.map((s)=>{
            return<li>
              <Link to={`/show/${s.seriesName}`}>{s.seriesName}</Link>
            </li>
          })
        }
    </div>
  )
}
