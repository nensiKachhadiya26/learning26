import React from 'react'

export const MapDemo7 = () => {
    var items = [
        { id: 1, name: "Spoon", price: 120, quantity: 20, category: "home" },
        { id: 2, name: "Soap", price: 60, quantity: 0, category: "beauty" },
        { id: 3, name: "Shoes", price: 3200, quantity: 5, category: "men" },
        { id: 4, name: "Saree", price: 2500, quantity: 3, category: "women" },
        { id: 5, name: "Toy Car", price: 900, quantity: 8, category: "kids" }
]


  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo 7</h1>
        <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>CATEGORY</th>
            </tr>
        </thead>
        <tbody>
            {
                items.map((item)=>
                {
                    return<tr>
                        <td >{item.id}</td>
                        <td style={{backgroundColor:item.name.toUpperCase().startsWith('S') && "darkgoldenrod"}}>{item.name}</td>
                        <td style={{color:item.price<1000 && "forestgreen"}}>{item.price}</td>
                        <td style={{ color: item.category === "women" && "orange" }}>{item.quantity}</td>
                        <td style={{ color: item.quantity == 0 && "tomato" }}>{item.category}</td>
                    </tr>
                })
            }
        </tbody>
        </table>
    </div>
  )
}
