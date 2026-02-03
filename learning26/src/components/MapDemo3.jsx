import React from 'react'

export const MapDemo3 = () => {

    var student = [
        {id:1,name:"Nensi",age:22,gender:"F",city:"Gondal"},
        {id:2,name:"Shruti",age:22,gender:"F",city:"Jetpur"},
        {id:3,name:"Dhruvi",age:21,gender:"F",city:"Jetalsar"}
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo 3</h1>
        <table border="2" align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>
                {
                 student.map((st)=>{
                    return <tr>
                        <td>{st.id}</td>
                        <td>{st.name}</td>
                        <td>{st.age}</td>
                        <td>{st.gender}</td>
                        <td>{st.city}</td>
                    </tr>
                 })
                }
            </tbody>
        </table>
    </div>
  )
}
