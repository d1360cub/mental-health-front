import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getUser } from '../../services/user';
import { showAppointByDocId } from '../../store/actions';
import doctorImage from '../../image/doc-350x350.png';
import Calendar from '../../Components/Calendar/index';
import './InfoDoctor.css';

function InfoDoctor({ image = doctorImage }) {
  const [user, setUser] = useState([]);
  const params = useParams();
  const dataAppointments = useSelector((state) => state.appointments);
  const dispatch = useDispatch();
  const fetchDoctors = async () => {
    const data = await getUser(params.doctorId);
    setUser(data);
  };

  useEffect(() => {
    fetchDoctors();
    dispatch(showAppointByDocId(params.doctorId));
  }, []);
  // const params = useParams();{params.doctorId}
  return (
    <div className="calendar-perfilInfo">
      <div className="perfilInformacion">
        <div className="infobasica">
          <img className="fotoperfil" src={image} alt="" />
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
        <input type="datetime-local" />
        <Link className="agendarcita" to="/login"> Agendar una cita</Link>
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
