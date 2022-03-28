import PropTypes from 'prop-types';
import React from 'react';
import './HistoryModal.css';

function HistoryModal({ modal, setModal, informationPatient }) {
  return (
    <div className={`container-all ${modal && 'container-all--visible'}`} id="modal">
      <div className="popup">
        <div className="img" />
        <div className="container-text">
          <h1>
            historia clinica de
            {' '}
            <br />
            {' '}
            {informationPatient.name}
            {' '}
            {informationPatient.lastName}
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            quae inventore tenetur voluptate beatae deserunt error minima enim
            cumque ratione eveniet, ad eligendi velit incidunt cupiditate
            libero. Quisquam, ducimus facere!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam tempora vero mollitia nobis, illum repellat animi
            voluptatibus. Sed optio dolore aspernatur voluptates. Debitis sequi
            ratione quidem facilis sed saepe.
          </p>
        </div>
        <button type="button" onClick={() => setModal(false)} className="btn-close-popup"> X </button>
      </div>
    </div>
  );
}
HistoryModal.propTypes = {
  informationPatient: PropTypes.objectOf(PropTypes.string),
  modal: PropTypes.bool,
  setModal: PropTypes.func,
};
HistoryModal.defaultProps = {
  informationPatient: {},
  modal: false,
  setModal: () => {},
};
export default HistoryModal;
