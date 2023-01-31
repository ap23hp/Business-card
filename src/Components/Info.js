import React from "react"
import mail from "../Icons/Mail.png";
import linkdin from "../Icons/Vector.png";
export default function MainContent() {
    return (
        <div className="info-container">
          <h3>Apra Khanna</h3>
          <h5>Frontend Developer</h5>
          <h6>aprakhanna.website</h6>
          <div className="btns">
            <button className="insidebtn ema"><img className="info-btn-icon" src ={mail}/>Email</button>
            <button className="insidebtn lin"><img  className="info-btn-icon ic" src={linkdin}/>LinkdIn</button>
          </div>
        </div>
    )
}