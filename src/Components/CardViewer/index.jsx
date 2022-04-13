import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import imageProfile from '../../image/doc-350x350.png';
// import HistoryModal from '../HistoryModal';
import { getUser } from '../../services/user';
import './CardViewer.css';

function CardViewer({ information, viewer }) {
  const [/* modal */, setModal] = useState(false);
  const [user, setUser] = useState({});
  useEffect(async () => {
    const userById = await getUser(information);
    setUser(userById);
  }, []);

  return (
    <div className="home_content--card">
      <div className="home_content--imagen">
        <figure>
          <img src={imageProfile} alt="" />
        </figure>
      </div>
      <div className="home-content__card--perfil">
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
              {/* <HistoryModal
              modal={modal}
              setModal={setModal}
              informationPatient={information}
              /> */}
            </>
          )
          : <div />}
      </div>
    </div>
  );
}
CardViewer.propTypes = {
  information: PropTypes.string,
  viewer: PropTypes.bool,
};
CardViewer.defaultProps = {
  information: '',
  viewer: false,
};

export default CardViewer;
