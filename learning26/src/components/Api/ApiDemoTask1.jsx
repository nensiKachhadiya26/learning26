import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const ApiDemoTask1 = () => {
    const [limits, setLimits] = useState("")
    const [productDetails, setProductDetails] = useState([])
    const getProduct =async() =>{
         const response = await axios.get("https://dummyjson.com/products")
         console.log(response)
         console.log(response.data)
         console.log(response.data.limit)
        setLimits(response.data.limit)
        setProductDetails(response.data.products)
    }
   
  return (
    <div style={{textAlign:'center'}}>
        <h1>Api Demo Task 1</h1>
        <button onClick={()=>{getProduct()}}>ClicK Me</button>
        <h1>Product Limit = {limits}</h1> 
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>PRICE</th>
                    <th>RATING</th>
                    <th>STOCK</th>
                    <th>BRAND</th>
                   
                </tr>
            </thead>
            <tbody>
                {
                    productDetails.map((productDetail)=>{
                        return <tr>
                            <td>{productDetail.id}</td>
                            <td>{productDetail.title}</td>
                            <td>{productDetail.category}</td>
                            <td>{productDetail.price}</td>
                            <td>{productDetail.rating}</td>
                            <td>{productDetail.stock}</td>
                            <td>{productDetail.brand}</td>
          
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
