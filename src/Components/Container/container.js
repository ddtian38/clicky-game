import React from "react"
import "./container.css"

const Container = (props) =>{

    return <div className = "container"> 
        <div className = "jumbotron"> Pick an Avenager to guess </div>
        {props.children}
    </div>

}

export default Container;