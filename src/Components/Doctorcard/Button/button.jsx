import React from 'react';

function Button({ name, type, handleClick, ...rest }) {
  return (
    <button type={type} onClick={handleClick} {...rest}>
      {name}
    </button>
  );
}

export default Button;
