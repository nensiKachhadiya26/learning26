import React, { useState } from 'react'

export const CustomerDetail = () => {
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[city,setCity]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[moNumber,setMoNumber]=useState("")
    const[gender,setGender]=useState("")
    const[dateOfBirth,setDateOfBirth]=useState("")
    const[address,setAddress]=useState("")
    const[state,setState]=useState("")

  return (
    <div style={{textAlign:'center'}}>
        <h1>Customer Details</h1>
        <label>Name:</label>
        <input type='text' onChange={(e) => setName(e.target.value)}></input>
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
        <div>
        <label>Email:</label>
        <input type='text' onChange={(e) => setEmail(e.target.value)}></input>
        {email}
        </div>
        <div>
        <label>Password:</label>
        <input type='text' onChange={(e) => setPassword(e.target.value)}></input>
        {password}
        </div>
        <div>
        <label>Mobile Number:</label>
        <input type='text' onChange={(e) => setMoNumber(e.target.value)}></input>
        {moNumber}
        </div>
        <div>
        <label>Gender:</label>
        <input type='text' onChange={(e) => setGender(e.target.value)}></input>
        {gender}
        </div>
        <div>
        <label>Date Of Birth:</label>
        <input type='text' onChange={(e) => setDateOfBirth(e.target.value)}></input>
        {dateOfBirth}
        </div>
        <div>
        <label>Address:</label>
        <input type='text' onChange={(e) => setAddress(e.target.value)}></input>
        {address}
        </div>
        <div>
        <label>State:</label>
        <input type='text' onChange={(e) => setState(e.target.value)}></input>
        {state}
        </div>
    </div>
  )
}
