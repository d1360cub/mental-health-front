import React from 'react';
import './Modal.css';
import { Link } from 'react-router-dom';

function Modal() {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__title">Gracias por tu interés por unirte a nuestra comunidad</div>
        <br />
        <div className="modal__subtitle">Debes anexar los siguientes documentos para efectuar el registro:</div>
        <br />
        <ul className="modal__requirements">
          <li>Cédula de ciudadanía</li>
          <li>Diploma profesional</li>
          <li>Registro único nacional del talento humano en salud - RETHUS</li>
        </ul>
        <div className="modal__buttons">
          <Link to="/register" className="btn-appointment">
            Regresar
          </Link>
          <Link to="/doctor-signup" className="btn-appointment">
            Continuar
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Modal;
