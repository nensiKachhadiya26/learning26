import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const ApiDemoUsers = () => {
    const [users, setUsers] = useState([])
    const getUsers = async()=>{
        const response = await axios.get("https://dummyjson.com/users")
        console.log(response)
        console.log(response.data)
        setUsers(response.data.users)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Api Demo Users</h1>
        <button onClick={()=>{getUsers()}}> Show User Detail</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FIRSTNAME</th>
                    <th>LASTNAME</th>
                    <th>MIDDLENAME</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>EYE COLOR</th>
                    <th>HAIR COLOR</th>
                    <th>HAIR TYPE</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.maidenName}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.eyeColor}</td>
                            <td>{user.hair.color}</td>
                            <td>{user.hair.type}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
