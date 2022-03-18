import React, { useState } from 'react';
import './Pagination.css';

function Pagination({ card, setCard, maximo }) {
  const [numPage, setNumPage] = useState(1);
  const nextPage = () => {
    setNumPage(numPage + 1);
    setCard(card + 1);
  };
  console.log(nextPage);
  const prevPage = () => {
    setNumPage(numPage - 1);
    setCard(card - 1);
  };

  return (
    <div className="pagination">
      <span onClick={prevPage}>Prev</span>
      <p>{numPage}</p>
      <p>
        {' '}
        {maximo}
      </p>
      <span onClick={nextPage}> Next</span>

    </div>
  );
}

export default Pagination;