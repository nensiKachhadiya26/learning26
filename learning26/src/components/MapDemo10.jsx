import React from 'react';
import apple from "../assets/images/apple.jpg"
import banana from "../assets/images/banana.jpg"
import orange from "../assets/images/orange.jpg"
import mango from "../assets/images/mango.jpg"
import papeya from "../assets/images/papeya.jpg"

export const MapDemo10 = () => {

  const fruits = [
    { id: 1, name: "Apple", price: 120, type: "fruit", calories: 95, image:apple},
    { id: 2, name: "Banana", price: 60, type: "fruit", calories: 105, image:banana },
    { id: 3, name: "Orange", price: 80, type: "fruit", calories: 62, image:orange},
    { id: 4, name: "Mango", price: 150, type: "fruit", calories: 135, image:mango},
    { id: 5, name: "Papaya", price: 70, type: "fruit", calories: 55, image:papeya }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Map Demo 10</h1>

      <table className="table" border="1" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>TYPE</th>
            <th>CALORIES</th>
            <th>IMAGE</th>
          </tr>
        </thead>

        <tbody>
          {
            fruits.map((fruit) => (
              <tr>
                <td>{fruit.id}</td>
                <td style={{backgroundColor:fruit.name.toLowerCase().endsWith('a') && "tomato"}}>{fruit.name}</td>
                <td style={{backgroundColor:fruit.price>100 && "yellow"}}>{fruit.price}</td>
                <td>{fruit.type}</td>
                <td style={{color:fruit.calories<100 && "red"}}>{fruit.calories}</td>
                <td><img src={fruit.image} style={{ width: "50px" }} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
