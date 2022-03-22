/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/button';
import './Searchdoctor.css';

function Searchdoctor({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchvalue = e.target.search.value;
    onSearch(searchvalue);
  };
  return (
    <div>
      <form className="searchD" onSubmit={handleSubmit}>

        <label htmlFor="search">Encuentra a tu especialista...</label>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Nombre, ciudad, especialidad..."
        />
        <Button className="btn-search" type="submit" name="Search" />
      </form>
    </div>
  );
}

Searchdoctor.propTypes = {
  onSearch: PropTypes.func,
};

Searchdoctor.defaultProps = {
  onSearch: () => {},
};

export default Searchdoctor;
