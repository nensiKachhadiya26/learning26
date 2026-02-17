import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm({mode:"all"})
    const submitHandler = (data) => {
        console.log(data)
    }

    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:'name is required*'
            }
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
        promocodeValidator:{
            required:{
                value:true,
                message:'promo code is required..*'
            },
            validate:(params)=>{
                //console.log("params..",params)
                return params == 2026 || 'invalid promo code'
            }
        },
        hobbiesValidator:{
            required:{
                value:true,
                message:'hobbies are required*'
            },
            validate:(params)=>{
                return params?.length>=2 || 'minimum 2 hobbies are required*'
            }
        },
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>FormDemo4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name:</label>
                <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>
             <div>
                <label>Contact:</label>
                <input type='text'{...register("contact",validationSchema.contactValidator)}></input>
                {errors.contact?.message}
            </div>
            <div>
                <label>Promo Code</label>
                <input type='text' {...register("promocode",validationSchema.promocodeValidator)}></input>
                {errors.promocode?.message}
            </div>
            <div>
                <label>Hobbies:</label>
                Movies:<input type='checkbox' value="movies"{...register("hobbies",validationSchema.hobbiesValidator)}></input>
                Travels:<input type='checkbox' value="travels" {...register("hobbies",validationSchema.hobbiesValidator)}></input>
                Scrolling:<input type='checkbox' value="scrolling"{...register("hobbies",validationSchema.hobbiesValidator)}></input>
                {errors.hobbies?.message}
            </div>
            <div>
                <input type='Submit'></input>
            </div>
        </form>
    </div>
  )
}
