/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import sweetalert from 'sweetalert';
import { getUser } from '../../services/user';
import { showAppointByDocId, reserveOneAppointment, resetState } from '../../store/actions';
import { createAppointmet } from '../../services/appointments';
import doctorImage from '../../image/doc-350x350.png';
import Calendar from '../../Components/Calendar/index';
import './InfoDoctor.css';

function InfoDoctor({ image = doctorImage }) {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState([]);
  const [form, setForm] = useState({});
  const params = useParams();
  const dataAppointments = useSelector((state) => state.appointments);
  const preAppointment = useSelector((state) => state.preAppointment);
  const patient = useSelector((state) => state.user);
  const { user } = patient;
  // const userLogin = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const fetchDoctors = async () => {
    const data = await getUser(params.doctorId);
    setDoctor(data);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm(
      {
        ...form,
        [name]: value,
      },
    );
  };
  function handleConfirm() {
    const patientId = user._id;
    const appointmentConfirm = preAppointment;
    appointmentConfirm.patientId = `${patientId}`;
    createAppointmet(appointmentConfirm, localStorage.getItem('token'));
    dispatch(resetState());
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      const splitTime = await form.startTime.split(':');
      splitTime[0] = (parseInt((splitTime[0]), 10) + 1).toString();
      const endHour = splitTime.join(':');
      dispatch(reserveOneAppointment({
        start: `${form.date}T${form.startTime}`,
        end: `${form.date}T${endHour}`,
        doctorId: params.doctorId,
      }));
      sweetalert({
        title: 'Te falta un ultimo paso',
        text: 'para continuar con la solicitud de cita lo invitamos a que inicie sesion',
        icon: 'info',
        buttons: ['Cancelar', 'Continuar'],
      }).then((respuesta) => {
        if (respuesta) {
          navigate('/login');
        } else {
          sweetalert({ text: 'resetear store', timer: '3000' });
        }
      });
    }
  };

  useEffect(() => {
    fetchDoctors();
    dispatch(showAppointByDocId(params.doctorId));
  }, []);

  return (
    <div className="calendar-perfilInfo">
      <div className="perfilInformacion">
        <div className="infobasica">
          <img className="fotoperfil" src={image} alt="" />
          <h1 className="tilesdoctor1">
            {doctor.firstName}
            {' '}
            {doctor.lastName}
          </h1>
          <h3 className="tilesdoctor1">Matricula profesional</h3>
          <p>
            {doctor?.description}
            {' '}
          </p>
        </div>
        <div className="atencion">
          <h3 className="tilesdoctor1">Areas de atención</h3>
          <p>{doctor?.atentionarea}</p>
        </div>
        <div className="expProfesional">
          <h3 className="tilesdoctor1">Expriencia profesional</h3>
          <p>{doctor?.experience}</p>
        </div>
        <div className="formacionAcademica">
          <h3 className="tilesdoctor1">Formación Académica</h3>
          <p>
            <span>{doctor?.academic}</span>
            <br />
          </p>
        </div>
      </div>
      <div className="calendariodoctor">
        <Calendar events={dataAppointments} />
        <form onSubmit={handleSubmit}>
          <fieldset>
            <input type="date" name="date" min="Date().now" className="form-control" onChange={handleChange} required />
            <input type="time" name="startTime" step="3600" min="00:00" className="form-control" onChange={handleChange} required />
          </fieldset>
          <button type="submit" className="btn-appointment">Reservar</button>
          <br />
          <button type="button" className="btn-appointment" onClick={handleConfirm}>confirmar</button>
        </form>
        <br />
      </div>
    </div>

  );
}

InfoDoctor.propTypes = {
  image: PropTypes.string,

};

InfoDoctor.defaultProps = {
  image: doctorImage,

};
// dispatch(reserveOneAppointment({
//   start: `${form.date}T${form.startTime}`,
//   end: `${form.date}T${endHour}`,
//   doctorId: params.doctorId,
//   patientId: userLogin.user._id }));
export default InfoDoctor;
