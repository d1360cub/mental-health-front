import React from 'react';
import './ServiceCard.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function ServiceCard({ service, description }) {
  return (
    <div className="services__box">
      <h3>{service}</h3>
      <p>{description}</p>
      <NavLink to="/" className="btn-appointment">
        Find Doctors
      </NavLink>
    </div>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.string,
  description: PropTypes.string,
};

ServiceCard.defaultProps = {
  service: '',
  description: '',
};

export default ServiceCard;
