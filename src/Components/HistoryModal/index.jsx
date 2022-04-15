import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showHistoryPatient } from '../../store/actions';
import './HistoryModal.css';

function HistoryModal({ modal, setModal, patientId, fullName }) {
  const cHistory = useSelector((state) => state.cHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showHistoryPatient(patientId));
  }, []);
  return (
    <div className={`container-all ${modal && 'container-all--visible'}`} id="modal">
      <div className="popup">
        <div className="img" />
        <div className="container-text">
          <h1>
            historia clinica de
            {' '}
            {fullName}
          </h1>
          {cHistory.map((element) => (
            <p>
              {element.description}
            </p>
          ))}
        </div>
        <button type="button" onClick={() => setModal(false)} className="btn-close-popup"> X </button>
      </div>
    </div>
  );
}
HistoryModal.propTypes = {
  patientId: PropTypes.string,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  fullName: PropTypes.string,
};
HistoryModal.defaultProps = {
  patientId: '',
  modal: false,
  setModal: () => {},
  fullName: '',
};
export default HistoryModal;
