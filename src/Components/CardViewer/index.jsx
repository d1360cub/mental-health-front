/* eslint-disable camelcase */
/* eslint-disable no-sequences */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/aria-role */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import sweetalert from 'sweetalert';
import HistoryModal from '../HistoryModal';
import { deleteAppointment } from '../../services/appointments';
import { getUser } from '../../services/user';
import './CardViewer.css';

function CardViewer({ userId, start, end, viewer, appointment_id }) {
  const { token } = useSelector((state) => state.user);
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
  const handleDeleteAppointment = async () => {
    await deleteAppointment(appointment_id, token);
    sweetalert({
      icon: 'info',
      title: 'Tu Cita ha sido cancelada',
      text: 'A tu correo llegará una notificación',
      buttons: 'Continuar',
    });
  };
  return (
    <div className="home_content--card" role="home_content--card">
      <div className="home_content--imagen">
        <figure>
          <img src={user.avatar} alt="" />
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
            Teléfono:
            {' '}
            {user.phone}
          </span>
          <br />
          <span>
            Correo:
            {' '}
            {user.email}
          </span>
          <br />
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
              <button className="btn-header-users header__nav-link" onClick={handleDeleteAppointment}>Cancelar Cita</button>
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
              <button className="btn-header-users header__nav-link" onClick={handleDeleteAppointment}>Cancelar Cita</button>
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
  appointment_id: PropTypes.string,
};
CardViewer.defaultProps = {
  userId: '',
  start: '',
  end: '',
  viewer: false,
  appointment_id: '',
};

export default CardViewer;
