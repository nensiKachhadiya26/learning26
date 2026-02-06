import React, { useState } from 'react'

export const UseStateDemo1 = () => {
    const[count,setCount] = useState(0)
    const increaseCount = () =>{
        setCount (count+ 1);
        console.log("After Increase",count)

    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Use State Demo1</h1>
        <h2>Count = {count}</h2>
        <button onClick={increaseCount}>+</button>
    </div>
  )
}
