/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FormTodo({ handleAddItem }) {
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });
    setDescription(' ');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="button pink"
            disabled={description ? '' : 'disabled'}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

FormTodo.propTypes = {
  handleAddItem: PropTypes.func,
};

FormTodo.defaultProps = {
  handleAddItem: () => {},
};

export default FormTodo;