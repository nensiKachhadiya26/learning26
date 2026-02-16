import React from 'react'
import { useForm } from 'react-hook-form'

export const PasswordWatchTask = () => {
    const {register,watch}=useForm()

    const password = watch("password") || "";

    const hasCapital = /[A-Z]/.test(password);
    const hasSmall = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>_]/.test(password);
    const hasLength = password.length >= 8;


    const getColor = (condition) => {
     return { color: condition ? "green" : "black" };
    };
  return (
    <div style={{textAlign:'center'}}>
        <h1>Password Watch Task</h1>
        <form>
            <div>
                <label>Password</label>
                <input type='password' {...register("password")}></input>
            </div>
        </form>
        <div>
        <p style={getColor(hasCapital)}>1 Capital Character</p>
        <p style={getColor(hasSmall)}>1 Small Character</p>
        <p style={getColor(hasDigit)}>1 Digit</p>
        <p style={getColor(hasSpecial)}>1 Special Character</p>
        <p style={getColor(hasLength)}>Minimum 8 Characters</p>
      </div>
    </div>
  )
}
