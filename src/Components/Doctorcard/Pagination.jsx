/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/require-default-props */
/* eslint-disable eol-last */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

function Pagination({ card = 0, setCard = () => {}, maximo = 0 }) {
  const [numPage, setNumPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const nextPage = (_) => {
    setNumPage(numPage + 1);
    setCard(card + 1);
  };
  // eslint-disable-next-line no-unused-vars
  const prevPage = (_) => {
    setNumPage(numPage - 1);
    setCard(card - 1);
  };

  return (
    <div className="pagination">
      <span onClick={prevPage}>Prev</span>
      <p>{numPage}</p>
      <p>
        {maximo}
      </p>
      <span onClick={nextPage}> Next</span>

    </div>
  );
}
Pagination.propTypes = {
  card: PropTypes.number,
  setCard: PropTypes.func,
  maximo: PropTypes.number,
};

export default Pagination;