import React from 'react';
import './Doctorcard.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import doctorImage from '../../image/doc-350x350.png';
import Button from './Button/button';

function Doctorcard({ image = doctorImage, firstName, lastName, email }) {
  return (
    <div className="box">
      <img src={image} alt="" />
      <h3><NavLink to="/">{firstName}</NavLink></h3>
      <p>{lastName}</p>
      <p>{email}</p>
      <Button className="appoiment" type="submit" name="Appoiment" />

    </div>

  );
}
Doctorcard.propTypes = {
  image: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
};

Doctorcard.defaultProps = {
  image: doctorImage,
  firstName: '',
  lastName: '',
  email: '',
};

export default Doctorcard;
