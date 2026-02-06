import React from 'react'

export const FunctionDemo1 = () => {
    const test = () =>{
        alert("test function is calling...")
    }

    const test1 =(x) =>{
      alert("value of x:"+x)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FunctionDemo1</h1>
        <button onClick={test}>Click Me</button>
        <button onClick={()=>{test1(5)}}>Click Me</button>
    </div>
  )
}
