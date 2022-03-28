/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useState } from 'react';
// import Enlace from '../Enlace';
import imageProfile from '../../image/doc-350x350.png';
import HistoryModal from '../HistoryModal';
import './CardViewer.css';

// eslint-disable-next-line no-unused-vars
function CardViewer({ information, links }) {
  const [modal, setModal] = useState(false);
  return (
    <div className="home_content--card">
      <HistoryModal modal={modal} setModal={setModal} name={information.name} />
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
        <button type="button" onClick={() => setModal(true)} className="btn-header-users header__nav-link"> h. clinica </button>
        {/* <div className="home_content__enlaces">
          {links.map((element) => (
            <Enlace path={element.path} url={element.url} key={element.id} />
          ))}
        </div> */}
      </div>
    </div>
  );
}
CardViewer.propTypes = {
  information: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(Object),
};
CardViewer.defaultProps = {
  information: {},
  links: [],
};

export default CardViewer;
