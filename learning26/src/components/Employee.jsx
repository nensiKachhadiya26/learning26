import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Employee = () => {
    var title = "Employee App" ;

    var company = {
        name : "TCS",
        year : 2026,
    }

    var student = [
        {id:1,name:'nensi',age:22},
        {id:2,name:'shruti',age:23},
        {id:3,name:'dhruvi',age:21},
    ];

  return (
    <div style={{textAlign:'center'}}>
        <h1>Employee</h1>
        <EmployeeList title={title} company={company} student={student}></EmployeeList>
    </div>
  )
}
