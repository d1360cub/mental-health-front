/* eslint-disable no-tabs */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import sweetalert from 'sweetalert';
import styled from 'styled-components';
import { getUser } from '../../services/user';
import { showAppointByDocId, reserveOneAppointment, resetState } from '../../store/actions';
import { createAppointmet } from '../../services/appointments';
import doctorImage from '../../image/doc-350x350.png';
import Calendar from '../../Components/Calendar/index';
import ModalAppointment from '../../Components/ModalAppointment';
import './InfoDoctor.css';

function InfoDoctor({ image = doctorImage }) {
  const navigate = useNavigate();
  const [stateModal, setStateModal] = useState(false);
  const [doctor, setDoctor] = useState([]);
  const [form, setForm] = useState({});
  const params = useParams();
  const dataAppointments = useSelector((state) => state.appointments);
  const preAppointment = useSelector((state) => state.preAppointment);
  const patient = useSelector((state) => state.user);
  const { user } = patient;
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
    // dispatch(resetState());
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
          sweetalert({ text: 'preagendamiento cancelado', timer: '3000' });
          dispatch(resetState());
        }
      });
    }
  };

  useEffect(() => {
    fetchDoctors();
    dispatch(showAppointByDocId(params.doctorId));
  }, [params.doctorId]);

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
        <div>
          <ContentBotonModal>
            <Boton onClick={() => setStateModal(!stateModal)}>solicitud cita</Boton>
          </ContentBotonModal>
          <ModalAppointment
            stateModal={stateModal}
            setStateModal={setStateModal}
          >
            <Contenido>
              <h2>tu cita ha sido programada con el profesional:</h2>
              <p>
                {doctor.firstName}
                {' '}
                {doctor.lastName}
              </p>
              <span>
                la hora de inicio es:
                {preAppointment.start}
              </span>
              <br />
              <span>
                la hora de finalizacion es:
                {preAppointment.end}
              </span>
              <br />
              <p>
                el valor a cancelar es:
                {preAppointment.doctorId}
              </p>
              <Boton>Confirmar</Boton>
            </Contenido>
          </ModalAppointment>
        </div>
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

export default InfoDoctor;

const ContentBotonModal = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;
const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p, span {
		font-size: 18px;
		margin-bottom: 5px;
	}
`;
