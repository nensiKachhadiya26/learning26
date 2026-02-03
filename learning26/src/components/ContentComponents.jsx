import React from 'react'
import gaytri from "../assets/images/gaytri.jpg";


export default function ContentComponent() {
    var details = {
      name : "Gayatri Bhardwaj",
      born : " 17 June 1995 in New Delhi, India",
      nationality : "Indian",
      education : "She earned a Bachelor of Dental Surgery (BDS) degree while starting her modeling career"

    }
    
    
    
    

  return (
    <div style={{backgroundColor:"#d04a4a5a",minHeight:"500px",width:"100%", height:"auto",border: "2px solid black"}}>
    <img src={gaytri} alt="image"  style={{width: "300px",   height: "400px",float: "right",marginTop: "50px", marginRight: "20px"  }}/>  
    <h1><u>Gayatri Bhardwaj</u></h1>
    <h2>Indian model and actress</h2> 
    <h3>Name:{details.name}</h3>
    <h3>Born:{details.born}</h3>
    <h3>Education:{details.education}</h3>
    <h3>Nationality:{details.nationality}</h3>

    <h1><u>🏆Career Highlights</u></h1>
    <h3><ul>
      <li>She gained fame after participating in Femina Miss India 2018, where she won the title Femina Miss India Miss United Continents 2018 and represented India at the Miss United Continents pageant</li>
      <li>Gayatri began her acting career with the YouTube web series “Dhindora” (2021)</li>
      <li>She acted in the Hindi film Ittu Si Baat (2022).</li>
      <li>In Telugu cinema, she appeared in Tiger Nageswara Rao (2023).</li>
      <li>She also featured in web series like Ishq Express, Highway Love, and Mohrey</li>
      </ul></h3>
    </div>
  )
}
