/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Doctorcard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import doctorImage from '../../image/doc-350x350.png';

function Doctorcard({ image = doctorImage, firstName, lastName, email, id, atentionarea }) {
  return (
    <div className="box">
      <Link to={`/perfil-doctor/${id}`}>
        <img src={image} alt="" />
        <h3>
          {firstName}
          {' '}
          {lastName}
        </h3>
        <h4>{email}</h4>
        <p>
          <strong>Areas de atención:</strong>
          <br />
          {' '}
          {atentionarea}
        </p>
      </Link>

    </div>

  );
}
Doctorcard.propTypes = {
  image: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  atentionarea: PropTypes.string,
};

Doctorcard.defaultProps = {
  image: doctorImage,
  firstName: '',
  lastName: '',
  email: '',
  id: 0,
  atentionarea: '',
};

export default Doctorcard;
