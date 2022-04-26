/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import sweetalert from 'sweetalert';
import styled from 'styled-components';
import { getUser } from '../../services/user';
import { showAppointByDocId, reserveOneAppointment, resetState } from '../../store/actions';
import Calendar from '../../Components/Calendar/index';
import ModalAppointment from '../../Components/ModalAppointment';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';
import './InfoDoctor.css';

function InfoDoctor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [stateModal, setStateModal] = useState(false);
  const [doctor, setDoctor] = useState([]);
  const [form, setForm] = useState({});
  const [dataCalen, setDataCalen] = useState({ startTime: '', endTime: '', finalDate: '' });
  const params = useParams();
  const dataAppointments = useSelector((state) => state.appointments);
  const preAppointment = useSelector((state) => state.preAppointment);
  const dataUser = useSelector((state) => state.user);

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
  function datacalendar() {
    const startSplitted = preAppointment.start.split('T');
    const endSplitted = preAppointment.end.split('T');
    const startDate = startSplitted[0].split('-');
    const finalDate = [];
    for (let i = 2; i >= 0; i -= 1) {
      finalDate.push(startDate[i]);
    }
    const dataprue = finalDate.join('/');
    const startTime = startSplitted[1];
    const endTime = endSplitted[1];
    setDataCalen({ startTime, endTime, dataprue });
  }
  function formatDate() {
    const splitTime = form.startTime.split(':');
    splitTime[0] = (parseInt((splitTime[0]), 10) + 1).toString();
    const endHour = splitTime.join(':');
    dispatch(reserveOneAppointment({
      start: `${form.date}T${form.startTime}`,
      end: `${form.date}T${endHour}`,
      doctorId: params.doctorId,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStateModal(false);
    const token = localStorage.getItem('token');
    if (!token) {
      formatDate();
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
    } else {
      formatDate();
      setStateModal(true);
    }
    event.target.reset();
  };
  function cancelPreAppointment() {
    dispatch(resetState());
  }

  useEffect(() => {
    fetchDoctors();
    dispatch(showAppointByDocId(params.doctorId));
    if ((Object.keys(preAppointment).length !== 0) && (Object.keys(dataUser).length !== 0)) {
      datacalendar();
      setStateModal(true);
    }
  }, [preAppointment]);

  return (
    <div className="calendar-perfilInfo">
      <div className="perfilInformacion">
        <div className="infobasica">
          <img className="fotoperfil" src={doctor.avatar} alt={doctor.firstName} />
          <h1 className="tilesdoctor1">
            {doctor.firstName}
            {' '}
            {doctor.lastName}
          </h1>
          <h3 className="tilesdoctor1">Matricula profesional</h3>
          <p className="perfilParrafo">
            {doctor?.description}
            {' '}
          </p>
        </div>
        <div className="atencion">
          <h3 className="tilesdoctor1">Areas de atención</h3>
          <p className="perfilParrafo">{doctor?.atentionarea}</p>
        </div>
        <div className="expProfesional">
          <h3 className="tilesdoctor1">Expriencia profesional</h3>
          <p className="perfilParrafo">{doctor?.experience}</p>
        </div>
        <div className="formacionAcademica">
          <h3 className="tilesdoctor1">Formación Académica</h3>
          <p className="perfilParrafo">
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
        </form>
        <div>
          <ContentBotonModal>
            <Boton onClick={() => setStateModal(!stateModal)}>Solicitud cita</Boton>
          </ContentBotonModal>
          {(Object.keys(preAppointment).length !== 0)
            ? (
              <ModalAppointment
                stateModal={stateModal}
                setStateModal={setStateModal}
              >
                <Contenido>
                  <h2>Tu cita ha sido programada con el profesional:</h2>
                  <p>
                    {doctor.firstName}
                    {' '}
                    {doctor.lastName}
                  </p>
                  <span>
                    El día de la cita es:
                    {` ${dataCalen.dataprue}`}
                  </span>
                  <span>
                    La hora de inicio es:
                    {` ${dataCalen.startTime}`}
                  </span>
                  <br />
                  <span>
                    La hora de finalizacion es:
                    {` ${dataCalen.endTime}`}
                  </span>
                  <br />
                  <p>
                    El valor a cancelar es: $50.000 pesos
                  </p>
                  <button
                    type="button"
                    className="btn-appointment"
                    onClick={cancelPreAppointment}
                    style={
                    {
                      position: 'absolute',
                      bottom: '20px',
                      left: '40px',
                    }
                    }
                  >
                    Cancelar
                  </button>
                  <br />
                  <br />
                  <CheckoutForm />
                </Contenido>
              </ModalAppointment>
            )
            : null}
        </div>
        <br />
      </div>
    </div>
  );
}

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
  text-align: left;
  padding-left: 30px;
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
