/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

import React from 'react';

function Button({ name, type, handleClick, ...rest }) {
  return (
    <button type={type} onClick={handleClick} {...rest}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  handleClick: () => {},
  type: '',
};

export default Button;
