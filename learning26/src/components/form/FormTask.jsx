import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask = () => {
    const{register,handleSubmit,formState:{errors}}=useForm({mode:"onChange"})

    const submitHandler = (data) =>{
        console.log(data)
    }

    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:'name is required*'
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:'age is required*'
            },
            min:{
                value:18,
                message:'minimum age is 18'
            },
            max:{
                value:60,
                message:'maximum age is 60'
            },
        },
        contactValidator:{
            required:{
                value:true,
                message:'contact is required*'
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}$/,
                message:'invalid Contact'
            }
        },
        emailValidator:{
            required:{
                value:true,
                message:'email is required*'
            }
        },
        hobbiesValidator:{
            required:{
                value:true,
                message:'hobbies is required*'
            },
            validate:(params)=>{
                return params?.length>=2 || 'minimum 2 hobbies are required*'
            }
        },
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>FormTask</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name:</label>
                <input type='text'{...register("name",validationSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>
            <div>
                <label>Age:</label>
                <input type='number' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age?.message}
            </div>
            <div>
                <label>Contact:</label>
                <input type='tel' {...register("contact",validationSchema.contactValidator)}></input>
                {errors.contact?.message}
            </div>
            <div>
                <label>Email:</label>
                <input type='email'{...register("email",validationSchema.emailValidator)}></input>
                {errors.email?.message}
            </div>
            <div>
                <label>Hobbies:</label>
                Movies<input type='checkbox' value='movies'{...register("hobbies",validationSchema.hobbiesValidator)}></input>
                Travels<input type='checkbox' value='travel'{...register("hobbies",validationSchema.hobbiesValidator)}></input>
                Scrolling<input type='checkbox' value='scrolling'{...register("hobbies",validationSchema.hobbiesValidator)}></input>
                {errors.hobbies?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
