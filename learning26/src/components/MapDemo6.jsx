import React from 'react'

export const MapDemo6 = () => {
  var products = [
      { id: 1, name: "Shirt", quantity:25, price:5200, category:"clothes",},
      { id: 2, name: "Shoes",quantity:25, price:6300, category:"footwear"},
      { id: 3, name: "Watch", quantity:10, price:1500, category:"accessories"},
      { id: 4, name: "Bag", quantity:20, price:1800, category:"accessories"},
      { id: 5, name: "Cap", quantity:30, price:3300, category:"clothes"}
]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo 6</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
           {
            products.map((pro)=>{
              return <tr>
                <td>{pro.id}</td>
                <td style={{backgroundColor:pro.name.toUpperCase().startsWith('S') && "yellow"}}>{pro.name}</td>
                <td style={{color:pro.quantity >= 23 && "ActiveText"}}>{pro.quantity}</td>
                <td style={{backgroundColor:pro.price>3000 && "red"}}>{pro.price}</td>
                <td style={{color:pro.category == "accessories" && "lightblue"}}>{pro.category}</td>
              </tr>
            })
           }
          </tbody>
        </table>
    </div>
  )
}
