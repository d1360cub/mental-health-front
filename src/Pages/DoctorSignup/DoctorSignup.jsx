import React, { useState } from 'react';
import sweetalert from 'sweetalert';
import { useDispatch } from 'react-redux';
import { createUser } from '../../store/actions';
import './DoctorSignup.css';

function DoctorSignup() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
      role: 'doctor',
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser(form));
    setForm({});
    sweetalert({
      title: 'Gracias por registrarte con nosotros.',
      text: 'Para continuar con el proceso revisa tu correo',
      buttons: ['Cancelar', 'Continuar'],
    });
  };
  return (
    <div className="landing__doctor">
      <div className="subtitle__doctor">Bienvenido, Doctor</div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="firstName" className="doctors__label">
            Nombre
            <br />
            <input
              type="text"
              id="firstName"
              name="firstName"
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
          <label htmlFor="email" className="doctors__label">
            Email
            <br />
            <input
              type="email"
              id="email"
              name="email"
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
          <label htmlFor="academic" className="doctors__label">
            Formación académica
            <br />
            <input
              type="text"
              id="academic"
              name="academic"
              size="30"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="atentionarea" className="doctors__label">
            Areas de atención
            <br />
            <input
              type="text"
              id="atentionarea"
              name="atentionarea"
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
          <label htmlFor="experience" className="doctors__label">
            Experiencia profesional
            <br />
            <input
              type="text"
              id="experience"
              name="experience"
              size="30"
              onChange={handleChange}
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
