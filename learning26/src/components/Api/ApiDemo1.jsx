import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
  const [message,setMessage] = useState("")
  const [user, setUser] = useState([])

  const getUser = async() =>{
    const response = await axios.get("https://node5.onrender.com/user/user/")
    console.log(response)
    console.log(response.data)
    console.log(response.data.message)
    setMessage(response.data.message)
    console.log(response.data.data)
    setUser(response.data.data)
  }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Api Demo 1</h1>
        <button onClick={()=>{getUser()}}>Get</button>
        <h1>Message = {message}</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
              {
                user.map((u)=>{
                  return <tr>
                    <td>{u._id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.password}</td>
                    <td>{u.age}</td>
                  </tr>
                })
              }
            </tbody>
       

        </table>
    </div>
  )
}
