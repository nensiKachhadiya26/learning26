import React from 'react'

export const MapDemo5 = () => {

    var student = [
        {id:1,name:"Amit",age:19,gender:"M",marks:82},
        {id:2,name:"Krisha",age:21,gender:"F",marks:96},
        {id:3,name:"Jenish",age:20,gender:"M",marks:78},
        {id:4,name:"Het",age:23,gender:"M",marks:68},
        {id:5,name:"Shruti",age:22,gender:"F",marks:86},
        {id:6,name:"Dhruvi",age:20,gender:"F",marks:79},


    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo 5</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>MARKS</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map((stu)=>{
                        return <tr style={{backgroundColor:stu.gender == "F" && "yellowgreen"}}>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td style={{color:stu.age>=21 && "red"}}>{stu.age}</td>
                            <td>{stu.gender}</td>
                            <td style={{backgroundColor:stu.marks>80 && "blueviolet"}}>{stu.marks}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
