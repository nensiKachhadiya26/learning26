import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const {register,handleSubmit} = useForm()
    const[userData,setUserData] = useState({})
    const [isSubmited,setisSubmited] = useState(false)

    const submitHandler = (data) =>{
            console.log(data)
            setUserData(data)
            setisSubmited(true)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>FormDemo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Favorite Color:</label>
                <input type='color' placeholder='enter color name' {...register("color")}></input>
            </div>
            <div>
                <label>Website</label>
                <input type='url' {...register("website")}></input>
            </div>
             <div>
                <label>Time</label>
                <input type='time' {...register("time")}></input>
            </div>
             <div>
                <label>Volume</label>
                <input type='range' {...register("volume")} min="0" max="100"  defaultValue="50"></input>
            </div>
            <div>
                <label>Search</label>
                <input type='search' {...register("search")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        {
            isSubmited == true && <div>
                <h3>Favorite Color:{userData.color}</h3>
                <h3>Website:{userData.website}</h3>
                <h3>Time:{userData.time}</h3>
                <h3>Volume:{userData.volume || "not selected"}</h3>
                <h3>Search:{userData.search || "not searching"}</h3>

                </div>
        }
    </div>
  )
}
