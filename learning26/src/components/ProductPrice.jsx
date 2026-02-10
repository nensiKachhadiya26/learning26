import React from 'react'

export const ProductPrice = (props) => {
  return (
    <div style={{textAlign:'center'}}>
        <h1>ProductPrice</h1>
        {props.title}
        <h1>{props.productList.name}</h1>
        <h1>{props.productList.category}</h1>
        <h1>{props.productList.price}</h1>

    </div>
  )
}
