import React from 'react'

export const ProductWomen = (props) => {
  return (
    <div>
        <h1>Product Women</h1>
        <table className='table'> 
            <thead>
                <tr>
                    <th>SIZE</th>
                    <th>PRICE</th>
                    <th>COLOR</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.womens.map((women)=>{
                        return <tr>
                            <td>{women.size}</td>
                            <td>{women.price}</td>
                            <td>{women.color}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
