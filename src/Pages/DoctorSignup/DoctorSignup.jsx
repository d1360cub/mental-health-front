import React, { useState } from 'react';
import newDoctor from '../../services/doctor';
import './DoctorSignup.css';

function DoctorSignup() {
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    newDoctor(form);
    setForm({});
  };
  return (
    <div className="landing__doctor">
      <div className="subtitle__doctor">Bienvenido, Doctor</div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name" className="doctors__label">
            Nombre
            <br />
            <input
              type="text"
              id="name"
              name="name"
              size="30"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="lastName" className="doctors__label">
            Apellido
            <br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              size="30"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="license" className="doctors__label">
            Matrícula profesional
            <br />
            <input
              type="text"
              id="license"
              name="license"
              size="30"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="services" className="doctors__label">
            Servicios
            <br />
            <input
              type="text"
              id="services"
              name="services"
              size="30"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <div className="table">
          <fieldset>
            <label htmlFor="description" className="doctors__label">
              Descripción de servicios profesionales
              <br />
              <textarea
                id="description"
                name="description"
                rows="8"
                cols="34"
                onChange={handleChange}
              />
            </label>
          </fieldset>
        </div>
        <fieldset>
          <label htmlFor="mail" className="doctors__label">
            Email
            <br />
            <input
              type="email"
              id="mail"
              name="mail"
              onChange={handleChange}
              size="30"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="phone" className="doctors__label">
            Celular
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
              size="30"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="password" className="doctors__label">
            Contraseña
            <br />
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              size="30"
            />
          </label>
        </fieldset>
        <input type="hidden" name="role" value="doctor" />
        <div className="btn__centered">
          <button type="submit" className="btn-appointment">
            Regístrate
          </button>
        </div>
      </form>
    </div>
  );
}

export default DoctorSignup;
