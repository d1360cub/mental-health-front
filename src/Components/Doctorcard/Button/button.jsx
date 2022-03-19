/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

function Button({ name, type, handleClick, ...rest }) {
  return (
    <button type={type} onClick={handleClick} {...rest}>
      {name}
    </button>
  );
}

export default Button;
