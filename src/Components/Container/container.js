import React from "react"
import "./container.css"

const Container = (props) =>{

    return <div className = "container"> 
        <div className = "jumbotron"> <h5>Memorize all the Avengers You Have Selected </h5></div>
        <div className="card-holder">
                {props.children}
        </div>
       
    </div>

}

export default Container;