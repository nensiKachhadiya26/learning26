import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const {register,handleSubmit} = useForm()
    const[userData,setUserData] = useState({})
    const[isSubmited,setisSubmited] = useState(false)

    const submitHandler = (data) =>{
        console.log(data)
        setUserData(data)
        setisSubmited(true)

    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>UserName</label>
                <input type='text' placeholder='enter username' {...register("name")}></input>
            </div>
             <div>
                <label>Password</label>
                <input type='password' placeholder='enter password' {...register("password")}></input>
            </div>
             <div>
                <label>Email</label>
                <input type='email' placeholder='enter email' {...register("email")}></input>
            </div>
             <div>
                <label>Mobile Number</label>
                <input type='tel' placeholder='enter mobile number' {...register("mobilenumber")}></input>
            </div>
             <div>
                <label>Date Of Birth</label>
                <input type='date' placeholder='enter date of birth' {...register("dateofbirth")}></input>
            </div>
             <div>
                <input type='submit'></input>
            </div>
        </form>
        {
            isSubmited == true && <div>
                <h3>UserName:{userData.name}</h3>
                <h3>Password:{userData.password}</h3>
                <h3>Email:{userData.email}</h3>
                <h3>Mobile Number:{userData.mobilenumber}</h3>
                <h3>Date of Birth:{userData.dateofbirth}</h3>
                </div>
        }
    </div>
  )
}
