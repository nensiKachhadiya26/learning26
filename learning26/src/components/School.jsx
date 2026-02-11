import React from 'react'
import { ReausableTable } from './ReausableTable'

export const School = () => {
    const student = [
        {rollno:1,name:"khusi",std:3},
        {rollno:2,name:"dhruvi",std:4},
        {rollno:3,name:"rekha",std:9},
        {rollno:4,name:"bhumi",std:3},
    ]
  return (
    <div style={{textAlign:'center'}}>
        <h1>School Data</h1>
        <ReausableTable data={student}></ReausableTable>
    </div>
  )
}
