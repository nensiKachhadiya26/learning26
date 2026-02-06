import React, { useState } from 'react'

export const UseStateDemo3 = () => {
    const [user,setUser] = useState(["A","B"]);
    const addUser = () => {
        setUser([...user,"ABC"])
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Use State Demo 3</h1>
        {
            user.map((u)=>{
                return <li>{u}</li>
            })
            
        }
        <button onClick={addUser}>Push</button>
    </div>
  )
}
