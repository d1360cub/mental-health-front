import React from 'react';
import './ServiceCard.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function ServiceCard({ icon, service, description }) {
  return (
    <div className="services__box">
      <i className={icon} />
      <h3>{service}</h3>
      <p>{description}</p>
      <NavLink to="/" className="btn-appointment">
        Find Doctors
      </NavLink>
    </div>
  );
}

ServiceCard.propTypes = {
  icon: PropTypes.string,
  service: PropTypes.string,
  description: PropTypes.string,
};

ServiceCard.defaultProps = {
  icon: 'fa fa-user-doctor',
  service: '',
  description: '',
};

export default ServiceCard;
