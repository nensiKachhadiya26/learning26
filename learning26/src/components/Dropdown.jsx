import React, { useState } from 'react'

export const Dropdown = () => {
    const [states, setStates] = useState([])


    //create json array 
    const countryState = {
        india:["Gujarat", "Maharashtra", "Rajasthan"],
        usa:["California", "Texas", "Florida"],
        uk:["London", "Manchester", "Liverpool"],
    }
    
    
    const handleCountryChange = (e) => {
        const selectedCuntry = e.target.value
        setStates(countryState[selectedCuntry])
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Dropdown List</h1>
        <div>
            <label>Country:</label>
            <select onChange={handleCountryChange}>
                <option value="india" >India</option>
                <option value="usa">Usa</option>
                <option value="uk">Uk</option>
            </select>
        </div>
        <div>
            <label>States:</label>
            <select>
            
            {
                states.map((state)=>(<option>
                   {state}
                </option>
                ))
            }
            </select>
        </div>
    </div>
  )
}
