import React from "react";

const Button = ({ name, type, handleClick, ...rest }) => {
  return (
    <button type={type} onClick={handleClick} {...rest}>
      {name}
    </button>
  );
};

export default Button;