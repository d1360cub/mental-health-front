/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './InfoPersonal.css';

function InfoPersonal({ name, lastName, mail, nacionalidad, residencia }) {
  return (
    <div className="infopersonal">
      <h3 className="nombre">
        {name}
        {' '}
        {lastName}
      </h3>
      <ul className="informacion">
        <li>{nacionalidad}</li>
        <li>{residencia}</li>
        <li>{mail}</li>
      </ul>
    </div>
  );
}

InfoPersonal.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  nacionalidad: PropTypes.string,
  residencia: PropTypes.string,
  mail: PropTypes.string,
};

InfoPersonal.defaultProps = {
  name: '',
  lastName: '',
  nacionalidad: '',
  residencia: '',
  mail: '',
};
export default InfoPersonal;
