/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './Searchdoctor.css';

function Searchdoctor({ setQuery }) {
  return (
    <div>
      <form className="searchD" onSubmit={setQuery}>

        <label htmlFor="search">Busca a tu especialista...</label>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Búqueda por area de atención"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

Searchdoctor.propTypes = {
  setQuery: PropTypes.func,
};

Searchdoctor.defaultProps = {
  setQuery: () => {},
};

export default Searchdoctor;
