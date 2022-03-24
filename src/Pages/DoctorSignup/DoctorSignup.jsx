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
          <label htmlFor="name">
            Nombres
            <input
              type="text"
              id="name"
              name="name"
              size="20"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="lastName">
            Apellidos
            <input
              type="text"
              id="lastName"
              name="lastName"
              size="20"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="services">
            Servicios
            <input
              type="text"
              id="services"
              name="services"
              size="20"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <div className="table">
          <fieldset>
            <label htmlFor="description">
              Descripción
              <br />
              <textarea
                id="description"
                name="description"
                rows="8"
                cols="30"
                onChange={handleChange}
              />
            </label>
          </fieldset>
        </div>
        <fieldset>
          <label htmlFor="mail">
            Email
            <input
              type="email"
              id="mail"
              name="mail"
              onChange={handleChange}
              size="22"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="password">
            Contraseña
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              size="17"
            />
          </label>
        </fieldset>
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
