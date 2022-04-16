import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ onChange, data: { _id, title, done } }) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="todo new-item">
      <input
        className="todo__state"
        name={_id}
        type="checkbox"
        defaultChecked={done}
        onChange={(_e) => onChange({ _id, title, status: !done })}
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
