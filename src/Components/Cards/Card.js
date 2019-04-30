import React from "react"
import "./cards.css"

const Card = (prop) => {
    return (
          <div className="picture-card" onClick = {prop.clicked}>
              <img src={prop.img_src} alt={prop.name}/>
          </div>

        )

}

export default Card