/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FormHclinic({ handleAddItem }) {
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
      <div>
        <div>
          <textarea
            className="textareaCH"
            type="text"
            value={description}
            placeholder="Escribe aquí tus anotaciones sobre el paciente"
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

FormHclinic.propTypes = {
  handleAddItem: PropTypes.func,
};

FormHclinic.defaultProps = {
  handleAddItem: () => {},
};

export default FormHclinic;
