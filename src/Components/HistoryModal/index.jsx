import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newCHistoryPatient } from '../../services/cHistory';
import { showHistoryPatient, updateHistoryPatient } from '../../store/actions';
import FormHclinic from './FormHclinic';
import './HistoryModal.css';

function HistoryModal({ modal, setModal, userId, fullName }) {
  const { token } = useSelector((state) => state.user);
  const cHistory = useSelector((state) => state.cHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modal) dispatch(showHistoryPatient(userId));
  }, [modal]);
  const handleAddDescription = async (_newHistoryP) => {
    try {
      const data = await newCHistoryPatient({ ..._newHistoryP, patientId: userId }, token);
      dispatch(updateHistoryPatient([data, ...cHistory]));
    } catch (error) {
      throw new Error(error);
    }
  };

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
          <FormHclinic handleAddItem={handleAddDescription} />
          <div className="containercHisroty">
            {cHistory.map((cHistories) => (
              <p className="containerPCH">
                {' '}
                { cHistories.description }
                {' '}
                <br />
                <strong>Fecha: </strong>
                {cHistories.createdAt.split('', 10)}
                <br />
                <strong>Doctor: </strong>
                {cHistories.doctorId.firstName}
                {' '}
                {cHistories.doctorId.lastName}
              </p>
            ))}
          </div>
        </div>
        <button type="button" onClick={() => setModal(false)} className="btn-close-popup"> X </button>
      </div>
    </div>
  );
}
HistoryModal.propTypes = {
  userId: PropTypes.string,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  fullName: PropTypes.string,
};
HistoryModal.defaultProps = {
  userId: '',
  modal: false,
  setModal: () => {},
  fullName: '',
};
export default HistoryModal;
