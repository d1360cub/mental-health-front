/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import React from 'react';
import './HistoryModal.css';

function HistoryModal({ modal, setModal, name }) {
  return (
    <div className={`container-all ${modal && 'container-all--visible'}`} id="modal">
      <div className="popup">
        <div className="img" />
        <div className="container-text">
          <h1>
            historia clinica de
            {' '}
            {name}
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
          // eslint-disable-next-line react/jsx-no-comment-textnodes
        </div>
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <button type="button" onClick={() => setModal(false)} className="btn-close-popup"> X </button>
      </div>
    </div>
  );
}

export default HistoryModal;
