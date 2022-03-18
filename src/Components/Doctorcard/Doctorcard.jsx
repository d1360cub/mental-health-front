import React from "react";
import "./Doctorcard.css";
import doctorImage  from "../../image/doc-350x350.png";
import Button  from "./Button/button"
import { NavLink } from 'react-router-dom';



const Doctorcard =({image=doctorImage, name, services, description, id})=>{
  
    return(    
      <div className="box">
        <img src={image} alt="" />
          <h3><NavLink  to="/">{name}</NavLink></h3>
          <p>{services}</p>
          <p>{description}</p>
          <Button className="appoiment" type="submit" name="Appoiment" />
        
      </div> 
    
    );

}

export default Doctorcard;