import React from 'react';
import PropTypes from 'prop-types';

function InfoPersonal({ name, lastName, mail, nacionalidad, residencia }) {
  return (
    <div>
      <img src="" alt="" />
      <h3>
        {name}
        {' '}
        {lastName}
      </h3>
      <ul>
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
