import React from 'react';
import './Doctorcard.css';
import {Link} from 'react-router-dom';
import doctorImage  from '../../image/doc-350x350.png';

const Doctorcard =({image=doctorImage, name, services, description, id })=>{
    return(    
      <div className="box">
        <img src={image} alt="" />
          <h3>{name}</h3>
          <p>{services}</p>
          <p>{description}</p>
        <Link className="appoiment" to={'doctors' + id}> Make an appoiment</Link>
        
      </div> 
    
    );
}

export default Doctorcard;
