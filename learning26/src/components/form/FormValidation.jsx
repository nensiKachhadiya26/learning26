import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation = () => {
    const{register,handleSubmit,formState:{errors}} = useForm()
    console.log("errors",errors)
    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:'name is required*'
            },
        },
        ageValidator:{
            required:{
                value:true,
                message:'age is required*',
            },
            min:{
                value:20,
                message:' min age should be 20',
            },
            max:{
                value:60,
                message:'max age should be 60',
            },
        },
        addValidator:{
            required:{
                value:true,
                message:'address is requried*',
            },
            minLength:{
                value:5,
                message:'min 5 character is requried'
            },
            maxLength:{
                value:60,
                message:'max 60 character is requried'
            }
        }
    }
    const submitHandler =  (data) =>{
         alert("form subbmited...")
        console.log(data)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Name:</label>
            <input type='text' {...register ("name", validationSchema.nameValidator) }></input>
            {errors.name && errors.name.message}
        </div>
        <div>
            <label>Age:</label>
            <input type='text' {...register ("age",validationSchema.ageValidator)}></input>
            {errors.age && errors.age.message}
        </div>
        <div>
            <label>Address:</label>
            <input type='text' {...register ("add" ,validationSchema.addValidator)}></input>
            {errors.add?.message}
        </div>
         <div>
            <input type='submit'></input>
        </div>
        </form>
    </div>
  )
}
