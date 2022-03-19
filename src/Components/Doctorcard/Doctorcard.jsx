/* eslint-disable react/prop-types */
import React from 'react';
import './Doctorcard.css';
import { NavLink } from 'react-router-dom';
import doctorImage from '../../image/doc-350x350.png';
import Button from './Button/button';

function Doctorcard({ image = doctorImage, name, services, description }) {
  return (
    <div className="box">
      <img src={image} alt="" />
      <h3><NavLink to="/">{name}</NavLink></h3>
      <p>{services}</p>
      <p>{description}</p>
      <Button className="appoiment" type="submit" name="Appoiment" />

    </div>

  );
}

export default Doctorcard;
