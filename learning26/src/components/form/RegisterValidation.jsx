import React from 'react'
import { useForm } from 'react-hook-form'

export const RegisterValidation = () => {
    const{register,handleSubmit,formState:{errors}} = useForm()
    console.log("errors..",errors)
    const submitHandler =(data) => {
        alert("form submited..")
        console.log(data)
    }
    const validationSchema = {
        firstnameValidator:{
            required:{
                value:true,
                message:'firstname is required*'
            }
        },
        lastnameValidator:{
            required:{
                value:true,
                message:'lastname is required*'
            }
        },
        emailValidator:{
            required:{
                value:true,
                message:'email is required*'
            }
        },
        cityValidator:{
            required:{
                value:true,
                message:'city is required*'
            }
        },
        monoValidator:{
            required:{
                value:true,
                message:'mo.no is required*'
            },
            minLength:{
                value:10,
                message:'enter 10 digits..'
            },
            maxLength:{
                value:10,
                message:'enter 10 digits..'
            },
        },
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Register Validation</h1>
         <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>FirstName:</label>
            <input type='text' {...register("firstname",validationSchema.firstnameValidator)}></input>
            {errors.firstname?.message}
        </div>
         <div>
            <label>LastName:</label>
            <input type='text'{...register("lastname",validationSchema.lastnameValidator)}></input>
            {errors.lastname?.message}
        </div>
         <div>
            <label>Email:</label>
            <input type='text'{...register("email",validationSchema.emailValidator)}></input>
            {errors.email?.message}
        </div>
         <div>
            <label>City:</label>
            <input type='text' {...register("city",validationSchema.cityValidator)}></input>
            {errors.city?.message}
        </div>
         <div>
            <label>Mo.No:</label>
            <input type='tel'{...register("mono",validationSchema.monoValidator)}></input>
            {errors.mono?.message}
        </div>
        <div>
            <input type='submit'></input>
        </div>
        </form>
    </div>
  )
}
