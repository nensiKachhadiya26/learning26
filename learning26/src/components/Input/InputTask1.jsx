import React, { useState } from 'react'


export const InputTask1 = () => {
  const[formData,setFormData] = useState({
    name:"",
    password:"",
    email:"",
    city:"",

  });
  const[submitedData,setSubmitedData] = useState(null)

   const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

   const handleClick = () => {
    setSubmitedData(formData)
  }
 
  return (
    <div style={{textAlign:'center'}}>
        <h1>InputTask1</h1>
        <div>
          <label>Name:</label>
          <input type='text' name="name" placeholder='enter name' onChange={handleChange} ></input>
        </div>
          <div>
          <label>Password:</label>
          <input type='password' name="password" placeholder='enter password' onChange={handleChange}  ></input>
        </div>
          <div>
          <label>Email:</label>
          <input type='email'  name="email" placeholder='enter email' onChange={handleChange}  ></input>
        </div>
          <div>
          <label>City:</label>
          <select name="city" onChange={handleChange} >
            <option value="rajkot" >Rajkot</option>
            <option value="ahemdabad" >Ahemdabad</option>
            <option value="surat" >Surat</option>
            <option value="vadodara" >Vadodara</option>
            <option value="gandhinagar" >Gandhinagar</option>
          </select>
        </div>
        <div>
         <button onClick={handleClick}>Submit</button>
        </div>
        { submitedData && <div>
                <h2>Output</h2>
                <p>Name:{submitedData?.name}</p>
                <p>Password:{submitedData?.password}</p>
                <p>Email:{submitedData?.email}</p>
                <p>City:{submitedData?.city}</p>
                 </div>
         }
         </div>
  )
}
         
  
