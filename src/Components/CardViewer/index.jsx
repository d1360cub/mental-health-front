/* eslint-disable jsx-a11y/aria-role */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import imageProfile from '../../image/doc-350x350.png';
import HistoryModal from '../HistoryModal';
import { getUser } from '../../services/user';
import './CardViewer.css';

function CardViewer({ userId, start, end, viewer }) {
  const [modal, setModal] = useState(false);
  const startSplitted = start.split('T');
  const endSplitted = end.split('T');
  const startDate = startSplitted[0].split('-');
  const finalDate = [];
  for (let i = 2; i >= 0; i -= 1) {
    finalDate.push(startDate[i]);
  }
  const startTime = startSplitted[1];
  const endTime = endSplitted[1];
  const [user, setUser] = useState({});
  useEffect(async () => {
    const userById = await getUser(userId);
    setUser(userById);
  }, []);

  return (
    <div className="home_content--card" role="home_content--card">
      <div className="home_content--imagen">
        <figure>
          <img src={imageProfile} alt="" />
        </figure>
      </div>
      <div className="home-content__card--perfil" role="home-content__card--perfil">
        <h3>
          {user.firstName}
          {' '}
          {user.lastName}
        </h3>
        <p>
          <span>
            {user.phone}
            ,
            {' '}
          </span>
          <span>
            {user.email}
            ,
            {' '}
          </span>
        </p>
        {viewer
          ? (
            <>
              <button
                type="button"
                onClick={() => setModal(true)}
                className="btn-header-users header__nav-link"
                id="H-clinica"
              >
                Historia Clinica
              </button>
              <HistoryModal
                modal={modal}
                setModal={setModal}
                userId={userId}
                fullName={`${user.firstName} ${user.lastName}`}
              />
            </>
          )
          : (
            <>
              <div>
                {`Fecha de inicio: ${finalDate.join('/')}`}
              </div>
              <div>
                {`Hora inicio: ${startTime}`}
              </div>
              <div>
                {`Hora final: ${endTime}`}
              </div>
            </>
          )}
      </div>
    </div>
  );
}
CardViewer.propTypes = {
  userId: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  viewer: PropTypes.bool,
};
CardViewer.defaultProps = {
  userId: '',
  start: '',
  end: '',
  viewer: false,
};

export default CardViewer;
