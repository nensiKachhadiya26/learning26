import React from 'react'

export const CardsComponents = (props) => {
  return (
    <div className="card" style={{width: "18rem" }}>
        <img
          src="https://picsum.photos/300/200"
          class="card-img-top"
          alt="image"
          style={{ textAlign:'center',height:"200px",width:"200px"}}
        />
  <div className="card-body">
    <h5 className="card-title">{props.title || "TITLE"}</h5>
    <p className="card-text">{props.description || "DESCRIPTION"}</p>
    <button className="btn btn-success">Buy</button>
  </div>
</div>

  )
}
