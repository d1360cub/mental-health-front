/* eslint-disable jsx-a11y/aria-role */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import sweetalert from 'sweetalert';
import HistoryModal from '../HistoryModal';
import { deleteAppointment } from '../../services/appointments';
import { removeAppointment } from '../../store/actions';
import { getUser } from '../../services/user';
import './CardViewer.css';

function CardViewer({ userId, start, end, viewer, appointmentId }) {
  const dispatch = useDispatch();
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

  const handleDeleteAppointment = () => {
    sweetalert({
      title: 'Confirmación',
      text: 'Esta seguro que desea cancelar la cita',
      icon: 'info',
      buttons: ['Cancelar', 'Continuar'],
    }).then((respuesta) => {
      if (respuesta) {
        deleteAppointment(appointmentId, token);
        dispatch(removeAppointment(appointmentId));
      }
    });
  };
  useEffect(async () => {
    const userById = await getUser(userId);
    setUser(userById);
  }, []);
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
              <button
                type="button"
                className="btn-header-users header__nav-link"
                onClick={handleDeleteAppointment}
                id="CancelDate"
                style={{ cursor: 'pointer' }}
              >
                Cancelar Cita
              </button>
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
              <button
                type="button"
                className="btn-header-users header__nav-link"
                onClick={handleDeleteAppointment}
                id="CancelDate"
                style={{ cursor: 'pointer' }}
              >
                Cancelar Cita
              </button>
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
  appointmentId: PropTypes.string,
};
CardViewer.defaultProps = {
  userId: '',
  start: '',
  end: '',
  viewer: false,
  appointmentId: '',
};

export default CardViewer;
