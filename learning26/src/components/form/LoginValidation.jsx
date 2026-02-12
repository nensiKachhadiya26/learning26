import React from 'react'
import { useForm } from 'react-hook-form'

export const LoginValidation = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
     console.log("errors",errors)
    const submitHandle = (data) =>{
            alert("form submitted...")
            console.log(data);
    }
    const validationSchema = {
     usernameValidator:{
         required:{
            value:true,
            message:'username must be requried*'
        },
     },
    passwordValidator:{
        required:{
            value:true,
            message:'password must be requried* '
        },
        minLength:{
            value:8,
            message:'minimum 8 charater is requried..'
        },
        maxLength:{
            value:16,
            message:'maximum 16 character is allow..'
        },
    

    }
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Login Validation</h1>
        <form onSubmit={handleSubmit(submitHandle)}>
        <div>
            <label>UserName</label>
            <input type='text' {...register("username" ,validationSchema.usernameValidator)}></input>
            {errors.username?.message}
        </div>
        <div>
            <label>Password</label>
            <input type='text' {...register("password",validationSchema.passwordValidator)}></input>
            {errors.password?.message}
        </div>
        <div>
            <input type='submit'></input>
        </div>
        </form>
    </div>
  )
}
