import React from 'react'
import { ProductPrice } from './ProductPrice'
import { ProductWomen } from './ProductWomen'

export const Product = () => {
    var title = "Product App"

    var productList = {
        name : "Shirt",
        category : "Men",
        price : 899,
    }

    var womens = [
        {size:'S to XXL',price:1599,color:'cyne'},
        {size:'L to XL',price:1299,color:'gray'},
        {size:'M to XXXL',price:2999,color:'blue'},
    ];

  return (
    <div style={{textAlign:'center'}}>
        <h1>Product</h1>
        <ProductPrice title={title} productList={productList}></ProductPrice>
        <ProductWomen womens = {womens}></ProductWomen>
    </div>
  )
}
