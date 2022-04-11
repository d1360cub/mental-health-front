import React from 'react';
import './ServiceCard.css';
import PropTypes from 'prop-types';

function ServiceCard({ service, description }) {
  return (
    <div className="services__box">
      <h3>{service}</h3>
      <p>{description}</p>
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
