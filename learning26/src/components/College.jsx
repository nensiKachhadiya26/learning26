import React from 'react'
import { ReausableTable } from './ReausableTable'

export const College = () => {

    const college = [
        {rollno:1,name:"abc",std:"bcom"},
        {rollno:2,name:"pqr",std:"bca"},
        {rollno:3,name:"xyz",std:"ba"},
        {rollno:4,name:"mno",std:"bba"},
    ]
  return (
    <div style={{textAlign:'center'}}>
        <h1>College Data</h1>
        <ReausableTable data={college}></ReausableTable>
    </div>
  )
}
