/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import PropTypes from 'prop-types';
import './Pagination.css';

function Pagination({ card = 0, setCard = () => {}, maximo = 0 }) {
  // eslint-disable-next-line no-unused-vars
  const nextPage = (_) => {
    setCard(card + 1);
  };
  // eslint-disable-next-line no-unused-vars
  const prevPage = (_) => {
    setCard(card - 1);
  };

  return (
    <div className="pagination">
      <span onClick={prevPage}>Prev</span>
      <p>{card}</p>
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

Pagination.defaultProps = {
  card: 0,
  setCard: () => {},
  maximo: 0,
};
export default Pagination;
