import React from "react"
import "./header.css"

const Header = (props) => {
    return <nav>
    <div className="nav-wrapper">
      <a href="#/" className="brand-logo left">Avenger Memory Game</a>
      <span className = "brand-logo center">Click on an image to begin</span>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>Score: <span>{props.currentScore}</span></li>
        <li>Top Score: <span>{props.topScore}</span></li>
      </ul>
    </div>
  </nav>

}

export default Header;