import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ onChange, data: { id, description, done } }) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="todo new-item">
      <input
        className="todo__state"
        name={id}
        type="checkbox"
        defaultChecked={done}
        onChange={onChange}
      />
      <div className="todo__text">{description}</div>
    </label>
  );
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.objectOf(PropTypes.string),

};

Checkbox.defaultProps = {
  onChange: () => {},
  data: {},

};

export default Checkbox;
