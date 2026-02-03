import React from 'react'

export const MapDemo8 = () => {
    const items = [
            { pid: 1, title: "Sofa", cost: 12000, stock: 1, type: "home" },
            { pid: 2, title: "Shampoo", cost: 350, stock: 0, type: "beauty" },
            { pid: 3, title: "Sandals", cost: 900, stock: 8, type: "women" },
            { pid: 4, title: "Table", cost: 4500, stock: 2, type: "home" },
            { pid: 5, title: "School Bag", cost: 1500, stock: 5, type: "kids" }
]

  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo 8</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>PRODUCT ID</th>
                    <th>TITLE</th>
                    <th>COST</th>
                    <th>STOCK</th>
                    <th>TYPE</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item)=>{
                        return <tr style={{backgroundColor:item.type == "kids" && "lightskyblue"}}>
                            <td style={{backgroundColor:item.stock == 0 && "turquoise"}}>{item.pid}</td>
                            <td>{item.title}</td>
                            <td style={{color:item.cost>2000 && "red"}}>{item.cost}</td>
                            <td style={{backgroundColor:item.stock == 0 && "indigo"}}>{item.stock}</td>
                            <td>{item.type}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
