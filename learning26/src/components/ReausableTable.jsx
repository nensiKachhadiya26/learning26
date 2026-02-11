import React from 'react'
import { School } from './School'

export const ReausableTable = ({data = []}) => {
  
  return (
    <div style={{textAlign:'center'}}>
       
        <table className='table'>
            <thead>
              <tr>
                <th>ROLLNO</th>
                <th>NAME</th>
                <th>STD</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((s)=>{
                  return <tr>
                      <td>{s.rollno}</td>
                      <td>{s.name}</td>
                      <td>{s.std}</td>
                  </tr>
                })
              }
            </tbody>
        </table>
        
    </div>
  )
}
