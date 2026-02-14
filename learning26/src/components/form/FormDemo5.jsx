import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const{register,handleSubmit,formState:{errors},watch}=useForm({mode:'onChange'})
    const submitHandler = (data) =>{
        console.log(data)
    }
    const password=watch("password")
    console.log("watching...",password)

    const validationSchema = {
        passwordValidator:{
            required:{
                value:true,
                message:'password is required*'
            }
        },
        confirmPasswordValidator:{
            required:{
                value:true,
                message:'confirm password is required*'
            },
            validate:(params)=>{
                return params == password || 'confirm password is not match..'
            }
        },
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>FormDemo5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Password</label>
                <input type='password'{...register("password" ,validationSchema.passwordValidator)}></input>
                {errors.password?.message}
            </div>
             <div>
                <label>Confirm Password</label>
                <input type='password'{...register("confirmPassword",validationSchema.confirmPasswordValidator)}></input>
                {errors.confirmPassword?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
