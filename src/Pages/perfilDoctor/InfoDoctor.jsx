/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getUser } from '../../services/user';
import { showAppointByDocId, reserveOneAppointment } from '../../store/actions';
import Calendar from '../../Components/Calendar/index';
import './InfoDoctor.css';

function InfoDoctor() {
  const [user, setUser] = useState([]);
  const [form, setForm] = useState({});
  const params = useParams();
  const dataAppointments = useSelector((state) => state.appointments);
  const userLogin = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const fetchDoctors = async () => {
    const data = await getUser(params.doctorId);
    setUser(data);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('para agendar una cita primero debe de iniciar sesion ');
    } else {
      const splitTime = await form.startTime.split(':');
      splitTime[0] = (parseInt((splitTime[0]), 10) + 1).toString();
      const endHour = splitTime.join(':');
      dispatch(reserveOneAppointment({ start: `${form.date}T${form.startTime}`, end: `${form.date}T${endHour}`, doctorId: params.doctorId, patientId: userLogin.user._id }));
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
          <img className="fotoperfil" src={user.avatar} alt="" />
          <h1 className="tilesdoctor1">
            {user.firstName}
            {' '}
            {user.lastName}
          </h1>
          <h3 className="tilesdoctor1">Matricula profesional</h3>
          <p>
            {user?.description}
            {' '}
          </p>
        </div>
        <div className="atencion">
          <h3 className="tilesdoctor1">Areas de atención</h3>
          <p>{user?.atentionarea}</p>
        </div>
        <div className="expProfesional">
          <h3 className="tilesdoctor1">Expriencia profesional</h3>
          <p>{user?.experience}</p>
        </div>
        <div className="formacionAcademica">
          <h3 className="tilesdoctor1">Formación Académica</h3>
          <p>
            <span>{user?.academic}</span>
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
        </form>
        <br />
        <Link className="agendarcita" to="/Login"> iniciar sesion</Link>
      </div>
    </div>

  );
}

export default InfoDoctor;
