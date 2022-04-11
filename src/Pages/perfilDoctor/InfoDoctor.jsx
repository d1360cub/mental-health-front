import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import doctorImage from '../../image/doc-350x350.png';
import Calendar from '../../Components/Calendar/index';
import './InfoDoctor.css';

function InfoDoctor({ image = doctorImage, firstName, lastName}) {
  //const params = useParams();{params.doctorId}
  return (
    <div className="calendar-perfilInfo">
      <div className="perfilInformacion">
        <div className="infobasica">
          <img src={image} alt="" />
          <h1>Nombre Doctor</h1>
          <h3>Matricula profesional</h3>
          <p>Descripción </p>
        </div>
        <div className="atencion">
          <h3>Areas de atención</h3>
          <p>Adultos Maoyres</p>
          <p>Autocuidado</p>
          <p>Ansiedad</p>
          <p>Deterioro cognitivo</p>
          <p>Equilibrio e inteligencia emociona</p>
        </div>
        <div className="expProfesional">
          <h3>Expriencia profesional</h3>
          <p>Esperiencia de 3 años en el trabajo con comunidades vulnerables</p>
        </div>
        <div className="formacionAcademica">
          <h3>Formación Académica</h3>
          <p>
            <span>Licenciatura en psicología</span>
            <br />
            <span>Universidad de Antioquia</span>
          </p>
          <p>
            <span>Mestría en psicoterapia</span>
            <br />
            <span>Universidad Nacional</span>
          </p>

        </div>
      </div>
      <div className="calendariodoctor">
        <Calendar />
      </div>
    </div>

  );
}

InfoDoctor.propTypes = {
  image: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,

};

InfoDoctor.defaultProps = {
  image: doctorImage,
  firstName: '',
  lastName: '',

};

export default InfoDoctor;
