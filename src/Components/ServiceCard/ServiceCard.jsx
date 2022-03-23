import React from 'react';
import './ServiceCard.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function ServiceCard({ icon, service, description, publish }) {
  const publicar = publish;
  if (publicar) {
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
  return null;
}

ServiceCard.propTypes = {
  icon: PropTypes.string,
  service: PropTypes.string,
  description: PropTypes.string,
  publish: PropTypes.bool,
};

ServiceCard.defaultProps = {
  icon: 'fa fa-user-doctor',
  service: '',
  description: '',
  publish: false,
};

export default ServiceCard;
