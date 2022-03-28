import PropTypes from 'prop-types';
import { useState } from 'react';
import imageProfile from '../../image/doc-350x350.png';
import HistoryModal from '../HistoryModal';
import './CardViewer.css';

function CardViewer({ information }) {
  const [modal, setModal] = useState(false);
  return (
    <div className="home_content--card">
      <div className="home_content--imagen">
        <figure>
          <img src={imageProfile} alt="" />
        </figure>
      </div>
      <div className="home-content__card--perfil">
        <h3>
          {information.name}
          {' '}
          {information.lastName}
        </h3>
        <p>
          <span>
            {information.services}
            ,
            {' '}
          </span>
          <span>
            {information.phone}
            ,
            {' '}
          </span>
          <span>
            {information.mail}
            ,
            {' '}
          </span>
        </p>
        <button type="button" onClick={() => setModal(true)} className="btn-header-users header__nav-link" id="H-clinica"> Historia Clinica </button>
        <HistoryModal modal={modal} setModal={setModal} informationPatient={information} />
      </div>
    </div>
  );
}
CardViewer.propTypes = {
  information: PropTypes.objectOf(PropTypes.string),
};
CardViewer.defaultProps = {
  information: {},
};

export default CardViewer;
