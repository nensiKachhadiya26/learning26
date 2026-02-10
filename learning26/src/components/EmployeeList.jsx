import React from 'react'
import { SubEmployee } from './SubEmployee'

export const EmployeeList = (props) => {
     console.log("emplist ",props)
  return (
    <div style={{textAlign:'center'}}>
        <h1>EmployeeList</h1>
        {props.title}
        <h1>{props.company.name}</h1>
        <h1>{props.company.year}</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.student.map((stu)=>{
                        return <tr>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <SubEmployee title={props.title} company={props.company.name}></SubEmployee>
        
    </div>
  )
}
