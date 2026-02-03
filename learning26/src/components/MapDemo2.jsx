import React from 'react'

export const MapDemo2 = () => {
    var users = [
        {id:1,name:"Nensi",age:22,gender:"F",city:"Gondal"},
        {id:2,name:"Shruti",age:22,gender:"F",city:"Jetpur"},
        {id:3,name:"Dhruvi",age:21,gender:"F",city:"Jetalsar"}
    ]
  return (
    <div>
        <h1>Map Demo 2</h1>
        {
            users.map((user)=>{
                return <li>{user.id} - {user.name} - {user.age} - {user.gender} - {user.city}</li>
            })
        }
    </div>
  )
}
