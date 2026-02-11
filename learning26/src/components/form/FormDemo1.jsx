import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
  const{register,handleSubmit} = useForm()
  const[userData,setUserData] = useState({})
  const[isSubmited,setisSubmited] = useState(false)
  const submitHandler = (data) =>{
        console.log(data)
        setUserData(data)
        setisSubmited(true)

  }
  
  return (
    <div style={{textAlign:'center'}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Name</label>
            <input type='text' placeholder='enter name' {...register("name")}></input>
          </div>
            <div>
            <label>Age</label>
            <input type='text' placeholder='enter age' {...register("age")}></input>
          </div>
          <div>
            <label>Gender:</label>
            Male<input type='radio' value="male" {...register("gender")}></input>
            Female<input type='radio' value="female" {...register("gender")}></input>
          </div>
          <div>
            <label>Hobbies:</label>
            Movies<input type='checkbox' value="movies" {...register("hobbies")}></input>
            Travels<input type='checkbox' value="travels" {...register("hobbies")}></input>
            Reading<input type='checkbox' value="reading" {...register("hobbies")}></input>
          </div>
          <div>
            <label>Email</label>
            <input type='email' placeholder='enter email'{...register("email")}></input>
          </div>
          <div>
            <input type='submit'></input>
          </div>
        </form>
        {isSubmited == true && <div>
          <h1>Output</h1>
          <h1>Name:{userData.name}</h1>
          <h1>Age:{userData.age}</h1>
          <h1>Gender:{userData.gender}</h1>
          <h1>Hobbies:{userData.hobbies && userData.hobbies.join(",")}</h1>
          <h1>Email:{userData.email}</h1>
          </div>
        }
    </div>
  )
}
