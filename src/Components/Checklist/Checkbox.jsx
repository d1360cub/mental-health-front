/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ onChange, data: { _id, title, status } }) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="todo new-item">
      <input
        className="todo__state"
        name={_id}
        type="checkbox"
        defaultChecked={status}
        onChange={(_e) => onChange({ _id, title, status: !status })}
      />
      <div className="todo__text">{title}</div>
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
