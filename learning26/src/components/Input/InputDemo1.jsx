import React, { useState } from 'react'

export const InputDemo1 = () => {
  const[name,setName] = useState("")
  const[age,setAge] = useState("")
  const[city,setCity] = useState("")
  
  return (
    <div style={{textAlign:'center'}}>
        <h1>InputDemo1</h1>
        <label>Name:</label>
        <input type='text' onChange={(e)=>setName(e.target.value)}></input>
        {name}

      <div>
        <label>Age:</label>
        <input type='text' onChange={(e) => setAge(e.target.value)}></input>
        {age}
      </div>
      <div>
        <label>City:</label>
        <input type='text' onChange={(e) => setCity(e.target.value)}></input>
        {city}
      </div>
    </div>
  )
}
